"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  ChevronDown,
  HandHeart,
  Leaf,
  Lightbulb,
  Mouse,
} from "lucide-react";
import { useTranslations } from "next-intl";

const bodyFontStyle = {
  fontFamily: "var(--font-app-body), Arial, Helvetica, sans-serif",
};

const headingFontStyle = {
  fontFamily: "var(--font-app-heading), Georgia, serif",
};

const companyIcons = [Boxes, Leaf, Lightbulb, HandHeart];
const companyAccentClasses = [
  {
    chip: "bg-[#FFF4E8] text-[#D99522]",
    dot: "bg-[#F0B13E]",
    arrow: "bg-[#FFE4B2] text-[#D99522]",
  },
  {
    chip: "bg-[#EAF1FF] text-[#4C84FF]",
    dot: "bg-[#5E8FFF]",
    arrow: "bg-[#DDE9FF] text-[#4C84FF]",
  },
  {
    chip: "bg-[#F0E9FF] text-[#8B63E8]",
    dot: "bg-[#9A73FF]",
    arrow: "bg-[#E7DDFF] text-[#8B63E8]",
  },
  {
    chip: "bg-[#ECFAEE] text-[#67B76E]",
    dot: "bg-[#74C97C]",
    arrow: "bg-[#DDF5E0] text-[#67B76E]",
  },
];

const companyLinks = [
  "https://red-bridge-three.vercel.app/",
  "https://siddeley-talent-link.vercel.app/",
  "https://www.insightidea.com.au/en/success",
  "https://goodmood-self.vercel.app/",
];

const desktopCardPositions = [
  "left-[10%] top-[34%]",
  "left-[27%] top-[44%]",
  "right-[29%] top-[44.5%]",
  "right-[10%] top-[35%]",
];

const desktopAnchorPositions = [
  "left-[16%] top-[67%]",
  "left-[34.5%] top-[72%]",
  "right-[34.5%] top-[71.5%]",
  "right-[14.5%] top-[65.5%]",
];

