"use client";

import { Leaf, Heart, Users, Scale } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-body), Arial, Helvetica, sans-serif",
};
const headingFontStyle = {
  fontFamily: "var(--font-app-heading), Georgia, serif",
};

const icons = [Leaf, Heart, Users, Scale];

export default function CorporateResponsibilitySection() {
  const t = useTranslations("about.csr");
  const locale = useLocale();
  const accentFont =
    locale === "en"
      ? "var(--font-playfair-display), Georgia, serif"
      : "var(--font-noto-serif-sc), Georgia, serif";

  const pillars = [1, 2, 3, 4].map((n, i) => ({
    Icon: icons[i]!,
    label: t(`pillar${n}Label`),
    title: t(`pillar${n}Title`),
    desc: t(`pillar${n}Desc`),
  }));

  return (
    <section className="w-full bg-[#F8F5EF] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-14 md:mb-16">
          <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#9A9A9A]">
            <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
            {t("badge")}
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className="max-w-xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#1A1A1A] md:text-[48px] lg:text-[54px]"
              style={headingFontStyle}
            >
              {t("titleBefore")}
              <span style={{ color: "#F5C400", fontFamily: accentFont }}>
                {t("titleAccent")}
              </span>
              {t("titleAfter")}
            </h2>
            <p
              className="max-w-md text-[17px] leading-[1.9] text-[#5F5854] lg:text-right md:text-[18px]"
              style={fontStyle}
            >
              {t("subtitle")}
            </p>
          </div>
        </div>

        {/* Pillar cards — 2-col grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {pillars.map(({ Icon, label, title, desc }) => (
            <article
              key={label}
              className="flex flex-col gap-6 rounded-[24px] border border-[#E8E3D8] bg-white p-8 md:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(245,196,0,0.10)]">
                <Icon aria-hidden="true" size={24} className="text-[#C79D00]" />
              </div>
              <div>
                <span
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.30em] text-[#C79D00]"
                  style={fontStyle}
                >
                  {label}
                </span>
                <h3
                  className="text-[21px] font-extrabold leading-tight tracking-[-0.02em] text-[#1A1A1A] md:text-[23px]"
                  style={headingFontStyle}
                >
                  {title}
                </h3>
              </div>
              <p
                className="text-[15px] leading-[1.9] text-[#6B6B6B]"
                style={fontStyle}
              >
                {desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
