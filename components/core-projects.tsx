import { ArrowUpRight } from "@/components/icons";
import type { CoreProject } from "@/src/content/types";

export function CoreProjectsGrid({ items }: { items: CoreProject[] }) {
  return (
    <div className="grid grid-3 core-projects-grid">
      {items.map((item, index) => (
        <article className="card core-project-card" key={item.id}>
          <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="core-project-title">{item.title}</h3>
          <div className="core-project-links">
            {item.links.map((link, lIndex) => (
              <a
                key={lIndex}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="core-project-link"
                aria-label={`${item.title} - ${link.label} (opens in a new tab)`}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
