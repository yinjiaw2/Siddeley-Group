"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Strategy", href: "#services" },
  { label: "Digital", href: "#ecosystem" },
  { label: "Growth", href: "#process" },
  { label: "Company", href: "#about" },
];

const insightCards = [
  {
    title: "Brand audit",
    meta: "This week",
    value: "+12 priorities",
  },
  {
    title: "Market expansion",
    meta: "Q3 planning",
    value: "4 regions",
  },
];

export default function SampleHeroSectionRevolut() {
  return (
    <section className="relative overflow-hidden bg-background text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero-bird.webp"
          alt="Siddeley Group hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,62,128,0.62)_0%,rgba(27,115,212,0.26)_52%,rgba(14,73,154,0.32)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_30%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-6 pb-16 pt-7 md:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-6">
          <Link
            href="#hero"
            className="text-[2.15rem] font-semibold tracking-[-0.05em] text-white"
          >
            Siddeley
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-white/92 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden text-lg font-medium text-white/92 transition-colors duration-300 hover:text-white md:inline-flex"
            >
              Contact
            </Link>
            <Link
              href="#services"
              className="rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(24rem,0.95fr)] lg:gap-10 lg:py-10">
          <div className="max-w-[44rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/78">
              Siddeley Group
            </p>

            <h1 className="mt-6 max-w-[42rem] text-6xl font-semibold leading-[0.9] tracking-[-0.07em] text-white">
              Change the way your brand grows
            </h1>

            <p className="mt-8 max-w-[33rem] text-xl leading-[1.45] text-white/88">
              Strategy, digital execution, and growth systems designed to help
              ambitious companies move faster with more clarity.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="rounded-full bg-foreground px-8 py-4 text-lg font-semibold text-background transition-transform duration-300 hover:-translate-y-1"
              >
                Book a consultation
              </Link>
              <Link
                href="#services"
                className="rounded-full border border-white/60 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/16"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[34rem] rounded-[2rem] border border-white/50 bg-white/10 px-6 pb-8 pt-10 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-[10px] sm:px-8 sm:pt-12">
              <div className="mx-auto w-fit rounded-full border border-white/55 bg-white/12 px-5 py-2 text-lg text-white/90 backdrop-blur-sm">
                Advisory
              </div>

              <div className="mt-7 text-center">
                <p className="text-lg text-white/78">Siddeley Growth Index</p>
                <p className="mt-2 text-[3.4rem] font-semibold leading-none tracking-[-0.06em] text-white sm:text-[4.6rem]">
                  AU$12.024M
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="rounded-full bg-background px-6 py-3 text-lg font-semibold text-foreground shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
                  Accounts
                </div>
              </div>

              <div className="mt-24 space-y-4 sm:mt-36">
                {insightCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex items-center justify-between gap-4 rounded-[1.6rem] bg-background px-5 py-4 text-foreground shadow-[0_18px_38px_rgba(15,23,42,0.16)] sm:px-6 sm:py-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(59,130,246,1),rgba(99,102,241,1))] text-lg font-semibold text-white">
                        SG
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-foreground">
                          {card.title}
                        </p>
                        <p className="text-base text-muted-foreground">
                          {card.meta}
                        </p>
                      </div>
                    </div>

                    <p className="text-xl font-semibold text-foreground">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
