import type { MetadataRoute } from "next";
import { getSiteContent, getTeam } from "@/src/content/loaders";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteContent();
  const team = getTeam();

  const navRoutes: MetadataRoute.Sitemap = site.navigation.map((item) => ({
    url: `${site.seo.canonicalUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: site.lastUpdated,
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const memberRoutes: MetadataRoute.Sitemap = team.enabled
    ? team.members.map((member) => ({
        url: `${site.seo.canonicalUrl}/team/${member.id}`,
        lastModified: site.lastUpdated,
        changeFrequency: "monthly",
        priority: 0.7,
      }))
    : [];

  return [...navRoutes, ...memberRoutes];
}
