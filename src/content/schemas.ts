import { z } from "zod";
import { csvBoolean } from "./normalize";

export const copyStatusSchema = z.enum(["approved", "draft", "archived"]);
export const recordStatusSchema = z.enum(["published", "draft", "archived"]);

export const managedCopySchema = z.object({
  text: z.string(),
  status: copyStatusSchema,
});

const assetPathSchema = z.string().regex(/^\/uploads\/[a-z0-9/.-]+$/, "Asset paths must use lowercase names under /uploads/");
const optionalUrlSchema = z.union([z.literal(""), z.url()]);
const boolSchema = z.preprocess(csvBoolean, z.boolean());

const pageSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: managedCopySchema,
});

export const siteSchema = z.object({
  schemaVersion: z.literal(1),
  lastUpdated: z.iso.date(),
  identity: z.object({
    shortName: z.string().min(1),
    displayName: z.string().min(1),
    portfolioLabel: z.string().min(1),
  }),
  seo: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    canonicalUrl: z.url(),
    keywords: z.array(z.string().min(1)),
  }),
  contact: z.object({
    email: z.email(),
    phoneDisplay: z.string().min(1),
    phoneInternational: z.string().regex(/^\+[0-9]+$/),
    address: z.string().min(1),
  }),
  socialLinks: z.array(z.object({
    id: z.string().min(1),
    label: z.string().min(1),
    url: optionalUrlSchema,
    identifier: z.string().default(""),
    kind: z.enum(["website", "academic", "recognition", "social"]),
    logo: z.union([z.literal(""), assetPathSchema]).optional(),
    horizontal: z.boolean().optional().default(false),
    visible: z.boolean(),
  }).superRefine((item, context) => {
    if (item.visible && !item.url) context.addIssue({ code: "custom", message: "Visible profile links require a verified URL" });
  })),
  navigation: z.array(z.object({ label: z.string().min(1), href: z.string().startsWith("/"), visible: z.boolean() })),
  contactCta: z.object({
    eyebrow: managedCopySchema,
    title: managedCopySchema,
    description: managedCopySchema,
    primaryLabel: z.string().min(1),
    secondaryLabel: z.string().min(1),
  }),
  footer: z.object({ motto: managedCopySchema }),
});

const coreProjectLinkSchema = z.object({
  label: z.string().min(1),
  url: z.url(),
});

export const coreProjectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  links: z.array(coreProjectLinkSchema).min(1),
  visible: z.boolean(),
  status: recordStatusSchema,
}).superRefine((item, context) => {
  if (item.visible && item.status !== "published") {
    context.addIssue({ code: "custom", message: "Visible core projects must have published status" });
  }
});

export const coreProjectsSchema = z.object({
  page: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
  }),
  items: z.array(coreProjectSchema),
});

export const industryProjectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  category: z.string().optional().default(""),
  role: z.string().optional().default(""),
  partner: z.string().optional().default(""),
  period: z.string().optional().default(""),
  summary: managedCopySchema.optional(),
  evidenceUrl: optionalUrlSchema.default(""),
  featured: z.boolean().optional().default(false),
  visible: z.boolean(),
  status: recordStatusSchema,
}).superRefine((item, context) => {
  if (item.visible && item.status !== "published") {
    context.addIssue({ code: "custom", message: "Visible industry projects must have published status" });
  }
});

export const industryProjectsSchema = z.object({
  page: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
  }).optional(),
  items: z.array(industryProjectSchema),
});

export const rankingItemSchema = z.object({
  id: z.string().min(1),
  image: assetPathSchema,
  url: z.url(),
  alt: z.string().min(1),
});

