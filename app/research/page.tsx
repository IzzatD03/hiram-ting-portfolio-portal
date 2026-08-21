import type { Metadata } from "next";
import { CoreProjectsGrid } from "@/components/core-projects";
import { PageHero, SectionHeading } from "@/components/ui";
import { approvedText, getCoreProjects, getResearch } from "@/src/content/loaders";

export function generateMetadata(): Metadata {
  const research = getResearch();
  return { title: research.page.title };
}

export default function ResearchPage() {
  const research = getResearch();
  const coreProjects = getCoreProjects();

  return (
    <>
      <PageHero
        eyebrow={research.page.eyebrow}
        current={research.page.title}
        title={research.page.title}
        description={approvedText(research.page.description)}
      />
      {coreProjects.length > 0 && (
        <section className="section" aria-labelledby="core-projects-heading">
          <div className="container">
            <SectionHeading
              eyebrow={research.page.eyebrow}
              title={research.sections.programmes || "Core Projects"}
            />
            <CoreProjectsGrid items={coreProjects} />
          </div>
        </section>
      )}
      {research.methods.length > 0 && (
        <section className="section section-white">
          <div className="container">
            <SectionHeading eyebrow={research.page.eyebrow} title={research.sections.methods} />
            <div className="grid grid-3">
              {research.methods.map((item) => (
                <article className="card" key={item.id}>
                  <h3>{item.title}</h3>
                  {item.description && <p className="muted">{item.description}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
