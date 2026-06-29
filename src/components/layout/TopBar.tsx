import { useEffect, useState } from "react";

interface TopBarProps {
  onSync?: () => void;
}

export function TopBar({ onSync }: TopBarProps) {
  const [horaAtual, setHoraAtual] = useState("");
  const [dataAtual, setDataAtual] = useState("");

  useEffect(() => {
    const atualizar = () => {
      const agora = new Date();

      setHoraAtual(
        agora.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );

      setDataAtual(
        agora.toLocaleDateString("pt-BR", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      );
    };

    atualizar();

    const intervalo = setInterval(atualizar, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <header
      style={{
        height: 72,
        background: "#0B1220",
        borderBottom: "1px solid #1E293B",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 28px",
      }}
    >
      {/* Esquerda */}
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: 24,
            color: "white",
          }}
        >
          🚀 IFPA Orion
        </h1>

        <div
          style={{
            color: "#94A3B8",
            fontSize: 14,
            marginTop: 2,
          }}
        >
          Sistema Acadêmico Inteligente
        </div>
      </div>

      {/* Centro */}
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#22C55E",
            fontFamily: "monospace",
          }}
        >
          {horaAtual}
        </div>

        <div
          style={{
            color: "#CBD5E1",
            fontSize: 14,
          }}
        >
          {dataAtual}
        </div>

        <div
          style={{
            color: "#64748B",
            fontSize: 13,
          }}
        >
          📍 Marabá - PA
        </div>
      </div>

      {/* Direita */}
      <button
        onClick={onSync}
        style={{
          background: "#16A34A",
          color: "white",
          border: "none",
          borderRadius: 10,
          padding: "10px 18px",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        🔄 Sincronizar
      </button>
    </header>
  );
}