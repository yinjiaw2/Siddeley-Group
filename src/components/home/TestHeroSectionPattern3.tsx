"use client";

import Link from "next/link";
import { ArrowRight, Code2, Cpu, Database } from "lucide-react";

export default function TestHeroSectionPattern3() {
  const features = [
    {
      title: "Clean Architecture",
      desc: "Streamlined infrastructure designed for maximum performance.",
      icon: Code2,
    },
    {
      title: "Data Integrity",
      desc: "Unhackable, immutable data storage for your enterprise.",
      icon: Database,
    },
    {
      title: "Cloud Native",
      desc: "Built from the ground up to leverage distributed, scalable systems.",
      icon: Cpu,
    },
  ];

  return (
    <div className="w-full font-sans bg-[#FFFFFF]">
      {/* =========================================
          HERO SECTION 
          ========================================= */}
      {/* Background: Ghost Gray (#F1F5F9) */}
      <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-[#F1F5F9] px-6 py-24 text-center md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,41,59,0.05),transparent_50%)]" />

        <div className="relative z-10 max-w-4xl">
          <div className="mb-8 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#1D4ED8]">
            <span className="h-px w-10 bg-[#1D4ED8]/50"></span>
            The Monochromatic Slate
            <span className="h-px w-10 bg-[#1D4ED8]/50"></span>
          </div>

          {/* Text: Rich Charcoal (#1E293B) & Steel Blue (#1D4ED8) */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[#1E293B] md:text-6xl lg:text-7xl">
            Ultra-Minimalist,{" "}
            <span className="text-[#1D4ED8]">Tech-Forward</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-[#1E293B]/80 md:text-xl leading-relaxed">
            A purely greyscale-to-blue approach. Letting the structure of our
            frameworks and high-quality deliverables do all the talking.
          </p>

          <div className="mt-12 flex justify-center">
            {/* Button: Steel Blue (#1D4ED8) text Pure White (#FFFFFF) */}
            <Link
              href="#intro-slate"
              className="inline-flex items-center gap-2 rounded-sm bg-[#1D4ED8] px-8 py-4 text-base font-bold text-[#FFFFFF] transition-all hover:bg-[#1D4ED8]/85 hover:translate-y-[-2px] shadow-lg shadow-[#1D4ED8]/20"
            >
              Initialize Framework <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO SECTION 
          ========================================= */}
      {/* Background: Pure White (#FFFFFF) */}
      <section id="intro-slate" className="w-full bg-[#FFFFFF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="flex flex-col justify-center">
              {/* Text: Steel Blue (#1D4ED8) */}
              <div className="mb-4 text-sm font-bold uppercase tracking-widest text-[#1D4ED8]">
                Engineered for Scale
              </div>

              {/* Text: Rich Charcoal (#1E293B) & Steel Blue (#1D4ED8) */}
              <h2 className="text-4xl font-extrabold leading-tight text-[#1E293B] md:text-5xl">
                Logic dictating <span className="text-[#1D4ED8]">design</span>.
              </h2>

              <div className="mt-8 space-y-6 text-lg text-[#1E293B]/80 leading-relaxed">
                <p>
                  We strip away all unnecessary noise to focus strictly on what
                  works. Deep slate combined with striking steel blue emphasizes
                  functionality and a cutting-edge workflow.
                </p>
                <p>
                  Every component here breathes efficiency, leaving the
                  spotlight solely on the raw value, data, and insights we
                  provide to the modern enterprise.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group flex gap-6 border-l-2 border-[#F1F5F9] pl-6 transition-all duration-300 hover:border-[#1D4ED8]"
                >
                  {/* Icon Background: Ghost Gray (#F1F5F9), Text: Steel Blue (#1D4ED8) */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#1D4ED8] transition-colors duration-300 group-hover:bg-[#1D4ED8] group-hover:text-[#FFFFFF]">
                    <feature.icon size={26} strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-[#1E293B]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[#1E293B]/70">{feature.desc}</p>
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
