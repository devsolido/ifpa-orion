type LoginCardProps = {
  logo: string;
};

export function LoginCard({ logo }: LoginCardProps) {
  return (
    <div
      style={{
        width: "650px",
        maxWidth: "90%",
        background: "#111827",
        border: "1px solid #1E293B",
        borderRadius: "22px",
        padding: "50px",
        boxShadow: "0 20px 60px rgba(0,0,0,.35)",
      }}
    >
      <img
        src={logo}
        alt="IFPA"
        style={{
          width: "170px",
          display: "block",
          margin: "0 auto 25px",
        }}
      />

      <h1
        style={{
          margin: 0,
          textAlign: "center",
          color: "white",
        }}
      >
        IFPA Orion
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#94A3B8",
          marginTop: "18px",
          lineHeight: 1.6,
        }}
      >
        Plataforma inteligente para estudantes do
        IFPA Campus Marabá Industrial.
      </p>

      <div
        style={{
          marginTop: "35px",
          color: "#CBD5E1",
          lineHeight: 2,
        }}
      >
        ✓ Notas e Frequência<br />
        ✓ Horários das Aulas<br />
        ✓ Histórico Escolar<br />
        ✓ Avisos Acadêmicos<br />
        ✓ Dashboard Inteligente
      </div>

      <button
        style={{
          width: "100%",
          marginTop: "40px",
          padding: "18px",
          background: "#15803D",
          border: "none",
          borderRadius: "14px",
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Entrar com SIGAA
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "25px",
          color: "#64748B",
          fontSize: "14px",
        }}
      >
        Sua senha nunca é armazenada pelo Orion.
      </p>
    </div>
  );
} '' 