import type { Metadata } from "next";
import { PublicationCatalog } from "@/components/publication-catalog";
import { PageHero, SectionHeading } from "@/components/ui";
import { approvedText, getPublications, getPublicationsPage } from "@/src/content/loaders";
import { getPublicationTypeStatistics } from "@/src/content/statistics";

export function generateMetadata(): Metadata {
  const content = getPublicationsPage();
  return { title: content.page.title };
}

export default function PublicationsPage() {
  const content = getPublicationsPage();
  const publications = getPublications();
  const typeStatistics = getPublicationTypeStatistics();
  return <><PageHero eyebrow={content.page.eyebrow} current={content.page.title} title={content.page.title} description={approvedText(content.page.description)} /><PublicationCatalog publications={publications} labels={content.labels} /><section className="section section-white"><div className="container"><SectionHeading eyebrow={content.sections.typesEyebrow} title={content.sections.typesTitle} /><div className="grid grid-3">{typeStatistics.map((item, index) => <article className="card" key={item.id}><span className="card-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.label}</h3><strong className="catalog-stat-value">{item.value}</strong></article>)}</div></div></section></>;
}
