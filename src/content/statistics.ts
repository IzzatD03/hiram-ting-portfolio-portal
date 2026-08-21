import {
  getAffiliations,
  getCoreProjects,
  getEvents,
  getIndustryProjects,
  getNews,
  getPublications,
  getResearch,
} from "./loaders";

export type PortfolioStatistic = {
  id: "research-programmes" | "publication-records" | "academic-appointments" | "core-projects" | "industry-projects" | "event-records" | "media-records";
  label: string;
  value: number;
  sourceFile: string;
  scope: "visible-published";
};

/**
 * Statistics are derived exclusively from records that have already passed
 * schema validation and the public visibility gate (`visible + published`).
 * No statistic value is editable in content files.
 */
export function getPortfolioStatistics(): PortfolioStatistic[] {
  return [
    {
      id: "research-programmes",
      label: "Research programmes listed",
      value: getResearch().programmes.length,
      sourceFile: "content/research.json",
      scope: "visible-published",
    },
    {
      id: "publication-records",
      label: "Publications listed",
      value: getPublications().length,
      sourceFile: "content/publications.csv",
      scope: "visible-published",
    },
    {
      id: "academic-appointments",
      label: "Academic appointments listed",
      value: getAffiliations().academic.length,
      sourceFile: "content/affiliations.json",
      scope: "visible-published",
    },
    {
      id: "core-projects",
      label: "Core projects listed",
      value: getCoreProjects().length,
      sourceFile: "content/core-projects.json",
      scope: "visible-published",
    },
    {
      id: "industry-projects",
      label: "Industry projects listed",
      value: getIndustryProjects().length,
      sourceFile: "content/industry-projects.json",
      scope: "visible-published",
    },
    {
      id: "event-records",
      label: "Events listed",
      value: getEvents().length,
      sourceFile: "content/events.csv",
      scope: "visible-published",
    },
    {
      id: "media-records",
      label: "Media records listed",
      value: getNews().length,
      sourceFile: "content/news.csv",
      scope: "visible-published",
    },
  ];
}

function selectStatistics(ids: PortfolioStatistic["id"][]) {
  const statistics = getPortfolioStatistics();
  return ids.map((id) => statistics.find((item) => item.id === id)!);
}

export const getHomeStatistics = () => selectStatistics([
  "research-programmes",
  "publication-records",
  "academic-appointments",
  "media-records",
]);

export const getEngagementStatistics = () => selectStatistics([
  "event-records",
  "media-records",
  "academic-appointments",
]);

export const getCvStatistics = () => selectStatistics([
  "academic-appointments",
  "research-programmes",
  "publication-records",
  "core-projects",
]);

export function getPublicationTypeStatistics() {
  const publications = getPublications();
  return [
    { id: "journal", label: "Journal Articles", value: publications.filter((item) => item.type === "journal").length },
    { id: "book-chapter", label: "Books & Chapters", value: publications.filter((item) => item.type === "book" || item.type === "chapter").length },
    { id: "conference", label: "Conference Proceedings", value: publications.filter((item) => item.type === "conference").length },
  ] as const;
}
