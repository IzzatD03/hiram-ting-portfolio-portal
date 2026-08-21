"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export interface RankingItem {
  id: string;
  image: string;
  url: string;
  alt: string;
}

interface HeroRankingLoopProps {
  rankings: RankingItem[];
}

const ENTER_DURATION = 500;
const VISIBLE_DURATION = 1000;
const EXIT_DURATION = 400;

export function HeroRankingLoop({ rankings }: HeroRankingLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"enter" | "visible" | "exit">("enter");
  const [isPaused, setIsPaused] = useState(false);
  const total = rankings.length;

  useEffect(() => {
    if (total <= 1 || isPaused) {
      return;
    }

    const t1 = setTimeout(() => {
      setPhase("visible");
    }, ENTER_DURATION);

    const t2 = setTimeout(() => {
      setPhase("exit");
    }, ENTER_DURATION + VISIBLE_DURATION);

    const t3 = setTimeout(() => {
      setPhase("enter");
      setCurrentIndex((prev) => (prev + 1) % total);
    }, ENTER_DURATION + VISIBLE_DURATION + EXIT_DURATION);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [currentIndex, isPaused, total]);

  if (!rankings || total === 0) {
    return null;
  }

  const currentRanking = rankings[currentIndex];
  const activePhase = total <= 1 ? "visible" : phase;

  return (
    <div
      className="hero-ranking-showcase"
      aria-label="Academic rankings and recognitions"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Hidden preloads for other ranking images */}
      <div className="sr-only" aria-hidden="true">
        {rankings.map((r, i) => (
          <Image
            key={r.id}
            src={r.image}
            alt=""
            width={300}
            height={80}
            priority={i < 2}
            sizes="300px"
          />
        ))}
      </div>

      <div className="hero-ranking-frame">
        <a
          key={currentRanking.id}
          href={currentRanking.url}
          target="_blank"
          rel="noreferrer"
          className={`hero-ranking-card hero-ranking-${activePhase}`}
          aria-label={currentRanking.alt}
        >
          <Image
            src={currentRanking.image}
            alt={currentRanking.alt}
            width={300}
            height={80}
            className="hero-ranking-img"
            sizes="(max-width: 640px) 200px, 280px"
            priority
          />
        </a>
      </div>
    </div>
  );
}
