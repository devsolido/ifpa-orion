import express from "express";
import cors from "cors";
import { chromium } from "playwright";

const app = express();
app.use(cors());

let browser;
let page;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const SIGAA_HOME = "https://sigaa.ifpa.edu.br/sigaa/public/home.jsf";
const SIGAA_DISCENTE = "https://sigaa.ifpa.edu.br/sigaa/portais/discente/discente.jsf";

// 🧠 validações centrais
const hasHorario = (t) => /\dM\d+/.test(t);

const isNoise = (nome) => {
  return (
    nome.includes("Turmas do Semestre") ||
    nome.includes("Componente Curricular") ||
    nome.includes("Acessar") ||
    nome.includes("Visualizar") ||
    nome.includes("Comunidade") ||
    nome.includes("Fluxograma") ||
    nome.includes("Cadastrar") ||
    nome.includes("Ver todas") ||
    nome.includes("Chat") ||
    nome.length < 3
  );
};

app.get("/sigaa", async (req, res) => {
  try {
    // =========================
    // 🧠 INIT BROWSER
    // =========================
    if (!browser) {
      browser = await chromium.launch({
        headless: false,
        slowMo: 25
      });

      page = await browser.newPage();
    }

    console.log("🌐 Abrindo SIGAA...");
    await page.goto(SIGAA_HOME, {
      waitUntil: "domcontentloaded",
      timeout: 60000
    });

    console.log("🔐 Aguarde login manual...");

    // =========================
    // 🔐 LOGIN SEGURO
    // =========================
    let logged = false;
    let tries = 0;
    const maxTries = 600;

    while (!logged && tries < maxTries) {
      tries++;

      try {
        const url = page.url();

        if (url.includes("discente.jsf")) {
          logged = true;
          break;
        }

        const ok = await page.evaluate(() => {
          const t = document.body?.innerText || "";
          return t.includes("Turmas") || t.includes("Horário");
        });

        if (ok) {
          logged = true;
          break;
        }
      } catch {}

      await sleep(1000);
    }

    if (!logged) {
      throw new Error("Login não detectado com segurança");
    }

    console.log("✅ LOGIN OK");

    // =========================
    // 🟢 ENTRA NO PORTAL
    // =========================
    await page.goto(SIGAA_DISCENTE, {
      waitUntil: "domcontentloaded",
      timeout: 60000
    });

    await sleep(1500);

    // =========================
    // 📊 EXTRAÇÃO FINAL LIMPA
    // =========================
    const result = await page.evaluate(() => {
      // Extração do Nome do Aluno
      const nomeElement = document.querySelector(".info-usuario .nome") ||
                         document.querySelector(".usuario") ||
                         document.querySelector("#painel-usuario .nome");

      let nomeAluno = "Estudante";
      if (nomeElement) {
        nomeAluno = nomeElement.innerText.split("\n")[0].trim();
        // Limpar prefixos comuns se existirem
        nomeAluno = nomeAluno.replace("Bem vindo, ", "").replace("Usuário: ", "");
      }

      const links = Array.from(document.querySelectorAll("a"));
      const raw = [];

      for (const link of links) {
        const nome = (link.innerText || "").trim();
        const onclick = link.getAttribute("onclick") || "";

        if (!nome || !onclick.includes("jsfcljs")) continue;

        const container =
          link.closest("tr") ||
          link.closest("table") ||
          link.closest("div") ||
          link.parentElement;

        const text = (container?.innerText || "").trim();

        if (!/\dM\d+/.test(text)) continue;

        const lines = text
          .split("\n")
          .map(l => l.trim())
          .filter(Boolean);

        const local =
          lines.find(l => l.includes("CAMPUS")) || "";

        const horario =
          lines.find(l => /\dM\d+/.test(l)) || "";

        const key = `${nome}|${horario}|${local}`;

        raw.push({
          key,
          nome,
          local,
          horario,
          chatStatus: text.includes("Docente Offline")
            ? "Offline"
            : "Online"
        });
      }

      // 🧠 dedupe forte
      const map = new Map();
      for (const d of raw) {
        if (!map.has(d.key)) {
          map.set(d.key, d);
        }
      }

      return {
        nomeAluno,
        disciplinas: Array.from(map.values())
      };
    });

    const { nomeAluno, disciplinas } = result;

    console.log("📊 EXTRAÇÃO FINAL:", disciplinas.length, "| Aluno:", nomeAluno);

    // =========================
    // 🧯 VALIDAÇÃO FINAL
    // =========================
    if (disciplinas.length === 0) {
      console.log("⚠️ ALERTA: zero disciplinas");
    }

    res.json({
      status: "success",
      total: disciplinas.length,
      nomeAluno,
      disciplinas
    });

  } catch (err) {
    console.log("❌ ERRO:", err.message);

    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});

app.listen(3001, () => {
  console.log("🚀 ORION vFINAL rodando em http://localhost:3001");
});