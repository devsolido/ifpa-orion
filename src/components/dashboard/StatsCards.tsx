import "./StatsCards.css";

type StatsCardsProps = {
  totalDisciplinas: number;
  disciplinasHoje: number;
  chatsOnline: number;
  atividades: number;
};

type CardProps = {
  icone: string;
  valor: number;
  titulo: string;
};

function Card({ icone, valor, titulo }: CardProps) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icone}</div>

      <div className="stat-value">{valor}</div>

      <div className="stat-title">{titulo}</div>
    </div>
  );
}

export default function StatsCards({
  totalDisciplinas,
  disciplinasHoje,
  chatsOnline,
  atividades,
}: StatsCardsProps) {
  return (
    <section className="stats-grid">
      <Card
        icone="📚"
        valor={totalDisciplinas}
        titulo="Disciplinas"
      />

      <Card
        icone="📅"
        valor={disciplinasHoje}
        titulo="Hoje"
      />

      <Card
        icone="💬"
        valor={chatsOnline}
        titulo="Chats"
      />

      <Card
        icone="📝"
        valor={atividades}
        titulo="Atividades"
      />
    </section>
  );
}