import type { Disciplina } from "../../types/disciplina";
import "./TodaySubjects.css";

type Props = {
  disciplinas: Disciplina[];
};

export default function TodaySubjects({ disciplinas }: Props) {
  if (disciplinas.length === 0) {
    return (
      <div className="today-empty">
        <h2>📚 Disciplinas de Hoje</h2>

        <p>Nenhuma disciplina para hoje.</p>
      </div>
    );
  }

  return (
    <section>

      <h2 className="today-title">
        📚 Disciplinas de Hoje
      </h2>

      <div className="subjects-grid">

        {disciplinas.map((disciplina) => (
          <div
            key={`${disciplina.nome}-${disciplina.horario}`}
            className="subject-card"
          >
            <h3>{disciplina.nome}</h3>

            <p>
              📍 {disciplina.local}
            </p>

            <p>
              🕒 {disciplina.horario}
            </p>

            <span className="chat-online">
              💬 {disciplina.chatStatus}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}