export const homeSchema = z.object({
  hero: z.object({
    eyebrow: managedCopySchema,
    summary: managedCopySchema.optional(),
    rankings: z.array(rankingItemSchema).default([]),
    portraitNote: z.object({
      title: managedCopySchema,
      description: managedCopySchema,
    }).optional(),
    portrait: assetPathSchema,
    brandImage: assetPathSchema,
  }),
  sections: z.object({
    coreProjects: z.object({ eyebrow: z.string().min(1), title: z.string().min(1) }).optional(),
    research: z.object({ eyebrow: z.string().min(1), title: z.string().min(1) }).optional(),
    publications: z.object({ eyebrow: z.string().min(1), title: z.string().min(1) }),
    affiliations: z.object({ eyebrow: z.string().min(1), title: z.string().min(1) }),
    team: z.object({ eyebrow: z.string().min(1), title: z.string().min(1) }),
  }),
  actions: z.object({
    research: z.string().min(1).optional(),
    publications: z.string().min(1),
    profile: z.string().min(1),
    team: z.string().min(1),
  }),
  publicationPreview: z.enum(["featured", "latest"]),
  previewLimits: z.object({
    research: z.number().int().positive().max(12).optional(),
    publications: z.number().int().positive().max(6),
    affiliations: z.number().int().positive().max(8),
    team: z.number().int().positive().max(24).optional(),
  }),
});

export const profileSchema = z.object({
  page: pageSchema,
  name: z.string().min(1),
  prefix: z.string().min(1),
  displayName: z.string().min(1),
  credentials: z.array(z.string().min(1)).min(1),
  chineseName: z.string().min(1),
  profession: managedCopySchema,
  biography: managedCopySchema,
  portrait: assetPathSchema,
  portraitAlt: z.string().min(1),
});

const recordStatusRefine = (item: { featured?: boolean; visible: boolean; status: string }, context: z.RefinementCtx) => {
  if (item.featured && (!item.visible || item.status !== "published")) {
    context.addIssue({ code: "custom", message: "Featured records must be visible and published" });
  }
  if (item.visible && item.status !== "published") {
    context.addIssue({ code: "custom", message: "Visible records must have published status" });
  }
};

const programmeSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  platform: z.string(),
  featured: z.boolean(),
  visible: z.boolean(),
  status: recordStatusSchema,
}).superRefine(recordStatusRefine);

export const researchSchema = z.object({
  page: pageSchema,
  sections: z.object({ programmes: z.string().min(1), methods: z.string().min(1), platforms: z.string().min(1) }),
  programmes: z.array(programmeSchema),
  methods: z.array(z.object({
    id: z.string().min(1), title: z.string().min(1), description: z.string(), visible: z.boolean(), status: recordStatusSchema,
  })),
});

export const teamMemberSchema = z.object({
  id: z.string().min(1),
  title: z.string().default(""),
  name: z.string().min(1),
  role: z.string().optional(),
  affiliation: z.string().default(""),
  bio: managedCopySchema.optional(),
  areas: z.array(z.string()).default([]),
  currentProjects: z.string().default(""),
  selectedPublications: z.array(z.string().min(1)).default([]),
  professionalUrl: optionalUrlSchema.default(""),
  scholarUrl: optionalUrlSchema.default(""),
  image: z.union([z.literal(""), assetPathSchema]),
  visible: z.boolean(),
  status: recordStatusSchema,
});

export const teamSchema = z.object({
  enabled: z.boolean(),
  page: pageSchema,
  emptyState: managedCopySchema,
  members: z.array(teamMemberSchema),
});

const affiliationItemSchema = z.object({
  id: z.string().min(1),
  title: z.string(),
  organization: z.string().min(1),
  location: z.string(),
  period: z.string(),
  url: optionalUrlSchema.default(""),
  featured: z.boolean(),
  visible: z.boolean(),
  status: recordStatusSchema,
}).superRefine((item, context) => {
  if (item.visible && item.status === "published" && !item.title) context.addIssue({ code: "custom", message: "Published affiliations require a title" });
  if (item.featured && (!item.visible || item.status !== "published")) context.addIssue({ code: "custom", message: "Featured affiliations must be visible and published" });
});

