import type { Disciplina } from "../types/disciplina";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCards from "../components/dashboard/StatsCards";

type DashboardProps = {
  disciplinas: Disciplina[];
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
  loading,
  data,
}: DashboardProps) {
  const horaAtual = new Date().getHours();

  let saudacao = "Boa noite";

  if (horaAtual < 12) {
    saudacao = "Bom dia";
  } else if (horaAtual < 18) {
    saudacao = "Boa tarde";
  }

  // Futuramente será obtido automaticamente do SIGAA
  const nomeAluno = "Igor";

  const codigoHoje = mapaDias[new Date().getDay()] ?? "";

  const disciplinasHoje = disciplinas.filter((disciplina) =>
    disciplina.horario.startsWith(codigoHoje)
  );

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "32px",
      }}
    >
      <WelcomeCard
        nome={nomeAluno}
        saudacao={saudacao}
        data={data}
        totalHoje={disciplinasHoje.length}
      />

      <StatsCards
        totalDisciplinas={disciplinas.length}
        disciplinasHoje={disciplinasHoje.length}
        chatsOnline={0}
        atividades={0}
      />

      <h2
        style={{
          marginBottom: "24px",
          fontSize: "28px",
        }}
      >
        📚 Disciplinas de Hoje
      </h2>

      {loading && (
        <p>Carregando disciplinas...</p>
      )}

      {!loading && disciplinasHoje.length === 0 && (
        <p>Você não possui disciplinas hoje.</p>
      )}

      {!loading &&
        disciplinasHoje.map((disciplina) => (
          <div
            key={disciplina.nome}
            style={{
              background: "#111827",
              border: "1px solid #1E293B",
              borderRadius: "16px",
              padding: "22px",
              marginBottom: "18px",
              transition: ".25s",
              boxShadow: "0 10px 25px rgba(0,0,0,.20)",
            }}
          >
            <h3
              style={{
                margin: 0,
                marginBottom: "14px",
                fontSize: "22px",
              }}
            >
              {disciplina.nome}
            </h3>

            <p>📍 {disciplina.local}</p>

            <p>🕒 {disciplina.horario}</p>

            <p>
              💬 <strong>{disciplina.chatStatus}</strong>
            </p>
          </div>
        ))}
    </div>
  );
}