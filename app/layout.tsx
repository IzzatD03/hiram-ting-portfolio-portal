import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville, Noto_Serif_SC, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteMotion } from "@/components/site-motion";
import { getSiteContent } from "@/src/content/loaders";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif", display: "swap" });
const display = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const cjk = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cjk",
  display: "swap",
});

export function generateMetadata(): Metadata {
  const site = getSiteContent();
  return {
    metadataBase: new URL(site.seo.canonicalUrl),
    title: { default: site.seo.title, template: `%s | ${site.identity.shortName}` },
    description: site.seo.description,
    keywords: site.seo.keywords,
    authors: [{ name: site.identity.displayName }],
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.identity.displayName,
      title: site.seo.title,
      description: site.seo.description,
      url: site.seo.canonicalUrl,
      images: [
        {
          url: "https://hiramting.com/uploads/og/capture-home.png",
          secureUrl: "https://hiramting.com/uploads/og/capture-home.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: "Prof. Dr. Hiram Ting | Portfolio",
        },
      ],
    },
    twitter: { 
      card: "summary_large_image", 
      title: site.seo.title, 
      description: site.seo.description,
      images: ["https://hiramting.com/uploads/og/capture-home.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const site = getSiteContent();
  return (
  <html lang="en" className={`${sans.variable} ${serif.variable} ${display.variable} ${cjk.variable}`} suppressHydrationWarning>
    <body suppressHydrationWarning>
      <SiteMotion />
      <Header identity={site.identity} navigation={site.navigation} email={site.contact.email} />
      <main id="main-content">{children}</main>
      <Footer site={site} />
    </body>
  </html>
  )
}
