"use client";

import { useState } from "react";
import { Link } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  leadershipMembers,
  type LeadershipCategory,
} from "@/utils/leadershipTeam";

type Category = "all" | LeadershipCategory;

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return parts.length >= 2
    ? (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase()
    : name.slice(0, 2).toUpperCase();
}

export default function LeadershipTeamSection() {
  const [active, setActive] = useState<Category>("all");
  const t = useTranslations("about.leadership");

  const filters: { key: Category; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "board", label: t("filterBoard") },
    { key: "executive", label: t("filterExecutive") },
    { key: "specialists", label: t("filterSpecialists") },
    { key: "emerging", label: t("filterEmerging") },
  ];

  const visible =
    active === "all"
      ? leadershipMembers
      : leadershipMembers.filter((m) => m.category === active);

  return (
    <section className="w-full bg-[#F8F5EF] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#9A9A9A]">
            <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
            {t("badge")}
          </div>
          <h2 className="font-app-heading max-w-xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#1A1A1A] md:text-[48px] lg:text-[54px]">
            {t("titleBefore")}
            <span className="text-[#F5C400]">{t("titleAccent")}</span>
            {t("titleAfter")}
          </h2>
          <p className="font-app-body mt-6 max-w-2xl text-[17px] leading-[1.9] text-[#5F5854] md:text-[18px]">
            {t("subtitle")}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                active === key
                  ? "bg-[#F5C400] text-[#1A1A1A] shadow-[0_4px_12px_rgba(245,196,0,0.30)]"
                  : "border border-[#E0DAD0] bg-white text-[#5F5854] hover:border-[#F5C400] hover:text-[#1A1A1A]"
              } font-app-body`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((member) => {
            const role = t(`roles.${member.roleKey}`);

            return (
              <article
                key={member.id}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-[#E8E3D8] bg-white transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(26,26,26,0.10)]"
              >
                {/* Headshot */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE7DA]">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span
                        className="select-none text-[52px] font-extrabold tracking-[-0.04em]"
                        style={{ color: member.avatarColor }}
                      >
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col gap-1 p-5">
                  <h3
                    className="text-[16px] font-bold text-[#1A1A1A] font-app-heading"
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-[13px] leading-[1.6] text-[#7A7A7A] font-app-body"
                  >
                    {role}
                  </p>
                  <div className="mt-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#9A9A9A] transition-colors duration-200 hover:text-[#C79D00] font-app-body"
                    >
                      <Link size={14} />
                      {t("linkedinLabel")}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
