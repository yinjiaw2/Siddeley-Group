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
import { useLocale, useTranslations } from "next-intl";

const companyIcons = [Boxes, Leaf, Lightbulb, HandHeart];
const companyAccentClasses = [
  {
    chip: "bg-[#FFF4E8] text-[#D99522]",
    arrow: "bg-[#FFE4B2] text-[#D99522]",
  },
  {
    chip: "bg-[#EAF1FF] text-[#4C84FF]",
    arrow: "bg-[#DDE9FF] text-[#4C84FF]",
  },
  {
    chip: "bg-[#F0E9FF] text-[#8B63E8]",
    arrow: "bg-[#E7DDFF] text-[#8B63E8]",
  },
  {
    chip: "bg-[#ECFAEE] text-[#67B76E]",
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
  "left-[10.8%] top-[43%]",
  "left-[30%] top-[53%]",
  "right-[24.5%] top-[53.5%]",
  "right-[5.8%] top-[44%]",
];

const desktopCardWidths = ["w-[262px]", "w-[286px]", "w-[278px]", "w-[250px]"];

export default function EcosystemSection() {
  const t = useTranslations("home.ecosystem");

  const companies = [1, 2, 3, 4].map((index) => ({
    title: t(`company${index}Title`),
    tagline: t(`company${index}Tagline`),
    body: t(`company${index}Body`),
    cta: t(`company${index}Cta`),
    Icon: companyIcons[index - 1]!,
    accent: companyAccentClasses[index - 1]!,
    href: companyLinks[index - 1]!,
    cardPosition: desktopCardPositions[index - 1]!,
    cardWidth: desktopCardWidths[index - 1]!,
  }));

  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-[#F7FAFF] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 text-center md:px-10 lg:px-16">
        <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#DCE7FA] bg-white px-5 py-2 text-sm uppercase tracking-[0.22em] text-[#6B7A99] font-app-body">
            <span className="inline-block h-px w-7 shrink-0 bg-[#7AA9E8]" />
            {t("badge")}
          </div>
          <h2 className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#16346A] md:text-[50px] font-app-heading">
            {t("titleBefore")}
            <span className="text-[#4C78E3]">{t("titleAccent")}</span>
            {t("titleAfter")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[17px] leading-[1.9] text-[#5F6D88] md:text-[18px] font-app-body">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-white/80 bg-white shadow-[0_28px_80px_rgba(88,126,186,0.16)]">
        <div className="relative h-[640px] md:h-[740px] lg:h-[780px]">
          <Image
            src="/ecosystem-lighthouse.png"
            alt={t("backgroundAlt")}
            fill
            priority
            unoptimized
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_28%,rgba(255,255,255,0.08)_100%)]" />

          <div className="absolute left-1/2 top-[10%] z-30 w-[min(88%,760px)] -translate-x-1/2 text-center">
            <div className="group relative mx-auto mb-4 w-fit">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF1D6]/80 text-[#D99522] shadow-[0_14px_34px_rgba(217,149,34,0.22)] backdrop-blur-[12px] transition duration-300 group-hover:scale-[1.04] group-hover:bg-[#FFF5E4]/92 group-hover:shadow-[0_16px_40px_rgba(217,149,34,0.3)]">
                <Boxes size={34} strokeWidth={2.1} />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-[calc(100%+12px)] z-40 w-[280px] -translate-x-1/2 rounded-[22px] border border-white/80 bg-white/84 p-4 text-left opacity-0 shadow-[0_20px_48px_rgba(94,128,184,0.18)] backdrop-blur-[18px] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D19B2F] font-app-body">
                  {t("mainBadge")}
                </p>
                <h4 className="mt-2 text-[18px] font-extrabold tracking-[-0.02em] text-[#163E7A] font-app-heading">
                  {t("mainTitle")}
                </h4>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#6F7E98] font-app-body">
                  {t("mainSubtitle")}
                </p>
              </div>
            </div>
            <div className="text-[14px] font-semibold uppercase tracking-[0.32em] text-[#D19B2F] md:text-[16px] font-app-body">
              {t("mainBadge")}
            </div>

            <h3 className="mt-4 text-[48px] font-extrabold leading-none tracking-[-0.04em] text-[#163E7A] md:text-[72px] font-app-heading">
              {t("mainTitle")}
            </h3>
            <div className="mt-6 inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.28em] text-[#6E85B5] md:text-[14px] font-app-body">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D9A132]" />
              <span>{t("mainTagline")}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#D9A132]" />
            </div>
          </div>

          <div className="absolute inset-0 z-20 hidden lg:block">
            {companies.map((company) => (
              <div key={company.title} className="group">
                <div
                  className={`absolute ${company.cardPosition} ${company.cardWidth}`}
                >
                  <CompanyCard company={company} />
                </div>
              </div>
            ))}
          </div>

          <Link
            href="#process"
            className="animate-scroll-nudge absolute bottom-[8%] left-1/2 z-20 hidden flex-col items-center text-white lg:flex"
          >
            <Mouse size={26} strokeWidth={1.7} className="opacity-95" />
            <span className="mt-4 text-[15px] font-semibold uppercase tracking-[0.3em] font-app-body">
              {t("scrollLabel")}
            </span>
            <ChevronDown size={18} className="mt-2" />
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
    tagline: string;
    body: string;
    cta: string;
    Icon: typeof Boxes;
    accent: { chip: string; arrow: string };
    href: string;
    cardWidth?: string;
  };
}) {
  const { title, tagline, body, cta, Icon, accent, href } = company;

  return (
    <div className="group relative">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-[88px] items-center gap-3 rounded-[26px] border border-white/65 bg-white/54 px-5 py-4 shadow-[0_22px_60px_rgba(102,132,186,0.16)] backdrop-blur-[18px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/64"
      >
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${accent.chip}`}
        >
          <Icon size={22} strokeWidth={2.1} />
        </div>

        <div className="min-w-0 flex-1 text-left">
          <h4 className="text-[17px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#163E7A] md:text-[18px] font-app-heading">
            {title}
          </h4>
        </div>

        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${accent.arrow}`}
          aria-label={cta}
        >
          <ArrowRight size={14} strokeWidth={2.2} />
        </div>
      </Link>

      <div className="pointer-events-none absolute left-1/2 top-[calc(100%-8px)] z-30 w-[300px] -translate-x-1/2 rounded-[24px] border border-white/80 bg-white/78 p-5 opacity-0 shadow-[0_22px_54px_rgba(94,128,184,0.18)] backdrop-blur-[18px] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-3 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-3 group-focus-within:opacity-100">
        <h5 className="text-[18px] font-extrabold tracking-[-0.02em] text-[#163E7A] font-app-heading">
          {title}
        </h5>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5C84D6] font-app-body">
          {tagline}
        </p>
        <p className="mt-3 text-[14px] leading-[1.65] text-[#6F7E98] font-app-body">
          {body}
        </p>
        <span className="mt-4 inline-flex rounded-full border border-[#CFE0FF] bg-[#EEF4FF] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4D77D8] font-app-body">
          {cta}
        </span>
      </div>
    </div>
  );
}
