import type { z } from "zod";
import type {
  affiliationsSchema,
  coreProjectSchema,
  coreProjectsSchema,
  cvSchema,
  eventSchema,
  homeSchema,
  impactSchema,
  industryProjectSchema,
  industryProjectsSchema,
  managedCopySchema,
  newsSchema,
  profileSchema,
  publicationsPageSchema,
  publicationSchema,
  rankingItemSchema,
  researchSchema,
  siteSchema,
  teamMemberSchema,
  teamSchema,
} from "./schemas";

export type ManagedCopy = z.infer<typeof managedCopySchema>;
export type SiteContent = z.infer<typeof siteSchema>;
export type HomeContent = z.infer<typeof homeSchema>;
export type RankingItem = z.infer<typeof rankingItemSchema>;
export type CoreProject = z.infer<typeof coreProjectSchema>;
export type CoreProjectsContent = z.infer<typeof coreProjectsSchema>;
export type IndustryProject = z.infer<typeof industryProjectSchema>;
export type IndustryProjectsContent = z.infer<typeof industryProjectsSchema>;
export type ProfileContent = z.infer<typeof profileSchema>;
export type ResearchContent = z.infer<typeof researchSchema>;
export type TeamContent = z.infer<typeof teamSchema>;
export type TeamMember = z.infer<typeof teamMemberSchema>;
export type AffiliationsContent = z.infer<typeof affiliationsSchema>;
export type ImpactContent = z.infer<typeof impactSchema>;
export type PublicationsPageContent = z.infer<typeof publicationsPageSchema>;
export type CvContent = z.infer<typeof cvSchema>;
export type Publication = z.infer<typeof publicationSchema>;
export type NewsItem = z.infer<typeof newsSchema>;
export type PortfolioEvent = z.infer<typeof eventSchema>;
