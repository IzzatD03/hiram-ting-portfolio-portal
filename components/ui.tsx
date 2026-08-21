import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export function PageHero({ eyebrow, title, description, current }: { eyebrow: string; title: string; description: string; current: string }) {
  return <section className="page-hero"><div className="orb orb-one" /><div className="orb orb-two" /><div className="container page-hero-inner"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>{current}</span></div><span className="eyebrow eyebrow-light">{eyebrow}</span><h1>{title}</h1>{description && <p className="lead">{description}</p>}</div></section>;
}

export function SectionHeading({ eyebrow, title, description, href, linkLabel }: { eyebrow: string; title: string; description?: string; href?: string; linkLabel?: string }) {
  return <div className="section-heading"><div className="section-copy"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p className="lead">{description}</p>}</div>{href && linkLabel && <Link className="text-link" href={href}>{linkLabel}<ArrowRight size={17} /></Link>}</div>;
}
