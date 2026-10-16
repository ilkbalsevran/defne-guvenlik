import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "@/components/Icon";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="w-full bg-surface py-space-2xl lg:py-space-3xl">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <Link
          href="/"
          className="mb-space-lg inline-flex items-center gap-space-xs font-display text-title-md text-secondary transition-colors hover:text-primary"
        >
          <Icon name="arrow_back" className="text-sm" />
          <span>Ana Sayfaya Dön</span>
        </Link>
        <h1 className="mb-space-xs font-display text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg">
          {title}
        </h1>
        <p className="mb-space-xl font-body text-body-sm text-on-surface-variant">
          Son güncelleme: {updated}
        </p>
        <div className="legal-content font-body text-body-md text-on-surface-variant">
          {children}
        </div>
      </div>
    </section>
  );
}
