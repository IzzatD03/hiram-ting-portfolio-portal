"use client";

import { Search } from "@/components/icons";
import { useMemo, useState } from "react";
import type { Publication, PublicationsPageContent } from "@/src/content/types";

const PAGE_SIZE = 12;
const publicationTypes = ["journal", "book", "chapter", "conference"] as const;

export function PublicationCatalog({ publications, labels }: { publications: Publication[]; labels: PublicationsPageContent["labels"] }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState(1);
  const years = useMemo(() => [...new Set(publications.map((item) => item.year))].sort((a, b) => b - a), [publications]);
  const filtered = useMemo(() => publications.filter((item) => {
    const matchesQuery = `${item.title} ${item.citation}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (!type || item.type === type) && (!year || String(item.year) === year);
  }), [publications, query, type, year]);
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return <>
    <section className="filter-bar"><div className="container filter-grid">
      <label className="search-wrap"><span className="sr-only">{labels.searchPlaceholder}</span><Search size={18} /><input className="input" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} type="search" placeholder={labels.searchPlaceholder} /></label>
      <label><span className="sr-only">{labels.allTypes}</span><select className="select" value={type} onChange={(event) => { setType(event.target.value); setPage(1); }}><option value="">{labels.allTypes}</option>{publicationTypes.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
      <label><span className="sr-only">{labels.allYears}</span><select className="select" value={year} onChange={(event) => { setYear(event.target.value); setPage(1); }}><option value="">{labels.allYears}</option>{years.map((item) => <option key={item}>{item}</option>)}</select></label>
    </div></section>
    <section className="section-sm"><div className="container">
      <div className="results-summary"><span><strong>{filtered.length}</strong></span>{(query || type || year) && <button className="text-link" onClick={() => { setQuery(""); setType(""); setYear(""); setPage(1); }}>Reset</button>}</div>
      {visible.length > 0 ? <div className="publication-list publication-catalog" aria-live="polite">{visible.map((item) => <article className="publication-item" key={item.id}><div className="publication-year">{item.year}</div><div><div className="publication-title">{item.editoriallyVerified ? item.title : item.citation}</div>{item.editoriallyVerified && <div className="publication-citation">{item.citation}</div>}</div><div className="publication-type"><span className="badge">{item.type}</span>{item.url && <a className="news-link" href={item.url} target="_blank" rel="noreferrer">Source</a>}</div></article>)}</div> : <div className="catalog-empty"><h3>{labels.empty}</h3></div>}
      {pages > 1 && <nav className="pagination" aria-label="Publication pages">{Array.from({ length: pages }, (_, index) => index + 1).map((item) => <button className={`page-button ${page === item ? "active" : ""}`} key={item} onClick={() => { setPage(item); window.scrollTo({ top: 360, behavior: "smooth" }); }} aria-current={page === item ? "page" : undefined}>{item}</button>)}</nav>}
    </div></section>
  </>;
}