export const affiliationsSchema = z.object({
  page: z.object({
    academicTitle: z.string().min(1), professionalTitle: z.string().min(1), editorialTitle: z.string().min(1), recognitionTitle: z.string().min(1),
  }),
  academic: z.array(affiliationItemSchema),
  professional: z.array(affiliationItemSchema),
  editorial: z.array(affiliationItemSchema),
  recognitions: z.array(affiliationItemSchema),
});

export const impactSchema = z.object({
  page: pageSchema,
  sections: z.object({
    coreProjects: z.string().min(1).optional(),
    industryProjects: z.string().min(1).optional(),
    events: z.string().min(1),
    internationalEvents: z.string().min(1).optional(),
    domesticEvents: z.string().min(1).optional(),
  }),
});

export const publicationsPageSchema = z.object({
  page: pageSchema,
  labels: z.object({
    searchPlaceholder: z.string().min(1),
    allTypes: z.string().min(1),
    allYears: z.string().min(1),
    empty: z.string().min(1),
    sourceCitation: z.string().min(1),
  }),
  sections: z.object({
    typesEyebrow: z.string().min(1),
    typesTitle: z.string().min(1),
  }),
});

export const cvSchema = z.object({
  page: pageSchema,
  document: z.object({
    label: z.string().min(1),
    path: assetPathSchema,
    updatedAt: z.union([z.literal(""), z.iso.date()]),
    visible: z.boolean(),
    status: recordStatusSchema,
  }),
  sections: z.object({
    overviewEyebrow: z.string().min(1),
    overviewTitle: z.string().min(1),
    recordsEyebrow: z.string().min(1),
    recordsTitle: z.string().min(1),
    documentTitle: z.string().min(1),
    profilesTitle: z.string().min(1),
  }),
  labels: z.object({ download: z.string().min(1), open: z.string().min(1) }),
});

export const publicationSchema = z.object({
  id: z.string().min(1),
  type: z.enum(["journal", "book", "chapter", "conference"]),
  year: z.coerce.number().int().min(1900).max(2100),
  title: z.string().min(1),
  citation: z.string().min(1),
  url: optionalUrlSchema,
  featured: boolSchema,
  visible: boolSchema,
  status: recordStatusSchema,
  editoriallyVerified: boolSchema,
}).superRefine((item, context) => {
  if (item.featured && (!item.visible || item.status !== "published")) context.addIssue({ code: "custom", message: "Featured publications must be visible and published" });
  if (item.visible && item.status !== "published") context.addIssue({ code: "custom", message: "Visible publications must be published" });
});

export const newsSchema = z.object({
  id: z.string().min(1),
  date: z.iso.date(),
  displayDate: z.string().min(1),
  title: z.string().min(1),
  url: z.url(),
  featured: boolSchema,
  visible: boolSchema,
  status: recordStatusSchema,
}).superRefine((item, context) => {
  if (item.featured && (!item.visible || item.status !== "published")) context.addIssue({ code: "custom", message: "Featured news must be visible and published" });
  if (item.visible && item.status !== "published") context.addIssue({ code: "custom", message: "Visible news must be published" });
});

export const eventSchema = z.object({
  id: z.string().min(1),
  date: z.union([z.literal(""), z.iso.date()]),
  displayDate: z.string(),
  title: z.string().min(1),
  scope: z.enum(["domestic", "international"]),
  url: optionalUrlSchema,
  featured: boolSchema,
  visible: boolSchema,
  status: recordStatusSchema,
}).superRefine((item, context) => {
  if (item.featured && (!item.visible || item.status !== "published")) context.addIssue({ code: "custom", message: "Featured events must be visible and published" });
  if (item.visible && item.status !== "published") context.addIssue({ code: "custom", message: "Visible events must be published" });
});

export const contentSchemas = {
  site: siteSchema,
  home: homeSchema,
  profile: profileSchema,
  research: researchSchema,
  team: teamSchema,
  affiliations: affiliationsSchema,
  coreProjects: coreProjectsSchema,
  industryProjects: industryProjectsSchema,
  impact: impactSchema,
  publications: publicationsPageSchema,
  cv: cvSchema,
};
