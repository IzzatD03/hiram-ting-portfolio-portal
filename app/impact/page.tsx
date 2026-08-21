import type { Metadata } from "next";
import { CoreProjectsGrid } from "@/components/core-projects";
import { ArrowUpRight } from "@/components/icons";
import { PageHero, SectionHeading } from "@/components/ui";
import {
  approvedText,
  getCoreProjects,
  getEvents,
  getImpactContent,
  getIndustryProjects,
} from "@/src/content/loaders";

export function generateMetadata(): Metadata {
  const impact = getImpactContent();
  return { title: impact.page.title };
}

export default function ImpactPage() {
  const impact = getImpactContent();
  const coreProjects = getCoreProjects();
  const industryProjects = getIndustryProjects();
  const events = getEvents();

  const internationalEvents = events.filter((event) => event.scope === "international");
  const domesticEvents = events.filter((event) => event.scope === "domestic");

  return (
    <>
      <PageHero
        eyebrow={impact.page.eyebrow}
        current={impact.page.title}
        title={impact.page.title}
        description={approvedText(impact.page.description)}
      />

      {/* 01 Core Projects */}
      {coreProjects.length > 0 && (
        <section className="section" id="core-projects" aria-labelledby="core-projects-heading">
          <div className="container">
            <SectionHeading
              eyebrow="01 — Core Projects"
              title={impact.sections.coreProjects || "Core Projects"}
            />
            <CoreProjectsGrid items={coreProjects} />
          </div>
        </section>
      )}

      {/* 02 Industry Projects */}
      {industryProjects.length > 0 && (
        <section className="section section-white" id="industry-projects" aria-labelledby="industry-projects-heading">
          <div className="container">
            <SectionHeading
              eyebrow="02 — Industry Projects"
              title={impact.sections.industryProjects || "Industry Projects"}
            />
            <div className="industry-projects-grid">
              {industryProjects.map((project, index) => (
                <article className="card industry-project-card" key={project.id}>
                  <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="industry-project-title">{project.title}</h3>
                  {project.evidenceUrl && (
                    <div style={{ marginTop: 16 }}>
                      <a
                        className="text-link"
                        href={project.evidenceUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>View Evidence</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 03 Events */}
      {events.length > 0 && (
        <section className="section" id="events" aria-labelledby="events-heading">
          <div className="container">
            <SectionHeading
              eyebrow="03 — Events"
              title={impact.sections.events || "Events"}
            />
            <div className="events-subsections">
              {/* International Events */}
              {internationalEvents.length > 0 && (
                <div className="events-subsection">
                  <div className="events-subsection-header">
                    <h3 className="events-subsection-title">
                      {impact.sections.internationalEvents || "International Events"}
                    </h3>
                    <span className="events-subsection-count">
                      {internationalEvents.length} records
                    </span>
                  </div>
                  <div className="grid grid-3">
                    {internationalEvents.map((event, index) => (
                      <article className="card event-card-light" key={event.id}>
                        <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                        <h3>{event.title}</h3>
                        <div className="tag-list">
                          {event.displayDate && <span className="tag">{event.displayDate}</span>}
                        </div>
                        {event.url && (
                          <div style={{ marginTop: 20 }}>
                            <a
                              className="text-link"
                              href={event.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span>Event Source</span>
                              <ArrowUpRight size={14} aria-hidden="true" />
                            </a>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Domestic Events */}
              {domesticEvents.length > 0 && (
                <div className="events-subsection">
                  <div className="events-subsection-header">
                    <h3 className="events-subsection-title">
                      {impact.sections.domesticEvents || "Domestic Events"}
                    </h3>
                    <span className="events-subsection-count">
                      {domesticEvents.length} records
                    </span>
                  </div>
                  <div className="grid grid-3">
                    {domesticEvents.map((event, index) => (
                      <article className="card event-card-light" key={event.id}>
                        <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                        <h3>{event.title}</h3>
                        <div className="tag-list">
                          {event.displayDate && <span className="tag">{event.displayDate}</span>}
                        </div>
                        {event.url && (
                          <div style={{ marginTop: 20 }}>
                            <a
                              className="text-link"
                              href={event.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span>Event Source</span>
                              <ArrowUpRight size={14} aria-hidden="true" />
                            </a>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
