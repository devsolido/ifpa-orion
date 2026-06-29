import type { Disciplina } from "../types/disciplina";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCards from "../components/dashboard/StatsCards";
import TodaySubjects from "../components/dashboard/TodaySubjects";

type DashboardProps = {
  disciplinas: Disciplina[];
  nome: string;
  loading: boolean;
  hora: string;
  data: string;
  sincronizar: () => void;
};

const mapaDias: Record<number, string> = {
  1: "2", // Segunda
  2: "3", // Terça
  3: "4", // Quarta
  4: "5", // Quinta
  5: "6", // Sexta
  6: "7", // Sábado
};

export default function Dashboard({
  disciplinas,
  nome,
  loading,
  data,
  sincronizar,
}: DashboardProps) {
  const horaAtual = new Date().getHours();

  let saudacao = "Boa noite";

  if (horaAtual < 12) {
    saudacao = "Bom dia";
  } else if (horaAtual < 18) {
    saudacao = "Boa tarde";
  }

  const codigoHoje = mapaDias[new Date().getDay()] ?? "";

  const disciplinasHoje = disciplinas.filter((disciplina) =>
    disciplina.horario.startsWith(codigoHoje)
  );

  const chatsOnline = disciplinas.filter(
    (d) => d.chatStatus === "Online"
  ).length;

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "32px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
        <button
          onClick={sincronizar}
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#38bdf8",
            color: "#0f172a",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
            transition: "0.2s",
          }}
        >
          {loading ? "Sincronizando..." : "🔄 Sincronizar com SIGAA"}
        </button>
      </div>

      <WelcomeCard
        nome={nome}
        saudacao={saudacao}
        data={data}
        totalHoje={disciplinasHoje.length}
      />

      <StatsCards
        totalDisciplinas={disciplinas.length}
        disciplinasHoje={disciplinasHoje.length}
        chatsOnline={chatsOnline}
        atividades={0}
      />

      {loading ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p style={{ fontSize: "18px", color: "#94a3b8" }}>
            🔄 Carregando dados do SIGAA...
          </p>
        </div>
      ) : (
        <TodaySubjects disciplinas={disciplinasHoje} />
      )}
    </div>
  );
}