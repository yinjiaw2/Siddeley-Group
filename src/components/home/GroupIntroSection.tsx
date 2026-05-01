"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gem, Target, Users } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";

const panelIcons = [Users, Target, Gem];

export default function GroupIntroSection() {
  const t = useTranslations("home");
  const messages = useMessages();
  const rawParagraphs = messages.home?.groupIntro?.paragraphs;
  const paragraphs = Array.isArray(rawParagraphs)
    ? rawParagraphs
    : [t("groupIntro.paragraphs.0")];
  const pillars = [1, 2, 3].map((index) => ({
    title: t(`groupIntro.pillar${index}Title`),
    body: t(`groupIntro.pillar${index}Body`),
    Icon: panelIcons[index - 1]!,
  }));

  return (
    <section id="group-intro" className="w-full bg-white pt-0 pb-20 md:pb-28">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 pt-0 md:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:px-16 xl:gap-18">
        <div className="flex h-full flex-col justify-center py-0">
          <div className="mb-6 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#C9A15D]">
            {t("groupIntro.badge")}
            <span className="inline-block h-px w-12 shrink-0 bg-[#D8B783]" />
          </div>
          <h2
            className="max-w-[420px] text-[40px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#231B16] md:text-[52px] lg:text-[58px] font-app-heading"
          >
            {t("groupIntro.titleBefore")}
            <span className="text-[#231B16]">{t("groupIntro.titleAccent")}</span>
            {t("groupIntro.titleAfter")}
          </h2>
          <div
            className="mt-8 max-w-[430px] space-y-7 text-[16px] leading-[1.95] text-[#6D655E] md:text-[17px] font-app-body"
          >
            {paragraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph}`}>{paragraph}</p>
            ))}
          </div>

          <Link
            href="/#ecosystem"
            className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#1B2430] pb-2 text-[15px] font-semibold text-[#1B2430] transition-transform duration-300 hover:translate-x-1"
          >
            {t("groupIntro.cta")}
            <ArrowRight size={17} strokeWidth={2.1} />
          </Link>
        </div>

        <div className="relative flex h-full min-h-[620px] flex-col justify-end overflow-hidden rounded-[26px] border border-[#D6DCE6] bg-[#091E3A] shadow-[0_30px_80px_rgba(13,33,61,0.28)]">
          <Image
            src="/world-map.svg"
            alt={t("groupIntro.imageAlt")}
            fill
            className="object-cover opacity-88"
            style={{ objectPosition: "38% center" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,214,142,0.24),transparent_28%),radial-gradient(circle_at_84%_14%,rgba(255,241,209,0.18),transparent_22%),linear-gradient(180deg,rgba(10,24,45,0.08)_0%,rgba(6,18,33,0.26)_42%,rgba(5,15,30,0.88)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,rgba(5,14,28,0)_0%,rgba(5,14,28,0.54)_28%,rgba(5,14,28,0.82)_62%,rgba(5,14,28,0.96)_100%)] backdrop-blur-[2px]" />

          <div className="relative z-10 flex flex-1 flex-col justify-end px-7 pb-7 pt-10 md:px-9 md:pb-8">
            <div className="mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#CDA45F] font-app-body">
                {t("groupIntro.panelEyebrow")}
              </p>
              <h3 className="mt-2 text-[28px] font-bold tracking-[-0.03em] text-white md:text-[34px] font-app-heading">
                {t("groupIntro.panelTitle")}
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-[1.8] text-white/70 font-app-body">
                {t("groupIntro.panelBody")}
              </p>
            </div>

            <div className="grid gap-6 border-t border-white/14 pt-6 md:grid-cols-3 md:gap-0 md:pt-7">
              {pillars.map(({ title, body, Icon }, index) => (
                <div
                  key={title}
                  className={`relative px-0 md:px-6 ${
                    index < pillars.length - 1
                      ? "md:border-r md:border-white/16"
                      : ""
                  } ${index === 0 ? "md:pl-0" : ""} ${
                    index === pillars.length - 1 ? "md:pr-0" : ""
                  }`}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(205,164,95,0.12)] text-[#D5A458]">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h4 className="text-[20px] font-bold tracking-[-0.02em] text-white font-app-heading">
                    {title}
                  </h4>
                  <p className="mt-3 max-w-[220px] text-[14px] leading-[1.75] text-white/68 font-app-body">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
