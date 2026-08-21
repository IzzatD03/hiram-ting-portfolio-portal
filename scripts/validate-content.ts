import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "csv-parse/sync";
import { ZodError, type ZodType } from "zod";
import {
  affiliationsSchema,
  contentSchemas,
  coreProjectsSchema,
  eventSchema,
  homeSchema,
  impactSchema,
  industryProjectsSchema,
  newsSchema,
  publicationSchema,
  researchSchema,
  siteSchema,
  teamSchema,
} from "../src/content/schemas";
import { getPortfolioStatistics } from "../src/content/statistics";

const contentDirectory = join(process.cwd(), "content");
const mojibakePattern = /(?:â€|Ã.|Â.|\uFFFD)/;
const errors: string[] = [];

function formatError(file: string, error: unknown) {
  if (error instanceof ZodError) {
    for (const issue of error.issues) errors.push(`${file}: ${issue.path.join(".") || "root"} — ${issue.message}`);
  } else {
    errors.push(`${file}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function readUtf8(file: string) {
  const value = readFileSync(join(contentDirectory, file), "utf8");
  if (value.includes("\uFFFD")) errors.push(`${file}: invalid UTF-8 replacement character detected`);
  if (mojibakePattern.test(value)) errors.push(`${file}: possible mojibake detected`);
  return value;
}

function parseJson<T extends ZodType>(file: string, schema: T) {
  try {
    return schema.parse(JSON.parse(readUtf8(file)));
  } catch (error) {
    formatError(file, error);
    return null;
  }
}

function parseCsv<T extends ZodType>(file: string, schema: T) {
  try {
    const records = parse(readUtf8(file), { bom: true, columns: true, skip_empty_lines: true, trim: true }) as unknown[];
    return records.map((record, index) => {
      try { return schema.parse(record); }
      catch (error) { formatError(`${file} row ${index + 2}`, error); return null; }
    }).filter(Boolean) as Array<ReturnType<T["parse"]>>;
  } catch (error) {
    formatError(file, error);
    return [];
  }
}

function checkDuplicateIds(file: string, records: Array<{ id: string }>) {
  const seen = new Set<string>();
  for (const record of records) {
    if (seen.has(record.id)) errors.push(`${file}: duplicate id "${record.id}"`);
    seen.add(record.id);
  }
}

for (const [name, schema] of Object.entries(contentSchemas)) {
  const filename = name === "coreProjects" ? "core-projects.json" : name === "industryProjects" ? "industry-projects.json" : `${name}.json`;
  parseJson(filename, schema);
}

const publications = parseCsv("publications.csv", publicationSchema);
const news = parseCsv("news.csv", newsSchema);
const events = parseCsv("events.csv", eventSchema);
checkDuplicateIds("publications.csv", publications);
checkDuplicateIds("news.csv", news);
checkDuplicateIds("events.csv", events);

const affiliations = parseJson("affiliations.json", affiliationsSchema);
if (affiliations) checkDuplicateIds("affiliations.json", [...affiliations.academic, ...affiliations.professional, ...affiliations.editorial, ...affiliations.recognitions]);
const research = parseJson("research.json", researchSchema);
if (research) checkDuplicateIds("research.json", [...research.programmes, ...research.methods]);
const coreProjects = parseJson("core-projects.json", coreProjectsSchema);
if (coreProjects) checkDuplicateIds("core-projects.json", coreProjects.items);
const industryProjects = parseJson("industry-projects.json", industryProjectsSchema);
if (industryProjects) checkDuplicateIds("industry-projects.json", industryProjects.items);
const impact = parseJson("impact.json", impactSchema);
const team = parseJson("team.json", teamSchema);
if (team) {
  checkDuplicateIds("team.json", team.members);
}
const site = parseJson("site.json", siteSchema);
if (site) checkDuplicateIds("site.json socialLinks", site.socialLinks);
const home = parseJson("home.json", homeSchema);
if (home && research && home.previewLimits.research && research.programmes.filter((item) => item.featured).length > home.previewLimits.research) errors.push("research.json: featured programme count exceeds home.json preview limit");
if (home && home.publicationPreview === "featured" && home.previewLimits.publications && publications.filter((item) => item.featured).length > home.previewLimits.publications) errors.push("publications.csv: featured publication count exceeds home.json preview limit");
if (home && affiliations && home.previewLimits.affiliations && affiliations.academic.filter((item) => item.featured).length > home.previewLimits.affiliations) errors.push("affiliations.json: featured appointment count exceeds home.json preview limit");
if (home && team && home.previewLimits.team && team.members.filter((item) => item.visible && item.status === "published").length > home.previewLimits.team) errors.push("team.json: published member count exceeds home.json preview limit");

if (errors.length === 0) {
  try {
    const statistics = getPortfolioStatistics();
    checkDuplicateIds("derived portfolio statistics", statistics);
    for (const statistic of statistics) {
      if (!Number.isInteger(statistic.value) || statistic.value < 0) errors.push(`derived portfolio statistics: ${statistic.id} must be a non-negative integer`);
    }
  } catch (error) {
    formatError("derived portfolio statistics", error);
  }
}

if (errors.length > 0) {
  console.error(`Content validation failed with ${errors.length} issue(s):\n${errors.map((item) => `- ${item}`).join("\n")}`);
  process.exit(1);
}

console.log(`Content valid: ${publications.length} publications, ${news.length} news records, ${events.length} events, ${coreProjects?.items.length ?? 0} core projects and ${industryProjects?.items.length ?? 0} industry projects.`);
