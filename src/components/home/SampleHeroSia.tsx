import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function SampleHeroSia() {
  return (
    <section className="relative flex h-screen w-full overflow-hidden bg-background text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/yBvt-RSpNFpUcULN/scene.splinecode"
          className="h-full w-full"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-black/10" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 sm:px-8 lg:px-10">
        <div className="flex max-w-2xl flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
            Siddeley Group
          </p>

          <h1 className="font-app-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Strategy, design, and digital delivery built on a 3D canvas
          </h1>

          <p className="max-w-xl text-base leading-8 text-white/85 sm:text-lg">
            Use the Spline scene as the atmospheric background, then layer your
            hero message, supporting copy, and actions above it inside the same
            section.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#services"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-secondary"
            >
              Explore Services
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-foreground"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
