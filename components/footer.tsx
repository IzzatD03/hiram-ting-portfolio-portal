import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone } from "@/components/icons";
import type { SiteContent } from "@/src/content/types";
import { approvedText } from "@/src/content/loaders";

export function Footer({ site }: { site: SiteContent }) {
  const motto = approvedText(site.footer.motto);

  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div className="footer-intro"><span className="eyebrow eyebrow-light">{site.identity.portfolioLabel}</span><h2>{site.identity.displayName}</h2></div><a className="circle-link" href={`mailto:${site.contact.email}`} aria-label={`Email ${site.identity.displayName}`}><ArrowUpRight /></a></div>
    <div className="footer-grid">
      <div className="footer-brand"><div className="brand brand-inverse"><span className="brand-mark">HT</span><span className="brand-copy"><strong>{site.identity.shortName}</strong><span>{site.identity.portfolioLabel}</span></span></div>{motto && <p>{motto}</p>}</div>
      <div><h3>Explore</h3><ul className="footer-list">{site.navigation.filter((item) => item.href !== "/").map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></div>
      <div><h3>Professional &amp; academic</h3><ul className="footer-profile-links">{site.socialLinks.map((item) => <li key={item.id}><a href={item.url} target="_blank" rel="noreferrer">{item.label}<ArrowUpRight size={12} /></a></li>)}</ul></div>
      <div><h3>Contact</h3><ul className="footer-list contact-list"><li><Mail size={15} /><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></li><li><Phone size={15} /><a href={`tel:${site.contact.phoneInternational}`}>{site.contact.phoneDisplay}</a></li><li><Instagram size={15} /><a href="https://www.instagram.com/hiramting/" target="_blank" rel="noreferrer">Instagram</a></li><li><Facebook size={15} /><a href="https://www.facebook.com/hiramparousia/" target="_blank" rel="noreferrer">Facebook</a></li><li><MapPin size={15} /><span>{site.contact.address}</span></li></ul></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.identity.displayName}</span><span>Updated {site.lastUpdated}</span></div>
  </div></footer>;
}
