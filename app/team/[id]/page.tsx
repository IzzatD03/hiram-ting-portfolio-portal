import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, FlaskConical, Globe, GraduationCap, UserRound } from "@/components/icons";
import { notFound } from "next/navigation";
import { getTeam, getTeamMember } from "@/src/content/loaders";

interface MemberPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  const team = getTeam();
  if (!team.enabled) return [];
  return team.members.map((member) => ({ id: member.id }));
}

export async function generateMetadata({ params }: MemberPageProps): Promise<Metadata> {
  const { id } = await params;
  const member = getTeamMember(id);
  if (!member) return { title: "Member Profile" };
  const displayName = member.title ? `${member.title} ${member.name}` : member.name;
  return {
    title: `${displayName} | Research Team`,
    description: member.affiliation
      ? `${displayName} — ${member.affiliation}`
      : `Research profile of ${displayName}`,
  };
}

/**
 * Safely parse current projects if numbered or multi-line
 */
function parseProjects(raw: string): string[] {
  const trimmed = raw.trim();
  if (!trimmed) return [];

  // Check for (1), (2) or 1., 2.
  if (/\(\d+\)/.test(trimmed)) {
    return trimmed.split(/\s*(?=\(\d+\))/).map((p) => p.trim()).filter(Boolean);
  }
  if (/^\d+\.\s+/m.test(trimmed)) {
    return trimmed.split(/\s*(?=\d+\.\s+)/).map((p) => p.trim()).filter(Boolean);
  }

  return [trimmed];
}

/**
 * Clean sentence punctuation trailing a matched URL or DOI
 */
function cleanUrlAndTrailing(raw: string): { url: string; trailing: string } {
  let url = raw;
  let trailing = "";

  while (url.length > 0) {
    const lastChar = url.slice(-1);
    if ([".", ",", ";", ":"].includes(lastChar)) {
      trailing = lastChar + trailing;
      url = url.slice(0, -1);
    } else if (lastChar === ")") {
      const openCount = (url.match(/\(/g) || []).length;
      const closeCount = (url.match(/\)/g) || []).length;
      if (closeCount > openCount) {
        trailing = lastChar + trailing;
        url = url.slice(0, -1);
      } else {
        break;
      }
    } else {
      break;
    }
  }

  return { url, trailing };
}

/**
 * Detect URLs in citation strings and render them safely as clickable links
 */
function renderWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+|doi:\s*10\.\d{4,9}\/[-._;()/:A-Z0-9]+|10\.\d{4,9}\/[-._;()/:A-Z0-9]+)/gi;
  const parts = text.split(urlRegex);

  return (
    <>
      {parts.map((part, i) => {
        if (/^https?:\/\//i.test(part)) {
          const { url, trailing } = cleanUrlAndTrailing(part);
          return (
            <span key={i}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="member-profile-citation-link"
              >
                <span>{url}</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              {trailing}
            </span>
          );
        }
        if (/^10\.\d{4,9}\//i.test(part) || /^doi:\s*10\./i.test(part)) {
          const { url, trailing } = cleanUrlAndTrailing(part);
          const doiClean = url.replace(/^doi:\s*/i, "");
          return (
            <span key={i}>
              <a
                href={`https://doi.org/${doiClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="member-profile-citation-link"
              >
                <span>{url}</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              {trailing}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export default async function MemberProfilePage({ params }: MemberPageProps) {
  const { id } = await params;
  const member = getTeamMember(id);

  if (!member) {
    notFound();
  }

  const displayName = member.title ? `${member.title} ${member.name}` : member.name;
  const publications = member.selectedPublications;
  const projects = parseProjects(member.currentProjects);

  return (
    <>
      {/* Profile Page Header */}
      <header className="page-hero member-profile-hero">
        <div className="container page-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/team">Research Team</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{member.name}</span>
          </nav>
          <div className="member-profile-hero-back">
            <Link href="/team" className="member-profile-back-link">
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Back to Research Team</span>
            </Link>
          </div>
          <h1>{displayName}</h1>
          {member.affiliation && (
            <p className="lead member-profile-hero-affiliation">{member.affiliation}</p>
          )}
        </div>
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
      </header>

      {/* Main Profile Content */}
      <section className="section">
        <div className="container member-profile-layout">
          {/* Sidebar Column */}
          <aside className="member-profile-sidebar">
            <div className="member-profile-photo-card">
              <div className="member-profile-photo">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={displayName}
                    width={720}
                    height={860}
                    sizes="(max-width: 860px) 100vw, 340px"
                    priority
                  />
                ) : (
                  <div className="member-profile-placeholder" aria-hidden="true">
                    <UserRound size={64} strokeWidth={1.25} />
                    <span className="member-profile-placeholder-initial">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              <div className="member-profile-card-body">
                {member.role && (
                  <div className="member-role">{member.role}</div>
                )}
                <h2 className="member-profile-card-name">{displayName}</h2>
                {member.affiliation && (
                  <p className="member-profile-card-affiliation">{member.affiliation}</p>
                )}

                {(member.professionalUrl || member.scholarUrl) && (
                  <div className="member-profile-links">
                    {member.professionalUrl && (
                      <a
                        href={member.professionalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="member-profile-link-item"
                        aria-label={`Professional Profile of ${displayName}`}
                      >
                        <Globe size={16} aria-hidden="true" />
                        <span>Professional Profile</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                    {member.scholarUrl && (
                      <a
                        href={member.scholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="member-profile-link-item"
                        aria-label={`Google Scholar profile of ${displayName}`}
                      >
                        <GraduationCap size={16} aria-hidden="true" />
                        <span>Google Scholar</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {member.areas && member.areas.length > 0 && (
              <div className="member-profile-sidebar-block">
                <h3 className="member-profile-sidebar-title">Research Areas</h3>
                <div className="tag-list">
                  {member.areas.map((area, idx) => (
                    <span className="tag" key={`${area}-${idx}`}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* Main Detail Column */}
          <main className="member-profile-main">
            {/* Current Research Section */}
            <section className="member-profile-section" aria-labelledby="current-research-heading">
              <div className="member-profile-section-header">
                <FlaskConical size={22} className="member-profile-section-icon" aria-hidden="true" />
                <h2 id="current-research-heading" className="member-profile-section-title">
                  Current Research
                </h2>
              </div>
              <div className="member-profile-section-body">
                {projects.length > 0 ? (
                  <div className="member-profile-projects-list">
                    {projects.map((project, pIdx) => (
                      <article className="card member-profile-project-card" key={pIdx}>
                        <p className="member-profile-project-text">
                          {renderWithLinks(project)}
                        </p>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="muted">Current research initiatives in preparation.</p>
                )}
              </div>
            </section>

            {/* Selected Publications Section */}
            <section className="member-profile-section" aria-labelledby="selected-pubs-heading">
              <div className="member-profile-section-header">
                <BookOpen size={22} className="member-profile-section-icon" aria-hidden="true" />
                <h2 id="selected-pubs-heading" className="member-profile-section-title">
                  Selected Publications &amp; Manuscripts
                </h2>
              </div>
              <div className="member-profile-section-body">
                {publications.length > 0 ? (
                  <div className="member-profile-publications-list">
                    {publications.map((pub, pubIdx) => (
                      <article className="card member-profile-publication-card" key={pubIdx}>
                        <span className="member-profile-pub-index">
                          {String(pubIdx + 1).padStart(2, "0")}
                        </span>
                        <div className="member-profile-pub-content">
                          <p className="member-profile-pub-citation">
                            {renderWithLinks(pub)}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="muted">Publications and forthcoming papers are currently in preparation.</p>
                )}
              </div>
            </section>
          </main>
        </div>
      </section>
    </>
  );
}
