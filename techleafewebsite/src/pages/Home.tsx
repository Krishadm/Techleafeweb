

import type { CSSProperties } from "react";

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

const lineOne = "Next-Gen Engineering for";
const lineTwo = "Enterprise AI, Blockchain & Mobile Applications.";

export default function HomePage() {
  const renderLetters = (text: string, startIndex: number) => {
    let letterIndex = startIndex;

    return text.split(" ").map((word, wordIndex, words) => (
      <span className="hero-word" key={`${word}-${wordIndex}`}>
        {word.split("").map((letter, index) => {
          const currentIndex = letterIndex;
          letterIndex += 1;

          return (
            <span
              className="hero-letter"
              key={`${word}-${index}`}
              style={
                {
                  "--letter-index": currentIndex,
                } as CSSProperties
              }
            >
              {letter}
            </span>
          );
        })}

        {wordIndex < words.length - 1 && (
          <span className="hero-space" aria-hidden="true">
            {" "}
          </span>
        )}
      </span>
    ));
  };

  return (
    <main className="home-page">
      {/* HERO SECTION */}
      <section className="hero" id="expertise">
        {/* BACKGROUND GREEN GLOW */}
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-content">
          {/* TOP PILLS */}
          <div className="pill-row">
            {pills.map((pill) => (
              <Pill key={pill}>{pill}</Pill>
            ))}
          </div>

          {/* ANIMATED MAIN HEADING */}
          <h1 className="hero-animated-heading">
            {/* WHITE LINE */}
            <span className="heading-line heading-white">
              {renderLetters(lineOne, 0)}
            </span>

            {/* GREEN LINE */}
            <strong className="heading-line heading-green">
              {renderLetters(lineTwo, lineOne.length)}
            </strong>
          </h1>

          {/* DESCRIPTION */}
          <p className="hero-copy">
            Tech Leafe Technologies delivers high-performance software
            engineering for scaling startups and enterprises. From
            enterprise-grade AI &amp; private RAG pipelines to secure blockchain
            protocols and high-speed web &amp; mobile applications, our team
            turns complex tech requirements into reliable production software.
          </p>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section
        className="impact-section"
        id="impact"
        aria-label="Key performance statistics"
      >
        {/* GREEN DASHED DIVIDER */}
        <div className="dashed-line" aria-hidden="true" />

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
