import Image from "next/image";
import { ExternalLink } from "@/components/icons";
import type { SiteContent } from "@/src/content/types";

type ProfileLink = SiteContent["socialLinks"][number];

export function ProfileLinks({
  links,
  className = "profile-links",
  animated = false,
}: {
  links: ReadonlyArray<ProfileLink>;
  className?: string;
  animated?: boolean;
}) {
  const renderLinks = (duplicate = false) =>
    links.map((item) => {
      const isHorizontal = Boolean(item.horizontal && item.logo);

      return (
        <a
          className={`profile-link ${isHorizontal ? "profile-link-horizontal" : ""}`.trim()}
          key={`${item.id}${duplicate ? "-duplicate" : ""}`}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${item.label} (opens in a new tab)`}
          tabIndex={duplicate ? -1 : undefined}
        >
          {item.logo && (
            <Image
              src={item.logo}
              alt={isHorizontal ? item.label : ""}
              width={isHorizontal ? 100 : 18}
              height={18}
              className={`profile-link-logo ${isHorizontal ? "profile-link-logo-horizontal" : ""}`.trim()}
              style={{ objectFit: "contain" }}
              aria-hidden={!isHorizontal}
            />
          )}
          {!isHorizontal && <span>{item.label}</span>}
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      );
    });

  if (animated) {
    return (
      <div className={`${className} profile-links-marquee`} aria-label="Professional and academic profiles">
        <div className="profile-links-track">
          <div className="profile-links-group">{renderLinks()}</div>
          <div className="profile-links-group profile-links-duplicate" aria-hidden="true">
            {renderLinks(true)}
          </div>
        </div>
      </div>
    );
  }

  return <div className={className} aria-label="Professional and academic profiles">{renderLinks()}</div>;
}
