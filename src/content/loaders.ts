import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "csv-parse/sync";
import type { z } from "zod";
import { normalizeContent } from "./normalize";
import {
  affiliationsSchema,
  coreProjectsSchema,
  cvSchema,
  eventSchema,
  homeSchema,
  impactSchema,
  industryProjectsSchema,
  newsSchema,
  profileSchema,
  publicationsPageSchema,
  publicationSchema,
  researchSchema,
  siteSchema,
  teamSchema,
} from "./schemas";
import type { CoreProject, IndustryProject, ManagedCopy, NewsItem, PortfolioEvent, Publication, TeamMember } from "./types";

const contentDirectory = join(process.cwd(), "content");

function loadJson<T extends z.ZodType>(filename: string, schema: T): z.infer<T> {
  const raw = JSON.parse(readFileSync(join(contentDirectory, filename), "utf8"));
  return schema.parse(normalizeContent(raw));
}

function loadCsv<T extends z.ZodType>(filename: string, schema: T): z.infer<T>[] {
  const raw = readFileSync(join(contentDirectory, filename), "utf8");
  const records = parse(raw, { bom: true, columns: true, skip_empty_lines: true, trim: true });
  return records.map((record: unknown) => schema.parse(normalizeContent(record)));
}

function isPublished(item: { visible: boolean; status: string }) {
  return item.visible && item.status === "published";
}

export function approvedText(copy: ManagedCopy) {
  return copy.status === "approved" ? copy.text : "";
}

export function getSiteContent() {
  const site = loadJson("site.json", siteSchema);
  return {
    ...site,
    navigation: site.navigation.filter((item) => item.visible),
    socialLinks: site.socialLinks.filter((item) => item.visible),
  };
}

export const getHomeContent = () => loadJson("home.json", homeSchema);
export const getProfile = () => loadJson("profile.json", profileSchema);
export const getCv = () => loadJson("cv.json", cvSchema);
export const getPublicationsPage = () => loadJson("publications.json", publicationsPageSchema);
export const getImpactContent = () => loadJson("impact.json", impactSchema);

export function getCoreProjects(): CoreProject[] {
  const content = loadJson("core-projects.json", coreProjectsSchema);
  return content.items.filter(isPublished);
}

export function getCoreProjectsContent() {
  const content = loadJson("core-projects.json", coreProjectsSchema);
  return {
    ...content,
    items: content.items.filter(isPublished),
  };
}

export function getIndustryProjects(): IndustryProject[] {
  const content = loadJson("industry-projects.json", industryProjectsSchema);
  return content.items.filter(isPublished);
}

export function getIndustryProjectsContent() {
  const content = loadJson("industry-projects.json", industryProjectsSchema);
  return {
    ...content,
    items: content.items.filter(isPublished),
  };
}

export function getResearch() {
  const content = loadJson("research.json", researchSchema);
  return {
    ...content,
    programmes: content.programmes.filter(isPublished),
    methods: content.methods.filter(isPublished),
  };
}

export function getTeam() {
  const content = loadJson("team.json", teamSchema);
  return { ...content, members: content.members.filter(isPublished) };
}

export function getTeamMember(id: string): TeamMember | undefined {
  const team = getTeam();
  return team.members.find((member) => member.id === id);
}

export function getAffiliations() {
  const content = loadJson("affiliations.json", affiliationsSchema);
  return {
    ...content,
    academic: content.academic.filter(isPublished),
    professional: content.professional.filter(isPublished),
    editorial: content.editorial.filter(isPublished),
    recognitions: content.recognitions.filter(isPublished),
  };
}

export function getPublications(): Publication[] {
  return loadCsv("publications.csv", publicationSchema)
    .filter(isPublished)
    .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}

export function getNews(): NewsItem[] {
  return loadCsv("news.csv", newsSchema)
    .filter(isPublished)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getEvents(): PortfolioEvent[] {
  return loadCsv("events.csv", eventSchema).filter(isPublished);
}

export const getFeaturedPublications = (limit: number) => getPublications().filter((item) => item.featured).slice(0, limit);
export const getLatestPublications = (limit: number) => getPublications().slice(0, limit);
export const getFeaturedResearch = (limit: number) => getResearch().programmes.filter((item) => item.featured).slice(0, limit);
export const getHomepageTeamMembers = () => {
  const team = getTeam();
  return team.enabled ? team.members : [];
};
export const getFeaturedAffiliations = (limit: number) => {
  const affiliations = getAffiliations();
  return [...affiliations.professional, ...affiliations.academic]
    .filter((item) => item.featured)
    .slice(0, limit);
};
