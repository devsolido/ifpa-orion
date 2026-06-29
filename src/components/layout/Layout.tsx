import { TopBar } from "./TopBar";
import { Sidebar } from "../sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B1220",
        color: "white",
      }}
    >
      <TopBar />

      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "32px",
            overflow: "auto",
          }}
        >
          {children}
        </div>
      </div>
    </main>
  );
}