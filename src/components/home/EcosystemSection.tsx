"use client";

import Image from "next/image";
import { Boxes, Building2, HandHeart, Leaf, Lightbulb } from "lucide-react";
import { useTranslations } from "next-intl";

const bodyFontStyle = {
  fontFamily: "var(--font-app-body), Arial, Helvetica, sans-serif",
};

const headingFontStyle = {
  fontFamily: "var(--font-app-heading), Georgia, serif",
};

const companyIcons = [Boxes, Leaf, Lightbulb, HandHeart];
const companyAccentClasses = [
  "bg-[#EDF4FF] text-[#357AF6]",
  "bg-[#EEF8EF] text-[#4A9C5A]",
  "bg-[#FFF4E9] text-[#E29A24]",
  "bg-[#F3EEFF] text-[#7D59D3]",
];

const desktopPositions = [
  "left-[8%] top-[73%]",
  "left-[20%] top-[56%]",
  "right-[20%] top-[68%]",
  "right-[8%] top-[60%]",
];

export default function EcosystemSection() {
  const t = useTranslations("home.ecosystem");

  const companies = [1, 2, 3, 4].map((index) => ({
    name: t(`company${index}Name`),
    subtitle: t(`company${index}Subtitle`),
    Icon: companyIcons[index - 1]!,
    accentClass: companyAccentClasses[index - 1]!,
    desktopPosition: desktopPositions[index - 1]!,
  }));

  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-[#F7FAFF] px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
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
            className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.9] text-[#5F6D88] md:text-[18px]"
            style={bodyFontStyle}
          >
            {t("subtitle")}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white shadow-[0_28px_80px_rgba(88,126,186,0.16)]">
          <div className="relative aspect-[16/10] min-h-[760px] md:min-h-[920px] lg:min-h-[760px]">
            <Image
              src="/ecosystem-lighthouse.png"
              alt={t("backgroundAlt")}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_36%,rgba(255,255,255,0.10)_100%)]" />

            <div className="absolute left-1/2 top-[36%] z-10 w-[min(86%,420px)] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/80 bg-white/56 px-6 py-5 text-center shadow-[0_18px_60px_rgba(92,121,168,0.18)] backdrop-blur-[10px] md:px-8 md:py-6">
              <div
                className="mb-2 inline-flex rounded-full bg-white/74 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6E85B5]"
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
              <p
                className="mt-2 text-[15px] leading-[1.8] text-[#66748F] md:text-[16px]"
                style={bodyFontStyle}
              >
                {t("mainSubtitle")}
              </p>
            </div>

            <div className="relative z-10 grid gap-4 px-4 pb-6 pt-[58%] md:grid-cols-2 md:px-8 md:pb-8 md:pt-[56%] lg:hidden">
              {companies.map(({ name, subtitle, Icon, accentClass }) => (
                <CompanyCard
                  key={name}
                  name={name}
                  subtitle={subtitle}
                  Icon={Icon}
                  accentClass={accentClass}
                />
              ))}
            </div>

            <div className="absolute inset-0 z-10 hidden lg:block">
              {companies.map(
                ({ name, subtitle, Icon, accentClass, desktopPosition }) => (
                  <div key={name} className={`absolute ${desktopPosition} w-[228px] -translate-x-1/2 -translate-y-1/2`}>
                    <CompanyCard
                      name={name}
                      subtitle={subtitle}
                      Icon={Icon}
                      accentClass={accentClass}
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
  name,
  subtitle,
  Icon,
  accentClass,
}: {
  name: string;
  subtitle: string;
  Icon: typeof Building2;
  accentClass: string;
}) {
  return (
    <article className="rounded-[26px] border border-white/80 bg-white/50 px-5 py-4 text-center shadow-[0_18px_46px_rgba(112,148,207,0.14)] backdrop-blur-[10px] transition-transform duration-300 hover:-translate-y-1">
      <div
        className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full ${accentClass}`}
      >
        <Icon size={24} strokeWidth={2.1} />
      </div>
      <h3
        className="text-[22px] font-extrabold tracking-[-0.025em] text-[#20406F]"
        style={headingFontStyle}
      >
        {name}
      </h3>
      <p
        className="mt-2 text-[13px] leading-[1.75] text-[#67758D]"
        style={bodyFontStyle}
      >
        {subtitle}
      </p>
    </article>
  );
}
