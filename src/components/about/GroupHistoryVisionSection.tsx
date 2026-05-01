"use client";

import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

export default function GroupHistoryVisionSection() {
  const t = useTranslations("about.historyVision");
  const messages = useMessages();

  const rawParagraphs = (messages.about as Record<string, unknown> | undefined)
    ?.historyVision as { paragraphs?: unknown } | undefined;
  const paragraphs = Array.isArray(rawParagraphs?.paragraphs)
    ? (rawParagraphs.paragraphs as string[])
    : [t("paragraphs.0")];

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        {/* History: two-column */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#9A9A9A]">
              <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
              {t("badge")}
            </div>
            <h2
              className="max-w-xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#1A1A1A] md:text-[48px] lg:text-[54px] font-app-heading"
            >
              {t("titleBefore")}
              <span className="text-[#F5C400]">{t("titleAccent")}</span>
              {t("titleAfter")}
            </h2>
            <div
              className="mt-8 space-y-6 text-[17px] leading-[1.9] text-[#5F5854] md:text-[18px] font-app-body"
            >
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-[#EDE7DA] shadow-[0_24px_70px_rgba(26,26,26,0.14)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(26,26,26,0.18)_100%)]" />
            <Image
              src="/world-trade-center.jpg"
              alt={t("imageAlt")}
              width={1200}
              height={900}
              className="h-full min-h-[340px] w-full object-cover"
            />
          </div>
        </div>

        {/* Vision block */}
        <div className="mt-16 md:mt-20">
          <div className="rounded-[24px] border border-[#E8E3D8] bg-[#F8F5EF] px-8 py-10 md:flex md:gap-12 md:px-12 md:py-12 lg:gap-20">
            <div className="mb-6 shrink-0 md:mb-0 md:w-56 lg:w-64">
              <div className="mb-3 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#9A9A9A]">
                <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
                {t("visionLabel")}
              </div>
              <h3
                className="text-[24px] font-extrabold leading-tight tracking-[-0.02em] text-[#1A1A1A] md:text-[28px] font-app-heading"
              >
                {t("visionTitle")}
              </h3>
            </div>
            <div className="border-t border-[#E0DAD0] pt-6 md:border-l md:border-t-0 md:pl-12 md:pt-0 lg:pl-20">
              <p
                className="text-[17px] leading-[1.95] text-[#5F5854] md:text-[18px] font-app-body"
              >
                {t("visionBody")}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
