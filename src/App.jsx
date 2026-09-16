import { useEffect, useState } from "react";

const cardStyle = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: 12,
  padding: 24,
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

export default function App() {
  const [now, setNow] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main
      style={{
        maxWidth: 880,
        margin: "0 auto",
        padding: "64px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span
          style={{
            alignSelf: "flex-start",
            background: "#e6f0ff",
            color: "#1b4fa0",
            borderRadius: 999,
            padding: "6px 14px",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 0.3,
          }}
        >
          Alloy sandbox ready
        </span>
        <h1 style={{ margin: 0, fontSize: 40, lineHeight: 1.15 }}>
          Alloy Test Build
        </h1>
        <p style={{ margin: 0, fontSize: 17, color: "#4a5a6b", maxWidth: 620 }}>
          This repository is wired up for Alloy dev sessions. The frontend runs
          in Docker Compose with host networking and is served through the Alloy
          preview proxy.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        <div style={cardStyle}>
          <h2 style={{ margin: 0, fontSize: 16, color: "#4a5a6b" }}>Frontend</h2>
          <p style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>
            Vite + React
          </p>
          <p style={{ margin: 0, fontSize: 14, color: "#6b7a8b" }}>
            Dev server on port 3000
          </p>
        </div>
        <div style={cardStyle}>
          <h2 style={{ margin: 0, fontSize: 16, color: "#4a5a6b" }}>Runtime</h2>
          <p style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>
            Docker Compose
          </p>
          <p style={{ margin: 0, fontSize: 14, color: "#6b7a8b" }}>
            docker-compose.alloy.yaml
          </p>
        </div>
        <div style={cardStyle}>
          <h2 style={{ margin: 0, fontSize: 16, color: "#4a5a6b" }}>
            Live check
          </h2>
          <p style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>{now}</p>
          <p style={{ margin: 0, fontSize: 14, color: "#6b7a8b" }}>
            React state updating each second
          </p>
        </div>
      </section>
    </main>
  );
}
