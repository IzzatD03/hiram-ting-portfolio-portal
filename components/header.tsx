"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "@/components/icons";
import { useEffect, useState } from "react";

type HeaderProps = {
  identity: { shortName: string; portfolioLabel: string };
  navigation: ReadonlyArray<{ label: string; href: string }>;
  email: string;
};

export function Header({ identity, navigation, email }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="site-header"><div className="container nav-wrap">
      <Link className="brand" href="/" aria-label={`${identity.shortName} home`}><span className="brand-mark" aria-hidden="true">HT</span><span className="brand-copy"><strong>{identity.shortName}</strong><span>{identity.portfolioLabel}</span></span></Link>
      <nav className="nav-links" aria-label="Primary navigation">
        {navigation.map(({ label, href }) => 
          <Link key={href} className={`nav-link ${isActive(href) ? "active" : ""}`} href={href} aria-current={isActive(href) ? "page" : undefined}>
            {label}
          </Link>)
        }
      </nav>
      <div className="nav-actions"><a className="button button-primary button-sm" href={`mailto:${email}`}>Contact <ArrowUpRight size={15} /></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button></div>
    </div></header>
    <nav id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile navigation"><div className="container mobile-menu-inner">{navigation.map(({ label, href }, index) => <Link key={href} className={isActive(href) ? "active" : ""} href={href} onClick={() => setOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{label}</Link>)}<a className="button button-primary" href={`mailto:${email}`}>Contact <ArrowUpRight size={18} /></a></div></nav>
  </>;
}
