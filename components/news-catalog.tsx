"use client";

import { ArrowUpRight } from "@/components/icons";
import { useState } from "react";
import type { NewsItem } from "@/src/content/types";

const PAGE_SIZE = 12;

export function NewsCatalog({ news }: { news: NewsItem[] }) {
  const [page, setPage] = useState(1);
  const pages = Math.max(1, Math.ceil(news.length / PAGE_SIZE));
  const visible = news.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return <section className="section-sm"><div className="container">
    <div className="results-summary"><span><strong>{news.length}</strong> news items</span></div>
    <div className="publication-list" aria-live="polite">
      {visible.map((item) => <article className="publication-item" key={item.id}>
        <div className="publication-year">{item.date.slice(0, 4)}</div>
        <div><div className="publication-title">{item.title}</div><div className="publication-meta">{item.displayDate}</div></div>
        <div className="publication-type"><a className="news-link" href={item.url} target="_blank" rel="noreferrer">Source <ArrowUpRight size={14} /></a></div>
      </article>)}
    </div>
    {pages > 1 && <nav className="pagination" aria-label="News pages">
      {Array.from({ length: pages }, (_, index) => index + 1).map((item) => <button className={`page-button ${page === item ? "active" : ""}`} key={item} onClick={() => { setPage(item); window.scrollTo({ top: 360, behavior: "smooth" }); }} aria-current={page === item ? "page" : undefined} aria-label={`Go to news page ${item}`}>{item}</button>)}
    </nav>}
  </div></section>;
}
