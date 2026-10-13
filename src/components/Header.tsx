"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { images, navLinks, siteConfig } from "@/lib/site";

const sectionIds = ["top", "hizmetler", "hakkimizda", "projeler", "teklif"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={images.logo}
            alt={`${siteConfig.name} logo`}
            width={44}
            height={44}
            className="h-11 w-11 rounded bg-white object-contain p-0.5 shadow-sm"
            priority
          />
          <span className="flex flex-col">
            <span className="font-display text-headline-sm font-bold uppercase leading-none tracking-tight text-primary">
              DEFNE GÜVENLİK
            </span>
            <span className="mt-0.5 font-body text-label-technical font-semibold uppercase tracking-widest text-secondary">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-space-sm xl:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded px-3 py-2 font-display text-title-md transition-colors ${
                  isActive
                    ? "bg-primary-container font-semibold text-on-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-lg">
          <div className="hidden flex-col text-right md:flex">
            <span className="font-body text-label-technical uppercase tracking-wider text-on-surface-variant">
              7/24 TEKNİK DESTEK
            </span>
            <a
              href={siteConfig.phoneHref}
              className="font-display text-title-md text-primary transition-colors hover:text-secondary"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <a
            href="#teklif"
            className="hidden items-center justify-center rounded bg-primary-container px-5 py-2.5 font-display text-title-md text-on-primary shadow-sm transition-all hover:bg-slate-night sm:inline-flex"
          >
            Teklif Al
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-border-hairline text-primary transition-colors hover:border-primary xl:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border-hairline bg-surface-container-lowest xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 lg:px-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded px-3 py-3 font-display text-title-md transition-colors ${
                  active === link.id
                    ? "bg-primary-container text-on-primary"
                    : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="mt-2 flex items-center gap-2 rounded border border-border-hairline px-3 py-3 font-display text-title-md text-primary"
            >
              <Icon name="call" className="text-secondary" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href="#teklif"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center rounded bg-primary-container px-5 py-3 font-display text-title-md text-on-primary"
            >
              Teklif Al
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
