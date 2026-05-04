"use client";

import Link from "next/link";
import { ArrowRight, Landmark, Scale, Shield } from "lucide-react";

export default function TestHeroSectionPattern2() {
  const features = [
    {
      title: "Generational Wealth",
      desc: "Strategies designed to protect and grow your assets for decades.",
      icon: Landmark,
    },
    {
      title: "Trusted Counsel",
      desc: "Expert guidance rooted in deep industry experience and stability.",
      icon: Scale,
    },
    {
      title: "Ironclad Security",
      desc: "Unwavering protection for your family's legacy and transitions.",
      icon: Shield,
    },
  ];

  return (
    <div className="w-full font-sans bg-[#FAFAF9]">
      {/* =========================================
          HERO SECTION 
          ========================================= */}
      {/* Background: Deep Pine / Forest (#022C22) */}
      <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-[#022C22] px-6 py-24 text-center md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,113,108,0.15),transparent_50%)]" />

        <div className="relative z-10 max-w-4xl">
          <div className="mb-8 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#78716C]">
            <span className="h-px w-10 bg-[#78716C]"></span>
            The Heritage Estate
            <span className="h-px w-10 bg-[#78716C]"></span>
          </div>

          {/* Text: Warm Alabaster (#FAFAF9) & Polished Bronze (#78716C) */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[#FAFAF9] md:text-6xl lg:text-7xl">
            Warm, Grounded, <span className="text-[#78716C]">Established</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-[#78716C] md:text-xl leading-relaxed">
            Projecting deep roots and stability. A sophisticated, earthy
            alternative tailored for navigating complex life and business
            transitions with absolute trust.
          </p>

          <div className="mt-12 flex justify-center">
            {/* Button: Soft Sage (#D1FAE5) text Deep Pine (#022C22) */}
            <Link
              href="#intro-heritage"
              className="inline-flex items-center gap-2 rounded-sm bg-[#D1FAE5] px-8 py-4 text-base font-bold text-[#022C22] transition-all hover:bg-[#D1FAE5]/80 hover:translate-y-[-2px] shadow-lg shadow-[#D1FAE5]/10"
            >
              Discover Our Legacy <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO SECTION 
          ========================================= */}
      {/* Background: Warm Alabaster (#FAFAF9) */}
      <section
        id="intro-heritage"
        className="w-full bg-[#FAFAF9] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="flex flex-col justify-center">
              {/* Text: Polished Bronze (#78716C) */}
              <div className="mb-4 text-sm font-bold uppercase tracking-widest text-[#78716C]">
                Built on trust
              </div>

              {/* Text: Deep Pine (#022C22) & Polished Bronze (#78716C) */}
              <h2 className="text-4xl font-extrabold leading-tight text-[#022C22] md:text-5xl">
                Stability for the{" "}
                <span className="text-[#78716C]">long term</span>.
              </h2>

              <div className="mt-8 space-y-6 text-lg text-[#022C22]/75 leading-relaxed">
                <p>
                  We've curated a palette that speaks to endurance. Deep, rich
                  greens and warm stone colors replace stark blacks and shiny
                  golds, offering a grounded, sophisticated experience.
                </p>
                <p>
                  This aesthetic is perfectly suited for managing complexities
                  with a steady hand. It reflects an unwavering commitment to
                  securing your future and preserving what matters most.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group flex gap-6 border-l-2 border-[#78716C]/30 pl-6 transition-all duration-300 hover:border-[#022C22]"
                >
                  {/* Icon Background: Soft Sage (#D1FAE5), Text: Deep Pine (#022C22) */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#022C22] transition-colors duration-300 group-hover:bg-[#022C22] group-hover:text-[#FAFAF9]">
                    <feature.icon size={26} strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-[#022C22]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[#022C22]/75">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
