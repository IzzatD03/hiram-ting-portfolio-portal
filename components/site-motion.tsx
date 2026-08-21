"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelectors = [
  ".section-heading",
  ".content-section > .eyebrow",
  ".content-section > h2",
  ".content-section > .lead",
  ".profile-aside",
  ".cv-pdf-frame",
  ".cv-viewer-root",
  ".network-art",
  ".network-layout > :last-child",
  ".team-preview > *",
  ".project-column",
  ".footer-top",
  ".footer-grid > *",
  ".results-summary",
  ".catalog-empty",
];

const staggerGroups = [
  ".grid",
  ".authority-grid",
  ".audience-grid",
  ".publication-list",
  ".fact-grid",
  ".timeline",
  ".method-list",
  ".country-list",
  ".team-visual",
  ".stats-grid",
  ".project-list",
];

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const main = document.querySelector<HTMLElement>("#main-content");

    if (!reduceMotion && main) {
      main.animate(
        [
          { opacity: 0, transform: "translateY(8px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 440, easing: "cubic-bezier(.22, 1, .36, 1)" },
      );
    }

  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observed = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.08 },
    );

    const prepare = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLElement>(revealSelectors.join(",")).forEach((element) => {
        if (observed.has(element)) return;
        element.classList.add("reveal");
        observed.add(element);
        observer.observe(element);
      });

      root.querySelectorAll<HTMLElement>(staggerGroups.join(",")).forEach((group) => {
        Array.from(group.children).forEach((child, index) => {
          if (!(child instanceof HTMLElement) || observed.has(child)) return;
          child.classList.add("reveal");
          child.style.setProperty("--reveal-delay", `${Math.min(index, 7) * 70}ms`);
          observed.add(child);
          observer.observe(child);
        });
      });
    };

    prepare();
    document.documentElement.classList.add("motion-ready");

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) prepare(node.parentElement ?? node);
        });
      });
    });

    const main = document.querySelector("#main-content");
    if (main) mutationObserver.observe(main, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
