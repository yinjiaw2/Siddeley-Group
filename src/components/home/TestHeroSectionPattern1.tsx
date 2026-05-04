"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Globe, Shield } from "lucide-react";

export default function TestHeroSectionPattern1() {
  const features = [
    {
      title: "Global Reach",
      desc: "Expanding your investment horizons beyond traditional borders.",
      icon: Globe,
    },
    {
      title: "Strategic Analytics",
      desc: "Data-driven insights to navigate complex modern markets.",
      icon: BarChart3,
    },
    {
      title: "Secure Assets",
      desc: "Platinum-grade security for your most valuable resources.",
      icon: Shield,
    },
  ];

  return (
    <div className="w-full font-sans bg-[#F8FAFC]">
      {/* =========================================
          HERO SECTION 
          ========================================= */}
      {/* Background: Crisp Pearl (#F8FAFC) */}
      <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-[#F8FAFC] px-6 py-24 text-center md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.2),transparent_50%)]" />

        <div className="relative z-10 max-w-4xl">
          <div className="mb-8 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
            <span className="h-px w-10 bg-[#94A3B8]"></span>
            The Platinum Executive
            <span className="h-px w-10 bg-[#94A3B8]"></span>
          </div>

          {/* Text: Midnight Blue (#172554) & Muted Teal (#0F766E) */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[#172554] md:text-6xl lg:text-7xl">
            Cool, Sleek, <span className="text-[#0F766E]">Modern</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-[#172554]/70 md:text-xl leading-relaxed">
            Elevating your business with high-end, strategic insights.
            Experience the clarity of modern tech-advisory paired with deep
            oceanic authority.
          </p>

          <div className="mt-12 flex justify-center">
            {/* Button: Midnight Blue (#172554) */}
            <Link
              href="#intro"
              className="inline-flex items-center gap-2 rounded-sm bg-[#172554] px-8 py-4 text-base font-semibold text-[#F8FAFC] transition-all hover:bg-[#172554]/90 hover:translate-y-[-2px] shadow-lg shadow-[#172554]/20"
            >
              Explore Our Vision <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO SECTION 
          ========================================= */}
      {/* Background: White (#FFFFFF) */}
      <section id="intro" className="w-full bg-[#FFFFFF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="flex flex-col justify-center">
              {/* Text: Platinum (#94A3B8) */}
              <div className="mb-4 text-sm font-bold uppercase tracking-widest text-[#94A3B8]">
                Built with precision
              </div>

              {/* Text: Midnight Blue (#172554) & Muted Teal (#0F766E) */}
              <h2 className="text-4xl font-extrabold leading-tight text-[#172554] md:text-5xl">
                Strategic guidance for the{" "}
                <span className="text-[#0F766E]">modern era</span>.
              </h2>

              <div className="mt-8 space-y-6 text-lg text-[#172554]/70 leading-relaxed">
                <p>
                  We've moved beyond the stark and traditional. Here, platinum
                  tones pair with deep oceanic blues to provide a trustworthy,
                  authoritative experience that feels both premium and
                  forward-thinking.
                </p>
                <p>
                  Our approach is structured, deliberate, and undeniably
                  sleek—designed for brands that perform better when strategy
                  and execution are perfectly aligned.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group flex gap-6 border-l-2 border-[#94A3B8]/30 pl-6 transition-all duration-300 hover:border-[#0F766E]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#172554]/5 text-[#0F766E] transition-colors duration-300 group-hover:bg-[#0F766E] group-hover:text-[#F8FAFC]">
                    <feature.icon size={26} strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-[#172554]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[#172554]/70">{feature.desc}</p>
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
