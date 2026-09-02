import Pill from "../ui/Pill";
import StatCard from "../ui/StatCard";

const pills = [
  "Innovation",
  "Strategic Smart Work",
  "Development",
];

const stats = [
  {
    value: "150+",
    label: "Smart contracts deployed",
  },
  {
    value: "99.9%",
    label: "Uptime & reliability",
  },
  {
    value: "<0.1%",
    label: "AI hallucination threshold",
  },
  {
    value: "100%",
    label: "Data isolation & security",
  },
];

export default function HomePage() {
  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="hero" id="expertise">

        {/* Background Green Glow */}
        <div
          className="hero-glow"
          aria-hidden="true"
        />

        <div className="hero-content">

          {/* TOP PILLS */}
          <div className="pill-row">
            {pills.map((pill) => (
              <Pill key={pill}>
                {pill}
              </Pill>
            ))}
          </div>

          {/* MAIN HEADING */}
          <h1>
            <span>
              Next-Gen Engineering for
            </span>

            <strong>
              Enterprise AI, Blockchain &amp; Mobile Applications.
            </strong>
          </h1>

          {/* DESCRIPTION */}
          <p className="hero-copy">
            Tech Leafe Technologies delivers high-performance
            software engineering for scaling startups and
            enterprises. From enterprise-grade AI &amp; private
            RAG pipelines to secure blockchain protocols and
            high-speed web &amp; mobile applications, our team
            turns complex tech requirements into reliable
            production software.
          </p>

          {/* CTA BUTTON */}
          <a
            className="primary-cta"
            href="#impact"
          >
            <span>
              Explore Expertise
            </span>

            <span
              className="arrow"
              aria-hidden="true"
            >
              →
            </span>
          </a>

        </div>
      </section>


      {/* STATISTICS SECTION */}
      <section
        className="impact-section"
        id="impact"
        aria-label="Key performance statistics"
      >

        {/* GREEN DASHED DIVIDER */}
        <div
          className="dashed-line"
          aria-hidden="true"
        />

        {/* STAT CARDS */}
        <div className="stats-grid">

          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}

        </div>

      </section>

    </main>
  );
}