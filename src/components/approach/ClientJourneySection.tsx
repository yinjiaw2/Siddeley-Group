"use client";

import { MessageSquare, Compass, Rocket, ShieldCheck } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-body), Arial, Helvetica, sans-serif",
};
const headingFontStyle = {
  fontFamily: "var(--font-app-heading), Georgia, serif",
};

const icons = [MessageSquare, Compass, Rocket, ShieldCheck];

export default function ClientJourneySection() {
  const t = useTranslations("approach.clientJourney");
  const locale = useLocale();
  const accentFont =
    locale === "en"
      ? "var(--font-playfair-display), Georgia, serif"
      : "var(--font-noto-serif-sc), Georgia, serif";

  const steps = [1, 2, 3, 4].map((n, i) => ({
    Icon: icons[i]!,
    number: t(`step${n}Number`),
    title: t(`step${n}Title`),
    desc: t(`step${n}Desc`),
  }));

  return (
    <section className="w-full bg-[#111111] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#5A5A5A]">
            <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
            {t("badge")}
          </div>
          <h2
            className="max-w-2xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[48px] lg:text-[54px]"
            style={headingFontStyle}
          >
            {t("titleBefore")}
            <span style={{ color: "#F5C400", fontFamily: accentFont }}>
              {t("titleAccent")}
            </span>
            {t("titleAfter")}
          </h2>
          <p
            className="mt-6 max-w-2xl text-[17px] leading-[1.9] text-[#6A6A6A] md:text-[18px]"
            style={fontStyle}
          >
            {t("subtitle")}
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 xl:grid-cols-4">
          {/* Dashed gold connector through number badge centres on xl */}
          <div
            className="absolute left-[22px] right-[calc(25%-22px)] top-[22px] hidden h-px xl:block"
            style={{
              background:
                "repeating-linear-gradient(90deg,#F5C400 0,#F5C400 6px,transparent 6px,transparent 14px)",
            }}
          />

          {steps.map(({ Icon, number, title, desc }) => (
            <div key={number} className="relative flex flex-col">
              <div className="relative z-10 mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5C400] text-[13px] font-bold text-[#1A1A1A]">
                {number}
              </div>

              <div className="flex flex-1 flex-col gap-5 rounded-[20px] border border-white/8 bg-white/[0.03] px-6 py-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(245,196,0,0.10)]">
                  <Icon aria-hidden="true" size={20} className="text-[#F5C400]" />
                </div>
                <div>
                  <h3
                    className="mb-3 text-[19px] font-bold text-white"
                    style={headingFontStyle}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[15px] leading-[1.8] text-[#7A7A7A]"
                    style={fontStyle}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
