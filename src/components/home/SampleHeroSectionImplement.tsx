"use client";

import Link from "next/link";
import { ArrowDownLeft, Menu, Play, Search } from "lucide-react";

const topicChips = [
  "Generative AI",
  "Sustainability",
  "Strategy",
  "Transformation",
  "Trending topics",
];

const topLinks = [
  { label: "What we do", href: "#services" },
  { label: "Who we are", href: "#about" },
  { label: "Join us", href: "#contact" },
];

const bottomPanels = [
  {
    title: "Contact Us",
    href: "#contact",
  },
  {
    title: "Find All Services",
    href: "#services",
  },
];

export default function SampleHeroSectionImplement() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col overflow-hidden bg-secondary text-white"
      style={{ marginTop: "-4rem", paddingTop: "4rem" }}
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

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,31,28,0.62)_0%,rgba(34,31,28,0.38)_35%,rgba(34,31,28,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_14%,rgba(16,14,12,0.08)_100%)]" />

      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col">
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 pb-0 pt-5 md:px-8 lg:px-10">
          <div className="flex items-start justify-between gap-6 border-b border-white/35 pb-4">
            <div className="shrink-0">
              <p className="font-app-body text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/95">
                Siddeley
              </p>
              <p className="mt-1 font-app-heading text-[1.85rem] leading-none tracking-[-0.04em] text-white">
                Group
              </p>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-white/70">
                Strategic Advisory
              </p>
            </div>

            <div className="hidden flex-1 items-start justify-between gap-6 lg:flex">
              <nav className="ml-auto flex items-center gap-12 pr-8">
                {topLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[1.05rem] text-white/90 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-8 text-white/90">
                <Search className="h-5 w-5" strokeWidth={1.5} />
                <Play className="h-5 w-5" strokeWidth={1.5} />
                <Menu className="h-6 w-6" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center py-12 md:py-16">
            <div className="max-w-[38rem]">
              <h1 className="font-app-heading text-9xl leading-[0.92] tracking-[-0.055em] text-white">
                Hello, we&apos;re Siddeley Group
              </h1>

              <p className="mt-10 max-w-[30rem] text-lg leading-9 text-white/88 sm:text-[1.9rem] sm:leading-[1.8] lg:text-[1.1rem] lg:leading-10">
                We help organisations build sharper strategy, stronger digital
                experiences, and more valuable growth decisions.
              </p>

              <div className="mt-14">
                <p className="font-app-heading text-[1.9rem] italic leading-none text-white/90">
                  This is what we are especially focused on
                </p>

                <div className="mt-6 flex max-w-xl flex-wrap gap-3">
                  {topicChips.map((chip) => (
                    <Link
                      key={chip}
                      href="#services"
                      className="rounded-xl border border-white/70 bg-white/6 px-4 py-2 text-base text-white/95 backdrop-blur-sm transition-colors duration-300 hover:bg-white/12"
                    >
                      {chip}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 grid w-full border-t border-white/15 bg-[linear-gradient(90deg,rgba(57,52,50,0.9)_0%,rgba(66,73,88,0.88)_48%,rgba(73,67,63,0.9)_100%)] md:grid-cols-2">
          {bottomPanels.map((panel, index) => (
            <Link
              key={panel.title}
              href={panel.href}
              className={`group flex items-center justify-between gap-4 px-6 py-8 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-2 hover:bg-white/6 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:px-10 md:py-10 ${index === 0 ? "md:border-r md:border-white/10" : ""}`}
            >
              <div className="flex items-center gap-4 md:gap-6">
                <ArrowDownLeft
                  className="h-9 w-9 text-white/90 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1 md:h-12 md:w-12"
                  strokeWidth={1.4}
                />
                <span className="font-app-heading text-[2.2rem] leading-none tracking-[-0.04em] text-white md:text-[3.5rem]">
                  {panel.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
