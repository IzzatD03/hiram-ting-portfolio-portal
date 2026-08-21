import type { Metadata } from "next";
import { ProfileLinks } from "@/components/profile-links";
import { PageHero } from "@/components/ui";
import { approvedText, getCv, getSiteContent } from "@/src/content/loaders";
import { CvPdfViewer } from "@/components/cv-pdf-viewer";

export function generateMetadata(): Metadata {
  const cv = getCv();
  return { title: cv.page.title };
}

export default function CvPage() {
  const site = getSiteContent();
  const cv = getCv();

  const heroDescription =
    approvedText(cv.page.description) || "Academic and professional curriculum vitae.";
  const pdfUrl = cv.document.path;

  return (
    <div className="cv-page">
      {/* 1. Hero */}
      <PageHero
        eyebrow={cv.page.eyebrow}
        current={cv.page.title}
        title={cv.page.title}
        description={heroDescription}
      />

      {/* 2. Professional & Academic Links */}
      <section className="profile-links-strip cv-links-section" aria-labelledby="cv-links-heading">
        <div className="container profile-links-showcase">
          <h2 id="cv-links-heading" className="profile-links-title">
            Professional &amp; Academic Links
          </h2>
          <ProfileLinks links={site.socialLinks} animated />
        </div>
      </section>

      {/* 3. Curriculum Vitae PDF Viewer */}
      <section className="cv-document-section" aria-labelledby="cv-document-heading">
        <div className="container cv-document-container">
          <div className="cv-document-header">
            <h2 id="cv-document-heading">{cv.sections.documentTitle || "Curriculum Vitae"}</h2>
          </div>

          {cv.document.visible && cv.document.status === "published" ? (
            <CvPdfViewer
              pdfUrl={pdfUrl}
              downloadLabel={cv.labels.download || "Download PDF"}
              openLabel={cv.labels.open || "Open PDF"}
              title="Curriculum Vitae of Prof. Hiram Ting"
            />
          ) : (
            <div className="cv-pdf-fallback">
              <p>The Curriculum Vitae is currently being updated.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

