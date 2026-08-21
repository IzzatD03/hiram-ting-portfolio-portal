import type { Metadata } from "next";
import { NewsCatalog } from "@/components/news-catalog";
import { PageHero } from "@/components/ui";
import { getNews } from "@/src/content/loaders";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  const news = getNews();

  return <>
    <PageHero eyebrow="News" current="News" title="News" description="" />
    <NewsCatalog news={news} />
  </>;
}
