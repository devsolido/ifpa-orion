import "./Sidebar.css";

const menu = [
  { icon: "🏠", title: "Dashboard" },
  { icon: "📚", title: "Disciplinas" },
  { icon: "📊", title: "Notas" },
  { icon: "📅", title: "Agenda" },
  { icon: "📈", title: "Frequência" },
  { icon: "📂", title: "Arquivos" },
  { icon: "⚙️", title: "Configurações" },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>🚀 ORION</h2>
        <span>IFPA Marabá</span>
      </div>

      <nav>
        {menu.map((item) => (
          <button key={item.title} className="menu-item">
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}