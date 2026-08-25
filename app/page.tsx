import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { CoreProjectsGrid } from "@/components/core-projects";
import { HeroRankingLoop } from "@/components/hero-ranking-loop";
import { ProfileLinks } from "@/components/profile-links";
import { SectionHeading } from "@/components/ui";
import {
  approvedText,
  getCoreProjects,
  getFeaturedAffiliations,
  getFeaturedPublications,
  getHomeContent,
  getLatestPublications,
  getProfile,
  getSiteContent,
} from "@/src/content/loaders";
export default function HomePage() {
  const site = getSiteContent();
  const home = getHomeContent();
  const profile = getProfile();
  const coreProjects = getCoreProjects();
  const publications =
    home.publicationPreview === "latest"
      ? getLatestPublications(home.previewLimits.publications)
      : getFeaturedPublications(home.previewLimits.publications);
  const affiliations = getFeaturedAffiliations(home.previewLimits.affiliations);
  const bioText = approvedText(profile.biography);
  const heroEyebrow = approvedText(home.hero.eyebrow) || "My Portfolio";

  return (
    <>
      {/* 01 Hero */}
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            {heroEyebrow && <span className="eyebrow">{heroEyebrow}</span>}
            <div className="hero-identity">
              <h1 className="hero-title">
                <span className="hero-name-prefix">{profile.prefix}</span>
                <span className="hero-name">{profile.displayName}</span>
                <span className="hero-chinese-name">{profile.chineseName}</span>
              </h1>
            </div>
            <div className="hero-meta-row">
              <p className="profile-credentials">{profile.credentials.join(" · ")}</p>
            </div>
            {home.hero.rankings && home.hero.rankings.length > 0 && (
              <HeroRankingLoop rankings={home.hero.rankings} />
            )}
            <div className="button-row">
              <Link className="button button-primary" href="/research">
                {home.actions.research || "View Research"} <ArrowRight size={17} />
              </Link>
              <Link className="button button-secondary" href="/publications">
                {home.actions.publications}
              </Link>
            </div>
          </div>
          <div className="hero-portrait" aria-label={profile.portraitAlt}>
            <div className="portrait-shape">
              <Image
                src={home.hero.portrait}
                alt={profile.portraitAlt}
                width={1067}
                height={1600}
                sizes="(max-width: 860px) 100vw, 48vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* 02 Short Bio */}
      {bioText && (
        <section className="home-bio-section" aria-labelledby="home-bio-heading">
          <div className="container home-bio-grid">
            <div className="home-bio-aside">
              <span className="eyebrow">About me</span>
              <h2 id="home-bio-heading" className="home-bio-title">
                A Passionate Sarawakian and Global Citizen Driven by Curiosity, Responsibility and Value Co-creation
              </h2>
              <div className="home-bio-cta">
                <Link className="text-link" href="/profile">
                  <span>{home.actions.profile || "View Full Profile"}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="home-bio-body">
              <p className="home-bio-copy">{bioText}</p>
            </div>
          </div>
        </section>
      )}

      {/* 03 Professional & Academic Links */}
      <section className="profile-links-strip" aria-labelledby="profile-links-heading">
        <div className="container profile-links-showcase">
          <h2 id="profile-links-heading" className="profile-links-title">
            Professional &amp; Academic Links
          </h2>
          <ProfileLinks links={site.socialLinks} animated />
        </div>
      </section>

      {/* 04 Core Projects */}
      {coreProjects.length > 0 && (
        <section className="section" aria-labelledby="core-projects-heading">
          <div className="container">
            <SectionHeading
              eyebrow={home.sections.coreProjects?.eyebrow || "Research"}
              title={home.sections.coreProjects?.title || "Core Projects"}
              href="/research"
              linkLabel={home.actions.research || "View Research"}
            />
            <CoreProjectsGrid items={coreProjects} />
          </div>
        </section>
      )}

      {/* 05 Latest Publications */}
      {publications.length > 0 && (
        <section className="section section-white">
          <div className="container">
            <SectionHeading
              eyebrow={home.sections.publications.eyebrow}
              title={home.sections.publications.title}
              href="/publications"
              linkLabel={home.actions.publications}
            />
            <div className="publication-list">
              {publications.map((item) => (
                <article className="publication-item" key={item.id}>
                  <div className="publication-year">{item.year}</div>
                  <div>
                    <div className="publication-title">
                      {item.editoriallyVerified ? item.title : item.citation}
                    </div>
                  </div>
                  <div className="publication-type">
                    <span className="badge">{item.type}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 07 Research Team */}
      <section
        className="section section-white home-team-section"
        aria-labelledby="home-team-heading"
      >
        <div className="container">
          <div className="section-heading">
            <div className="section-copy">
              <span className="eyebrow">{home.sections.team.eyebrow || "Research Team"}</span>
              <h2 id="home-team-heading">{home.sections.team.title || "Research Team"}</h2>
            </div>

            <Link className="text-link" href="/team">
              <span>{home.actions.team || "Meet the Research Team"}</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <Link
            href="/team"
            className="home-team-image-link"
            aria-label="Meet the Research Team - Prof. Hiram Ting Research Team"
          >
            <Image
              src="/uploads/team/all.jpg"
              alt="Prof. Hiram Ting Research Team"
              width={1600}
              height={900}
              className="home-team-image"
              sizes="(max-width: 620px) calc(100vw - 48px), 900px"
              draggable={false}
            />
          </Link>
        </div>
      </section>
    </>
  );
}
