import "./WelcomeCard.css";

type WelcomeCardProps = {
  nome: string;
  saudacao: string;
  data: string;
  totalHoje: number;
};

export default function WelcomeCard({
  nome,
  saudacao,
  data,
  totalHoje,
}: WelcomeCardProps) {
  return (
    <section className="welcome-card">
      <div className="welcome-content">
        <span className="welcome-system">IFPA ORION</span>

        <h1>
          {saudacao}, <strong>{nome}</strong> 👋
        </h1>

        <p className="welcome-date">{data}</p>

        <div className="welcome-info">
          <div className="welcome-stat">
            <span className="number">{totalHoje}</span>
            <span className="label">
              disciplina{totalHoje !== 1 ? "s" : ""} hoje
            </span>
          </div>
        </div>
      </div>

      <div className="welcome-logo">🎓</div>
    </section>
  );
}