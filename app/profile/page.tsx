import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "@/components/icons";
import { ProfileLinks } from "@/components/profile-links";
import { PageHero } from "@/components/ui";
import { approvedText, getAffiliations, getProfile, getSiteContent } from "@/src/content/loaders";

export function generateMetadata(): Metadata {
  const profile = getProfile();
  return { title: profile.page.title };
}

export default function ProfilePage() {
  const site = getSiteContent();
  const profile = getProfile();
  const affiliations = getAffiliations();
  const profession = approvedText(profile.profession);
  const biography = approvedText(profile.biography);
  const description = approvedText(profile.page.description);
  const editorInChiefRoles = affiliations.editorial.filter((item) => item.title === "Editor-in-Chief");

  return (
    <>
      <PageHero eyebrow={profile.page.eyebrow} current={profile.page.title} title={profile.page.title} description={description} />
      <section className="section">
        <div className="container profile-layout">
          <aside className="profile-aside">
            <div className="profile-photo">
              <Image src={profile.portrait} alt={profile.portraitAlt} width={1067} height={1600} sizes="(max-width: 860px) 100vw, 350px" priority />
            </div>
          </aside>
          <div>
            <section className="content-section" style={{ paddingTop: 0 }}>
              <h2>{profile.displayName}</h2>
              <p className="profile-chinese-name">{profile.chineseName}</p>
              <p className="profile-credentials">{profile.credentials.join(" · ")}</p>
              {profession && <p className="lead">{profession}</p>}
              {biography && (
                <p className="profile-biography">
                  {biography}
                </p>
              )}
            </section>
            <section className="profile-inline-links" aria-labelledby="profile-page-links-heading">
              <h2 id="profile-page-links-heading" className="profile-links-title">Professional &amp; Academic Links</h2>
              <ProfileLinks links={site.socialLinks} className="profile-links profile-links-centered" animated />
            </section>
            {affiliations.academic.length > 0 && (
              <section id="appointments" className="content-section">
                <span className="eyebrow">{affiliations.page.academicTitle}</span>
                <h2>{affiliations.page.academicTitle}</h2>
                <div className="timeline">
                  {affiliations.academic.map((item) => (
                    <article className="timeline-item" key={item.id}>
                      <h3>{item.title}</h3>
                      <p>{item.organization}{item.location && ` · ${item.location}`}{item.period && ` · ${item.period}`}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}
            {affiliations.professional.length > 0 && (
              <section className="content-section">
                <span className="eyebrow">{affiliations.page.professionalTitle}</span>
                <h2>{affiliations.page.professionalTitle}</h2>
                <div className="grid grid-2">
                  {affiliations.professional.map((item) => (
                    <article className="card" key={item.id}>
                      <h3>{item.title}</h3>
                      <p className="muted">{item.organization}</p>
                      {item.url && (
                        <a className="text-link" href={item.url} target="_blank" rel="noreferrer">
                          Visit organisation <ExternalLink size={14} />
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}
            {editorInChiefRoles.length > 0 && (
              <section className="content-section">
                <span className="eyebrow">{affiliations.page.editorialTitle}</span>
                <h2>{affiliations.page.editorialTitle}</h2>
                <div className="publication-list">
                  {editorInChiefRoles.map((item) => (
                    <article className="publication-item" key={item.id}>
                      <div className="publication-year">EIC</div>
                      <div>
                        <div className="publication-title">
                          {item.url ? (
                            <a href={item.url} target="_blank" rel="noreferrer">{item.organization}</a>
                          ) : item.organization}
                        </div>
                        <div className="publication-meta">{item.title}</div>
                      </div>
                      <div className="publication-type"><span className="badge">Editorial</span></div>
                    </article>
                  ))}
                </div>
              </section>
            )}
            {affiliations.recognitions.length > 0 && (
              <section className="content-section">
                <span className="eyebrow">{affiliations.page.recognitionTitle}</span>
                <h2>{affiliations.page.recognitionTitle}</h2>
                <div className="grid grid-2">
                  {affiliations.recognitions.map((item) => (
                    <article className="card" key={item.id}>
                      <h3>{item.title}</h3>
                      <p className="muted">{item.organization}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
