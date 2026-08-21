import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, UserRound } from "@/components/icons";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui";
import { approvedText, getTeam } from "@/src/content/loaders";

export const metadata: Metadata = { title: "Research Team" };

export default function TeamPage() {
  const team = getTeam();
  if (!team.enabled) notFound();

  return (
    <>
      <PageHero
        eyebrow={team.page.eyebrow}
        current={team.page.title}
        title={team.page.title}
        description={approvedText(team.page.description)}
      />
      <section className="section">
        <div className="container">
          {team.members.length > 0 ? (
            <div className="grid grid-4 team-grid">
              {team.members.map((member) => {
                const displayName = member.title ? `${member.title} ${member.name}` : member.name;

                return (
                  <article className="card member-card" key={member.id}>
                    <div className="member-photo">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={displayName}
                          width={720}
                          height={760}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="member-placeholder" aria-hidden="true">
                          <UserRound size={48} strokeWidth={1.25} />
                          <span className="member-placeholder-letter">{member.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div className="member-content">
                      {member.role && <div className="member-role">{member.role}</div>}
                      <h2>{displayName}</h2>
                      {member.affiliation && (
                        <p className="member-affiliation">{member.affiliation}</p>
                      )}

                      {member.areas && member.areas.length > 0 && (
                        <div className="member-section">
                          <span className="member-section-label">Research Areas</span>
                          <div className="tag-list member-area-list">
                            {member.areas.map((area, idx) => (
                              <span className="tag" key={`${area}-${idx}`}>
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="member-card-footer">
                        {(member.professionalUrl || member.scholarUrl) && (
                          <div className="member-links">
                            {member.professionalUrl && (
                              <a
                                href={member.professionalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="member-subtle-link"
                                aria-label={`Professional Profile of ${displayName}`}
                              >
                                <span>Professional</span>
                                <ArrowUpRight size={13} aria-hidden="true" />
                              </a>
                            )}
                            {member.scholarUrl && (
                              <a
                                href={member.scholarUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="member-subtle-link"
                                aria-label={`Google Scholar profile of ${displayName}`}
                              >
                                <span>Scholar</span>
                                <ArrowUpRight size={13} aria-hidden="true" />
                              </a>
                            )}
                          </div>
                        )}

                        <Link
                          href={`/team/${member.id}`}
                          className="button button-sm button-primary member-profile-cta"
                        >
                          <span>View Profile</span>
                          <ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="team-empty">
              <UserRound size={42} aria-hidden="true" />
              <h2>Team profiles coming soon</h2>
              <p>{approvedText(team.emptyState)}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
