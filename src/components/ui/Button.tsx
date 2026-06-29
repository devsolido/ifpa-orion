type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "18px",
        background: "#0F9D58",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "14px",
        fontSize: "18px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: "0 8px 20px rgba(15,157,88,.35)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#16C172";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#0F9D58";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </button>
  );
}