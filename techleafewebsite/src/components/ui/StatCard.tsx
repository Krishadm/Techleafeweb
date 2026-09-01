import { useEffect, useRef, useState } from "react";

type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const cardRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const startCounter = () => {
      const duration = 1500;
      const startTime = performance.now();

      const numericValue = parseFloat(
        value.replace(/[^\d.]/g, "")
      );

      const hasDecimal = value.includes(".");
      const decimals = hasDecimal ? 1 : 0;

      const prefix = value.startsWith("<") ? "<" : "";

      const suffix = value.includes("%")
        ? "%"
        : value.includes("+")
        ? "+"
        : "";

      const animate = (currentTime: number) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const currentValue = numericValue * progress;

        setDisplayValue(
          `${prefix}${currentValue.toFixed(decimals)}${suffix}`
        );

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startCounter();
        }
      },
      {
        threshold: 0.4,
      }
    );

    const currentCard = cardRef.current;

    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }

      observer.disconnect();
    };
  }, [value]);

  return (
    <article
      className="stat-card"
      ref={cardRef}
    >
      <div className="stat-number">
        <strong>{displayValue}</strong>
      </div>

      <p>{label}</p>
    </article>
  );
}