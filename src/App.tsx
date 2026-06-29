import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import type { Disciplina } from "./types/disciplina";
import "./App.css";

function getTime() {
  return new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function getDate() {
  return new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function App() {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [nome, setNome] = useState("Estudante");
  const [loading, setLoading] = useState(true);

  const [hora, setHora] = useState(getTime());
  const [data, setData] = useState(getDate());

  async function sincronizar() {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:3001/sigaa");
      const json = await res.json();

      setDisciplinas(json.disciplinas || []);
      if (json.nomeAluno) {
        setNome(json.nomeAluno);
      }
    } catch (error) {
      console.error("Erro ao sincronizar:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    sincronizar();
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(getTime());
      setData(getDate());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <Dashboard
      disciplinas={disciplinas}
      nome={nome}
      loading={loading}
      hora={hora}
      data={data}
      sincronizar={sincronizar}
    />
  );
}