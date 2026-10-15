"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { images, navLinks, siteConfig } from "@/lib/site";

const sectionIds = ["top", "hizmetler", "hakkimizda", "projeler", "teklif"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!open) return;

    const focusableSelector =
      'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = drawerRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
      if (!focusables || focusables.length === 0) return;

      const list = Array.from(focusables);
      const first = list[0];
      const last = list[list.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    drawerRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <a href="#top" className="flex items-center gap-3" onClick={closeDrawer}>
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
                  className={`whitespace-nowrap rounded px-3 py-2 font-display text-title-md transition-colors ${
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
              <span className="whitespace-nowrap font-body text-label-technical uppercase tracking-wider text-on-surface-variant">
                7/24 TEKNİK DESTEK
              </span>
              <a
                href={siteConfig.phoneHref}
                className="whitespace-nowrap font-display text-title-md text-primary transition-colors hover:text-secondary"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <a
              href="#teklif"
              className="hidden whitespace-nowrap items-center justify-center rounded bg-primary-container px-4 py-2.5 font-display text-title-md text-on-primary shadow-sm transition-all hover:bg-slate-night sm:inline-flex"
            >
              Teklif Al
            </a>
            <a
              href="https://wa.me/905343738890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp'tan iletişime geç"
              className="hidden items-center justify-center rounded border border-emerald-400/60 bg-emerald-500/90 p-2.5 text-white shadow-[0_0_8px_rgba(16,185,129,0.45)] transition-all hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_0_10px_rgba(16,185,129,0.55)] sm:inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram sayfamızı ziyaret edin"
              className="hidden items-center justify-center rounded border border-pink-500/60 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] p-2.5 text-white shadow-[0_0_8px_rgba(220,39,67,0.45)] transition-all hover:-translate-y-0.5 hover:from-[#f5a15a] hover:to-[#d8338f] hover:shadow-[0_0_10px_rgba(220,39,67,0.55)] sm:inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={open}
              aria-haspopup="dialog"
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-border-hairline text-primary transition-colors hover:border-primary xl:hidden"
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden="true"
        onClick={closeDrawer}
        className={`fixed inset-0 top-20 z-40 bg-slate-night/60 backdrop-blur-[2px] transition-opacity duration-300 motion-reduce:transition-none xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        ref={drawerRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobil navigasyon"
        inert={!open}
        className={`fixed bottom-0 right-0 top-20 z-50 flex w-[85vw] max-w-sm flex-col border-l border-border-hairline bg-surface-container-lowest shadow-[-8px_0_24px_-12px_rgba(15,26,44,0.35)] transition-transform duration-300 ease-out motion-reduce:transition-none xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border-hairline px-6 py-4">
          <span className="font-body text-label-technical uppercase tracking-widest text-on-surface-variant">
            Navigasyon
          </span>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Menüyü kapat"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-border-hairline text-primary transition-colors hover:border-primary"
          >
            <Icon name="close" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeDrawer}
              aria-current={active === link.id ? "page" : undefined}
              className={`whitespace-nowrap rounded px-3 py-3 font-display text-title-md transition-colors ${
                active === link.id
                  ? "bg-primary-container text-on-primary"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-border-hairline px-6 py-5">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-3 rounded border border-border-hairline px-3 py-3 font-display text-title-md text-primary transition-colors hover:border-primary"
          >
            <Icon name="call" className="text-secondary" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href="#teklif"
            onClick={closeDrawer}
            className="mt-3 flex items-center justify-center gap-space-xs whitespace-nowrap rounded bg-secondary px-5 py-3 font-display text-title-md text-surface-bright transition-colors hover:bg-secondary-fixed-dim hover:text-primary"
          >
            <span>Teklif Al</span>
            <Icon name="send" className="text-sm" />
          </a>
          <p className="mt-4 font-body text-label-technical uppercase tracking-wider text-on-surface-variant">
            {siteConfig.workingHours}
          </p>
        </div>
      </div>
    </>
  );
}
