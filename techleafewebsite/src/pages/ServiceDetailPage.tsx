import { Link, useParams } from "react-router-dom";
import { DISCIPLINES } from "../data/servicesData";

export default function ServiceDetailPage() {
  const { slug } = useParams();

  const service = DISCIPLINES.flatMap((discipline) => discipline.services).find(
    (item) => item.slug === slug,
  );

  if (!service) {
    return (
      <main className="simple-page">
        <h1>Service not found</h1>
        <Link to="/">Back home</Link>
      </main>
    );
  }

  return (
    <main className="simple-page" style={{ textAlign: "left", padding: "48px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Link to="/" style={{ color: "#3ecf6e", display: "inline-block", marginBottom: 16 }}>
          ← Back
        </Link>
        <h1 style={{ fontSize: "2.5rem", marginBottom: 16 }}>{service.label}</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: 1.7 }}>
          This is the dedicated brief page for the selected expertise service. The dropdown remains
          the main expertise entry point, and this page is opened only when a user selects a specific
          service from that menu.
        </p>
      </div>
    </main>
  );
}
