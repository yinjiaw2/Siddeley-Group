"use client";

import Image from "next/image";
import { useLocale, useMessages, useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-body), Arial, Helvetica, sans-serif",
};

const headingFontStyle = {
  fontFamily: "var(--font-app-heading), Georgia, serif",
};

export default function GroupIntroSection() {
  const t = useTranslations("home");
  const locale = useLocale();
  const messages = useMessages();
  const accentFont =
    locale === "en"
      ? "var(--font-playfair-display), Georgia, serif"
      : "var(--font-noto-serif-sc), Georgia, serif";
  const rawParagraphs = messages.home?.groupIntro?.paragraphs;
  const paragraphs = Array.isArray(rawParagraphs)
    ? rawParagraphs
    : [t("groupIntro.paragraphs.0")];

  return (
    <section id="group-intro" className="w-full bg-[#F8F5EF] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-16 xl:gap-20">
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#9A9A9A]">
            <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
            {t("groupIntro.badge")}
          </div>
          <h2
            className="max-w-xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#1A1A1A] md:text-[48px] lg:text-[54px]"
            style={headingFontStyle}
          >
            {t("groupIntro.titleBefore")}
            <span style={{ color: "#F5C400", fontFamily: accentFont }}>
              {t("groupIntro.titleAccent")}
            </span>
            {t("groupIntro.titleAfter")}
          </h2>
          <div
            className="mt-8 space-y-6 text-[17px] leading-[1.9] text-[#5F5854] md:text-[18px]"
            style={fontStyle}
          >
            {paragraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph}`}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] bg-[#EDE7DA] shadow-[0_24px_70px_rgba(26,26,26,0.14)]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(26,26,26,0.18)_100%)]" />
          <Image
            src="/about-us.jpeg"
            alt={t("groupIntro.imageAlt")}
            width={1200}
            height={900}
            className="h-full min-h-[340px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
