"use client";

import { useTranslations } from "next-intl";
import ConsultationForm from "@/components/shared/ConsultationForm";

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="w-full bg-[#1A1A1A] px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex w-full flex-col gap-6 lg:w-3/7">
          <span
            className="inline-flex w-fit rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-widest font-app-body"
            style={{
              color: "#F5C400",
              borderColor: "rgba(245,196,0,0.35)",
              backgroundColor: "rgba(245,196,0,0.08)",
            }}
          >
            {t("sectionTitle")}
          </span>

          <div className="space-y-4">
            <h2
              className="text-4xl font-extrabold leading-tight tracking-[-0.03em] md:text-5xl font-app-heading"
            >
              {t("formTitle")}
            </h2>
            <p
              className="max-w-md text-base leading-7 text-white/70 font-app-body"
            >
              {t("sectionSubtitle")}
            </p>
            <p
              className="max-w-md text-sm leading-7 text-white/55 font-app-body"
            >
              {t("formSubtitle")}
            </p>
          </div>
        </div>

        <ConsultationForm />
      </div>
    </section>
  );
}
