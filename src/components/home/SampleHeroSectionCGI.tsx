"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Network,
  Puzzle,
} from "lucide-react";

const topActions = [
  { label: "Learn more", href: "#services" },
  { label: "Talk to us", href: "#contact" },
];

const capabilityColumns = [
  {
    title: "Industries",
    description:
      "We support complex organisations across regulated and growth sectors with clear strategy, delivery discipline, and pragmatic transformation leadership.",
    icon: Lightbulb,
    tags: ["Financial Services", "Government", "Energy", "Telecommunications"],
  },
  {
    title: "Services",
    description:
      "From digital strategy to service design and operating model change, we help teams turn ambition into well-executed programs.",
    icon: Network,
    tags: [
      "Artificial Intelligence",
      "Business Consulting",
      "Cloud Services",
      "Managed Delivery",
    ],
  },
  {
    title: "Solutions",
    description:
      "We combine advisory thinking with implementation depth to shape practical solutions that improve performance and customer experience.",
    icon: Puzzle,
    tags: [
      "Data Platforms",
      "Experience Design",
      "Operating Models",
      "Transformation Roadmaps",
    ],
  },
];

export default function SampleHeroSectionCGI() {
  return (
    <section className="bg-background text-foreground lg:h-screen lg:overflow-hidden">
      <div className="flex w-full flex-col px-4 py-4 sm:px-6 lg:h-full lg:justify-center lg:px-8 lg:py-5">
        <div className="flex items-stretch bg-secondary">
          <button
            type="button"
            aria-label="Previous highlight"
            className="hidden self-center rounded-full border border-border bg-background p-3 text-violet-900 transition-colors duration-300 hover:bg-secondary lg:flex"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2.25} />
          </button>

          <div className="flex flex-1 flex-col bg-white shadow-sm lg:flex-row">
            <div className="flex flex-1 flex-col justify-center gap-5 bg-secondary px-5 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-8">
              <div className="flex max-w-2xl flex-col gap-4">
                <p className="font-app-body text-sm font-semibold uppercase tracking-widest text-violet-900">
                  Siddeley Group
                </p>

                <h1 className="font-app-heading text-3xl leading-tight text-violet-950 sm:text-4xl lg:text-5xl">
                  Welcome to Siddeley Group in Australia
                </h1>

                <p className="max-w-xl text-sm leading-7 text-foreground/80 sm:text-base lg:leading-7">
                  We work side-by-side with ambitious organisations to align
                  strategy, digital capability, and execution. Our teams help
                  clients navigate change with clear priorities and practical
                  momentum.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {topActions.map((action, index) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={`flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                      index === 0
                        ? "bg-white text-foreground hover:bg-background"
                        : "border border-border bg-transparent text-foreground hover:bg-white"
                    }`}
                  >
                    <span>{action.label}</span>
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col bg-white">
              <div className="relative min-h-64 flex-1 overflow-hidden lg:min-h-0">
                <Image
                  src="/hero-bird.webp"
                  alt="Sydney skyline representing Siddeley Group's Australian market focus"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-foreground/10" />
              </div>

              <div className="flex bg-white">
                <div className="h-16 w-24 bg-linear-to-b from-fuchsia-600 to-violet-700 sm:h-20 sm:w-32 lg:h-24 lg:w-36" />
                <div className="flex flex-1 bg-secondary" />
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Next highlight"
            className="hidden self-center rounded-full border border-border bg-background p-3 text-violet-900 transition-colors duration-300 hover:bg-secondary lg:flex"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={2.25} />
          </button>
        </div>

        <div className="flex flex-col border-x border-b border-border bg-background xl:flex-row">
          {capabilityColumns.map((column, index) => {
            const Icon = column.icon;

            return (
              <article
                key={column.title}
                className={`flex flex-1 flex-col gap-4 px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-7 ${
                  index > 0
                    ? "border-t border-border xl:border-l xl:border-t-0"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-violet-200 p-3 text-violet-900">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h2 className="font-app-heading text-2xl text-violet-950 sm:text-3xl">
                    {column.title}
                  </h2>
                </div>

                <p className="max-w-xl text-sm leading-6 text-foreground/80 sm:text-base sm:leading-7">
                  {column.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {column.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-2 text-sm ${
                        tag === "Managed Delivery"
                          ? "border-violet-700 bg-violet-700 text-white"
                          : "border-border bg-white text-foreground/85"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
