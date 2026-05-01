"use client";

import { useTranslations } from "next-intl";

const headingFontStyle = {
  fontFamily: "var(--font-app-heading), Georgia, serif",
};

export default function HeroSection() {
  const t = useTranslations("home");
  const heroTitleLines = [
    t("hero.titlePrefix"),
    t("hero.titleHighlight"),
    t("hero.titleSuffix"),
  ].filter(Boolean);

  return (
    <section
      id="hero"
      className="relative flex w-full flex-col overflow-hidden bg-secondary"
      style={{ marginTop: "-4rem", minHeight: "100vh", paddingTop: "4rem" }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/home-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,26,0.46)_0%,rgba(7,17,26,0.3)_35%,rgba(7,17,26,0.54)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_38%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center justify-center px-6 py-24 text-center md:px-10 lg:px-16">
        <div className="max-w-5xl">
          <h1
            className="text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
            style={{ ...headingFontStyle, letterSpacing: "-0.02em" }}
          >
            {heroTitleLines.map((line, index) => (
              <span
                key={`${index}-${line}`}
                className="hero-title-line hero-title-float-in block"
                style={{ ["--hero-enter-delay" as string]: `${index * 180}ms` }}
              >
                {line}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
}
