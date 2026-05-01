"use client";

import Image from "next/image";
import Link from "next/link";
import { Boxes, HandHeart, Leaf, Lightbulb } from "lucide-react";
import { useTranslations } from "next-intl";

const bodyFontStyle = {
  fontFamily: "var(--font-app-body), Arial, Helvetica, sans-serif",
};

const headingFontStyle = {
  fontFamily: "var(--font-app-heading), Georgia, serif",
};

const companyIcons = [Boxes, Leaf, Lightbulb, HandHeart];
const companyAccentClasses = [
  "bg-[#FFF4E9] text-[#E29A24]",
  "bg-[#EDF4FF] text-[#357AF6]",
  "bg-[#F3EEFF] text-[#7D59D3]",
  "bg-[#EEF8EF] text-[#4A9C5A]",
];

const desktopOffsets = [
  "-translate-y-10",
  "translate-y-0",
  "translate-y-0",
  "-translate-y-10",
];

const companyLinks = [
  "https://red-bridge-three.vercel.app/",
  "https://siddeley-talent-link.vercel.app/",
  "https://www.insightidea.com.au/en/success",
  "https://goodmood-self.vercel.app/",
];

export default function EcosystemSection() {
  const t = useTranslations("home.ecosystem");

  const companies = [1, 2, 3, 4].map((index) => ({
    title: t(`company${index}Title`),
    tagline: t(`company${index}Tagline`),
    body: t(`company${index}Body`),
    cta: t(`company${index}Cta`),
    Icon: companyIcons[index - 1]!,
    accentClass: companyAccentClasses[index - 1]!,
    desktopOffset: desktopOffsets[index - 1]!,
    href: companyLinks[index - 1]!,
  }));

  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-[#F7FAFF] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 text-center md:px-10 lg:px-16">
        <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center">
          <div
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#DCE7FA] bg-white px-5 py-2 text-sm uppercase tracking-[0.22em] text-[#6B7A99]"
            style={bodyFontStyle}
          >
            <span className="inline-block h-px w-7 shrink-0 bg-[#7AA9E8]" />
            {t("badge")}
          </div>
          <h2
            className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#16346A] md:text-[50px]"
            style={headingFontStyle}
          >
            {t("titleBefore")}
            <span className="text-[#4C78E3]">{t("titleAccent")}</span>
            {t("titleAfter")}
          </h2>
          <p
            className="mx-auto mt-5 max-w-2xl text-center text-[17px] leading-[1.9] text-[#5F6D88] md:text-[18px]"
            style={bodyFontStyle}
          >
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-white/80 bg-white shadow-[0_28px_80px_rgba(88,126,186,0.16)]">
        <div className="relative aspect-[16/10] min-h-[760px] md:min-h-[920px] lg:min-h-[760px]">
          <Image
            src="/ecosystem-lighthouse.png"
            alt={t("backgroundAlt")}
            fill
            priority
            unoptimized
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.015)_36%,rgba(255,255,255,0.08)_100%)]" />

          <div className="group absolute left-[52.5%] top-[12%] z-30 w-[min(84%,520px)] -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="rounded-[28px] border border-white/72 bg-white/36 px-6 py-5 shadow-[0_16px_48px_rgba(92,121,168,0.14)] backdrop-blur-[18px] md:px-8 md:py-6">
              <div
                className="mb-2 inline-flex rounded-full bg-white/55 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6E85B5] backdrop-blur-[10px]"
                style={bodyFontStyle}
              >
                {t("mainBadge")}
              </div>
              <h3
                className="text-[28px] font-extrabold tracking-[-0.03em] text-[#15366B] md:text-[34px]"
                style={headingFontStyle}
              >
                {t("mainTitle")}
              </h3>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-[min(92vw,420px)] -translate-x-1/2 rounded-[24px] border border-white/78 bg-white/54 px-6 py-4 opacity-0 shadow-[0_20px_48px_rgba(94,128,184,0.14)] backdrop-blur-[18px] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-1 group-hover:opacity-100">
              <p
                className="text-[15px] leading-[1.8] text-[#66748F] md:text-[16px]"
                style={bodyFontStyle}
              >
                {t("mainSubtitle")}
              </p>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 justify-items-center gap-x-5 gap-y-6 px-4 pb-8 pt-[56%] md:px-8 md:pt-[54%] lg:hidden">
            {companies.map(({ title, tagline, body, cta, Icon, accentClass, href }) => (
              <CompanyCard
                key={title}
                title={title}
                tagline={tagline}
                body={body}
                cta={cta}
                Icon={Icon}
                accentClass={accentClass}
                href={href}
              />
            ))}
          </div>

          <div className="absolute inset-x-0 top-[25%] z-10 hidden lg:flex lg:justify-center">
            <div className="flex w-full max-w-[1480px] items-start justify-between px-20">
              {companies.map(
                ({
                  title,
                  tagline,
                  body,
                  cta,
                  Icon,
                  accentClass,
                  desktopOffset,
                  href,
                }) => (
                  <div key={title} className={desktopOffset}>
                    <CompanyCard
                      title={title}
                      tagline={tagline}
                      body={body}
                      cta={cta}
                      Icon={Icon}
                      accentClass={accentClass}
                      href={href}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyCard({
  title,
  tagline,
  body,
  cta,
  Icon,
  accentClass,
  href,
}: {
  title: string;
  tagline: string;
  body: string;
  cta: string;
  Icon: typeof Boxes;
  accentClass: string;
  href: string;
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-[72px] min-w-[220px] items-center justify-center gap-3 rounded-full border border-white/74 bg-white/34 px-5 py-4 text-center shadow-[0_16px_40px_rgba(112,148,207,0.12)] backdrop-blur-[18px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/48"
      >
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${accentClass} bg-opacity-90`}
        >
          <Icon size={24} strokeWidth={2.1} />
        </div>
        <h3
          className="text-left text-[18px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#20406F]"
          style={headingFontStyle}
        >
          {title}
        </h3>
      </Link>

      <div className="pointer-events-none absolute left-1/2 top-[calc(100%-6px)] z-20 w-[312px] -translate-x-1/2 rounded-[22px] border border-white/78 bg-white/56 p-4 opacity-0 shadow-[0_20px_48px_rgba(94,128,184,0.14)] backdrop-blur-[18px] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-3 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-3 group-focus-within:opacity-100">
        <h4
          className="text-[18px] font-extrabold tracking-[-0.02em] text-[#20406F]"
          style={headingFontStyle}
        >
          {title}
        </h4>
        <p
          className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4C78E3]"
          style={bodyFontStyle}
        >
          {tagline}
        </p>
        <p
          className="mt-3 text-[13px] leading-[1.75] text-[#67758D]"
          style={bodyFontStyle}
        >
          {body}
        </p>
        <Link
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex text-[12px] font-semibold uppercase tracking-[0.18em] text-[#4C78E3]"
          style={bodyFontStyle}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