export default function EcosystemSection() {
  const t = useTranslations("home.ecosystem");

  const companies = [1, 2, 3, 4].map((index) => ({
    title: t(`company${index}Title`),
    body: t(`company${index}Body`),
    cta: t(`company${index}Cta`),
    summary: t(`company${index}Summary`),
    Icon: companyIcons[index - 1]!,
    accent: companyAccentClasses[index - 1]!,
    href: companyLinks[index - 1]!,
    cardPosition: desktopCardPositions[index - 1]!,
    anchorPosition: desktopAnchorPositions[index - 1]!,
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
        <div className="relative h-[760px] md:h-[900px] lg:h-[980px]">
          <Image
            src="/ecosystem-lighthouse.png"
            alt={t("backgroundAlt")}
            fill
            priority
            unoptimized
            className="object-cover"
            style={{ objectPosition: "center 42%" }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_28%,rgba(255,255,255,0.08)_100%)]" />

          <svg
            aria-hidden="true"
            viewBox="0 0 1600 980"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          >
            <path
              d="M 800 330 C 640 300, 360 310, 255 520"
              fill="none"
              stroke="rgba(255,255,255,0.62)"
              strokeDasharray="7 9"
              strokeWidth="3"
            />
            <path
              d="M 800 330 C 705 315, 595 355, 550 560"
              fill="none"
              stroke="rgba(255,255,255,0.62)"
              strokeDasharray="7 9"
              strokeWidth="3"
            />
            <path
              d="M 800 330 C 915 320, 1040 360, 1060 560"
              fill="none"
              stroke="rgba(255,255,255,0.62)"
              strokeDasharray="7 9"
              strokeWidth="3"
            />
            <path
              d="M 800 330 C 965 300, 1240 315, 1340 520"
              fill="none"
              stroke="rgba(255,255,255,0.62)"
              strokeDasharray="7 9"
              strokeWidth="3"
            />
          </svg>

          <div className="absolute left-1/2 top-[13%] z-30 w-[min(88%,760px)] -translate-x-1/2 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF1D6]/80 text-[#D99522] shadow-[0_14px_34px_rgba(217,149,34,0.22)] backdrop-blur-[12px]">
              <Boxes size={34} strokeWidth={2.1} />
            </div>
            <div
              className="text-[14px] font-semibold uppercase tracking-[0.32em] text-[#D19B2F] md:text-[16px]"
              style={bodyFontStyle}
            >
              {t("mainBadge")}
            </div>
            <h3
              className="mt-4 text-[54px] font-extrabold leading-none tracking-[-0.04em] text-[#163E7A] md:text-[82px]"
              style={headingFontStyle}
            >
              {t("mainTitle")}
            </h3>
            <div
              className="mt-5 inline-flex items-center gap-4 text-[14px] font-semibold uppercase tracking-[0.28em] text-[#6E85B5] md:text-[15px]"
              style={bodyFontStyle}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#D9A132]" />
              {t("mainTagline")}
              <span className="h-1.5 w-1.5 rounded-full bg-[#D9A132]" />
            </div>
          </div>

          <div className="relative z-20 grid gap-5 px-4 pb-16 pt-[54%] md:grid-cols-2 md:px-8 md:pt-[50%] lg:hidden">
            {companies.map((company) => (
              <CompanyCard key={company.title} company={company} />
            ))}
          </div>

          <div className="absolute inset-0 z-20 hidden lg:block">
            {companies.map((company) => (
              <div key={company.title}>
                <div
                  className={`absolute ${company.cardPosition} w-[320px]`}
                >
                  <CompanyCard company={company} />
                </div>
                <div
                  className={`absolute ${company.anchorPosition} flex -translate-x-1/2 -translate-y-1/2 flex-col items-center`}
                >
                  <div
                    className={`h-24 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.0)_0%,rgba(255,255,255,0.92)_100%)]`}
                  />
                  <div
                    className={`h-5 w-5 rounded-full border-4 border-white shadow-[0_0_24px_rgba(255,255,255,0.95)] ${company.accent.dot}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <Link
            href="#process"
            className="absolute bottom-[8%] left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center text-white lg:flex"
          >
            <Mouse
              size={26}
              strokeWidth={1.7}
              className="animate-bounce opacity-95 [animation-duration:1.8s]"
            />
            <span
              className="mt-4 text-[15px] font-semibold uppercase tracking-[0.3em]"
              style={bodyFontStyle}
            >
              {t("scrollLabel")}
            </span>
            <ChevronDown
              size={18}
              className="mt-2 animate-bounce [animation-delay:180ms] [animation-duration:1.8s]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CompanyCard({
  company,
}: {
  company: {
    title: string;
    body: string;
    cta: string;
    summary: string;
    Icon: typeof Boxes;
    accent: { chip: string; dot: string; arrow: string };
    href: string;
  };
}) {
  const { title, summary, cta, Icon, accent, href } = company;

  return (
    <div className="group relative">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-[98px] items-center gap-4 rounded-[30px] border border-white/65 bg-white/54 px-6 py-5 shadow-[0_22px_60px_rgba(102,132,186,0.16)] backdrop-blur-[18px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/64"
      >
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${accent.chip}`}
        >
          <Icon size={26} strokeWidth={2.1} />
        </div>

        <div className="min-w-0 flex-1 text-left">
          <h4
            className="text-[18px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#163E7A] md:text-[20px]"
            style={headingFontStyle}
          >
            {title}
          </h4>
        </div>

        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${accent.arrow}`}
          aria-label={cta}
        >
          <ArrowRight size={16} strokeWidth={2.2} />
        </div>
      </Link>

      <div className="pointer-events-none absolute left-1/2 top-[calc(100%-8px)] z-30 w-[320px] -translate-x-1/2 rounded-[24px] border border-white/80 bg-white/78 p-5 opacity-0 shadow-[0_22px_54px_rgba(94,128,184,0.18)] backdrop-blur-[18px] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-3 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-3 group-focus-within:opacity-100">
        <h5
          className="text-[18px] font-extrabold tracking-[-0.02em] text-[#163E7A]"
          style={headingFontStyle}
        >
          {title}
        </h5>
        <p
          className="mt-3 text-[14px] leading-[1.65] text-[#6F7E98]"
          style={bodyFontStyle}
        >
          {summary}
        </p>
        <span
          className="mt-4 inline-flex text-[12px] font-semibold uppercase tracking-[0.18em] text-[#5C84D6]"
          style={bodyFontStyle}
        >
          {cta}
        </span>
      </div>
    </div>
  );
}
