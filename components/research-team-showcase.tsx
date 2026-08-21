"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, UserRound } from "@/components/icons";
import type { TeamMember } from "@/src/content/types";

interface ResearchTeamShowcaseProps {
  members: TeamMember[];
  eyebrow?: string;
  title?: string;
  ctaLabel?: string;
}

export function ResearchTeamShowcase({
  members,
  eyebrow = "Research Team",
  title = "Research Team",
  ctaLabel = "Meet the Research Team",
}: ResearchTeamShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const total = members.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const AUTOPLAY_INTERVAL = 6000;

  const goTo = useCallback((index: number, dir: "next" | "prev") => {
    if (total <= 1) return;
    setDirection(dir);
    setIsAnimating(true);
    setCurrentIndex(index);
    const animTimer = setTimeout(() => setIsAnimating(false), 450);
    return () => clearTimeout(animTimer);
  }, [total]);

  const handleNext = useCallback(() => {
    goTo((currentIndex + 1) % total, "next");
  }, [currentIndex, goTo, total]);

  const handlePrev = useCallback(() => {
    goTo((currentIndex - 1 + total) % total, "prev");
  }, [currentIndex, goTo, total]);

  // Autoplay management
  useEffect(() => {
    if (total <= 1 || isPaused) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (timeoutRef.current) clearInterval(timeoutRef.current);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const interval = setInterval(() => {
      if (!document.hidden) {
        handleNext();
      }
    }, AUTOPLAY_INTERVAL);

    timeoutRef.current = interval as unknown as NodeJS.Timeout;

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [handleNext, isPaused, total]);

  if (!members || members.length === 0) {
    return null;
  }

  const member = members[currentIndex];
  const displayName = member.title ? `${member.title} ${member.name}` : member.name;
  const currentFormatted = String(currentIndex + 1).padStart(2, "0");
  const totalFormatted = String(total).padStart(2, "0");
  const showcaseAreas = member.areas?.slice(0, 4) ?? [];

  return (
    <section
      className="section section-white team-showcase-section"
      aria-label="Research Team Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container">
        <div className="section-heading">
          <div className="section-copy">
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
          <Link className="text-link" href="/team">
            <span>{ctaLabel}</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="team-showcase">
          <div className="team-showcase-stage">
            <div className="team-showcase-grid">
              {/* Media Column */}
              <div className="team-showcase-media">
                <div className={`team-showcase-portrait-wrap ${isAnimating ? `animating-${direction}` : ""}`}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={displayName}
                      width={640}
                      height={760}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 420px"
                      className="team-showcase-img"
                      priority={currentIndex === 0}
                    />
                  ) : (
                    <div className="team-showcase-placeholder" aria-hidden="true">
                      <div className="team-placeholder-icon">
                        <UserRound size={64} strokeWidth={1.25} />
                      </div>
                      <span className="team-placeholder-initial">{member.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Information Column */}
              <div className={`team-showcase-content ${isAnimating ? `animating-${direction}` : ""}`}>
                <div className="team-showcase-meta">
                  <span className="team-showcase-tag">Team Member {currentFormatted}</span>
                  <h3 className="team-showcase-name">{displayName}</h3>
                  {member.affiliation && (
                    <p className="team-showcase-affiliation">{member.affiliation}</p>
                  )}
                </div>

                {showcaseAreas.length > 0 && (
                  <div className="team-showcase-areas">
                    <span className="team-showcase-areas-label">Research Areas</span>
                    <div className="tag-list">
                      {showcaseAreas.map((area, i) => (
                        <span className="tag" key={`${area}-${i}`}>
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {member.currentProjects && (
                  <div className="team-showcase-current-project-wrap">
                    <span className="team-showcase-areas-label">Current Research</span>
                    <p className="team-showcase-current-project">
                      {member.currentProjects}
                    </p>
                  </div>
                )}

                <div className="team-showcase-actions">
                  <Link
                    href={`/team/${member.id}`}
                    className="button button-sm button-primary"
                  >
                    <span>View Profile</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>

                  {(member.professionalUrl || member.scholarUrl) && (
                    <div className="team-showcase-external-links">
                      {member.professionalUrl && (
                        <a
                          href={member.professionalUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="team-showcase-subtle-link"
                          aria-label={`Professional Profile of ${displayName}`}
                        >
                          <span>Professional Profile</span>
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      )}
                      {member.scholarUrl && (
                        <a
                          href={member.scholarUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="team-showcase-subtle-link"
                          aria-label={`Google Scholar profile of ${displayName}`}
                        >
                          <span>Google Scholar</span>
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Controls & Progress */}
          <div className="team-showcase-footer">
            <div className="team-showcase-controls" role="region" aria-label="Carousel Controls">
              <button
                type="button"
                className="showcase-nav-button"
                onClick={handlePrev}
                aria-label="Previous team member"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <div className="showcase-counter" aria-live="polite" aria-atomic="true">
                <span className="current">{currentFormatted}</span>
                <span className="divider">/</span>
                <span className="total">{totalFormatted}</span>
              </div>
              <button
                type="button"
                className="showcase-nav-button"
                onClick={handleNext}
                aria-label="Next team member"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="team-showcase-progress">
              <div
                className="team-showcase-progress-bar"
                style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                role="progressbar"
                aria-valuenow={currentIndex + 1}
                aria-valuemin={1}
                aria-valuemax={total}
                aria-label={`Member ${currentIndex + 1} of ${total}`}
              />
            </div>

            <div className="team-showcase-cta">
              <Link className="button button-secondary button-sm" href="/team">
                <span>{ctaLabel}</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
