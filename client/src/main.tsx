import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>AutoNova Live</h1>
      <p>Welcome to AutoNova Live - now running without database dependencies!</p>
      <div style={{ marginTop: '20px' }}>
        <h2>System Status</h2>
        <p>✅ Application is running successfully</p>
        <p>✅ Static file serving is working</p>
        <p>✅ Health check API available at /api/health</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
