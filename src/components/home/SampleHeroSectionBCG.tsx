"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroCard = {
  id: string;
  label: string;
  meta: string;
  title: string;
  image: string;
};

const heroCards: HeroCard[] = [
  {
    id: "strategy",
    label: "STRATEGY",
    meta: "CASE STUDY",
    title: "Brand systems that create clearer market positioning.",
    image: "/hero-bird.webp",
  },
  {
    id: "growth",
    label: "GROWTH",
    meta: "INSIGHT",
    title: "Growth programs designed to connect planning with execution.",
    image: "/hero-bird.webp",
  },
  {
    id: "digital",
    label: "DIGITAL",
    meta: "REPORT",
    title: "Digital experiences that turn complex offers into simple journeys.",
    image: "/hero-bird.webp",
  },
];

const cardPositions = [
  "left-0 top-24 z-10 h-[22rem] w-[18rem] -translate-x-2 scale-[0.82] opacity-100 md:h-[28rem] md:w-[23rem] md:translate-x-0",
  "left-1/2 top-0 z-30 h-[28rem] w-[20rem] -translate-x-1/2 scale-100 opacity-100 md:h-[42rem] md:w-[40rem]",
  "right-0 top-24 z-20 h-[22rem] w-[18rem] translate-x-2 scale-[0.82] opacity-100 md:h-[28rem] md:w-[23rem] md:translate-x-0",
] as const;

export default function SampleHeroSectionBCG() {
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setOrder((current) => [current[1], current[2], current[0]]);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background px-6 pb-20 pt-28 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_42%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-foreground/70">
          Welcome to Siddeley Group
        </p>

        <h1 className="mt-6 max-w-5xl text-center font-app-heading text-5xl leading-none tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
          Unlocking bold ideas for brands building what comes next
        </h1>

        <p className="mt-6 max-w-2xl text-center text-base leading-7 text-muted-foreground md:text-lg">
          A sample BCG-inspired hero section with a rotating editorial card
          layout for Siddeley Group.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <Link
            href="#services"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
          >
            Explore Services
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-secondary"
          >
            Contact Team
          </Link>
        </div>

        <div className="relative mt-16 h-[36rem] w-full max-w-6xl md:h-[46rem]">
          {order.map((cardIndex, positionIndex) => {
            const card = heroCards[cardIndex];
            const isCenter = positionIndex === 1;

            return (
              <article
                key={card.id}
                className={`absolute overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition-all duration-1000 ease-out ${cardPositions[positionIndex]}`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 40rem"
                    priority={isCenter}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-foreground/8 via-transparent to-foreground/60" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/80 bg-black/25 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white backdrop-blur-sm md:left-8 md:top-8">
                    {card.label}
                  </div>

                  <div className="absolute inset-x-4 bottom-4 rounded-[1.75rem] bg-background/92 p-5 backdrop-blur-md md:inset-x-8 md:bottom-8 md:p-8">
                    <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-foreground/70 md:text-sm">
                      <span>{card.meta}</span>
                      <span className="h-1 w-1 rounded-full bg-foreground/30" />
                      <span>SIDDELEY GROUP</span>
                    </div>
                    <h2 className="mt-4 font-app-heading text-2xl leading-tight text-foreground md:text-[2rem]">
                      {card.title}
                    </h2>
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
