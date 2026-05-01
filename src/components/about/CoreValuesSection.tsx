"use client";

import { useLocale, useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-body), Arial, Helvetica, sans-serif",
};
const headingFontStyle = {
  fontFamily: "var(--font-app-heading), Georgia, serif",
};

export default function CoreValuesSection() {
  const t = useTranslations("about.coreValues");
  const locale = useLocale();
  const accentFont =
    locale === "en"
      ? "var(--font-playfair-display), Georgia, serif"
      : "var(--font-noto-serif-sc), Georgia, serif";

  const values = [1, 2, 3, 4, 5, 6].map((n) => ({
    number: t(`value${n}Number`),
    title: t(`value${n}Title`),
    desc: t(`value${n}Desc`),
  }));

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16 xl:gap-24">

          {/* Left: section header */}
          <div className="flex flex-col lg:pt-1">
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#9A9A9A]">
              <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
              {t("badge")}
            </div>
            <h2
              className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#1A1A1A] md:text-[48px] lg:text-[44px] xl:text-[52px]"
              style={headingFontStyle}
            >
              {t("titleBefore")}
              <span style={{ color: "#F5C400", fontFamily: accentFont }}>
                {t("titleAccent")}
              </span>
              {t("titleAfter")}
            </h2>
            <p
              className="mt-6 text-[17px] leading-[1.9] text-[#5F5854] md:text-[18px]"
              style={fontStyle}
            >
              {t("subtitle")}
            </p>
          </div>

          {/* Right: 2-column value cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map(({ number, title, desc }) => (
              <article
                key={number}
                className="group flex flex-col rounded-[20px] border border-[#E8E3D8] bg-[#FAFAF8] p-7 transition-all duration-300 hover:border-[#F5C400] hover:bg-[#FFFBEE] hover:shadow-[0_8px_30px_rgba(245,196,0,0.12)]"
              >
                <span
                  className="mb-4 text-[12px] font-bold uppercase tracking-[0.28em] text-[#C79D00]"
                  style={fontStyle}
                >
                  {number}
                </span>
                <h3
                  className="mb-3 text-[19px] font-extrabold text-[#1A1A1A]"
                  style={headingFontStyle}
                >
                  {title}
                </h3>
                <p
                  className="text-[15px] leading-[1.85] text-[#6B6B6B]"
                  style={fontStyle}
                >
                  {desc}
                </p>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
