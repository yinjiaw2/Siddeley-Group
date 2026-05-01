"use client";

import { Layers, Zap, TrendingUp, Target } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [Layers, Zap, TrendingUp, Target];

export default function SiddeleyAdvantageSection() {
  const t = useTranslations("approach.siddeleyAdvantage");

  const items = [1, 2, 3, 4].map((n, i) => ({
    Icon: icons[i]!,
    title: t(`item${n}Title`),
    desc: t(`item${n}Desc`),
  }));

  return (
    <section className="w-full bg-[#F8F5EF] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-col">
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
            <p
              className="mt-8 text-[17px] leading-[1.9] text-[#5F5854] md:text-[18px] font-app-body"
            >
              {t("subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-6">
            {items.map(({ Icon, title, desc }, index) => (
              <article
                key={index}
                className="group flex flex-col gap-4 rounded-[20px] border border-[#E8E3D8] bg-white px-7 py-8 transition-colors duration-300 hover:border-[#F5C400] hover:bg-[#FFFBEE]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(245,196,0,0.10)] transition-colors duration-300 group-hover:bg-[rgba(245,196,0,0.22)]">
                  <Icon
                    aria-hidden="true"
                    size={20}
                    className="text-[#C79D00] transition-colors duration-300 group-hover:text-[#A07800]"
                  />
                </div>
                <h3
                  className="text-[17px] font-bold text-[#1A1A1A] font-app-heading"
                >
                  {title}
                </h3>
                <p
                  className="text-[16px] leading-[1.8] text-[#6B6B6B] font-app-body"
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
