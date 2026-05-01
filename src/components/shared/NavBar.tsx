"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-body), Arial, Helvetica, sans-serif",
};

const brandHeadingStyle = {
  fontFamily: "var(--font-app-heading), Georgia, serif",
};

export default function NavBar() {
  const t = useTranslations("header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const nextLocale = locale === "zh-CN" ? "en" : "zh-CN";
  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !pastHero;
  const desktopTextClass = isTransparent
    ? "text-white hover:bg-white/10 hover:text-white"
    : "text-slate-700 hover:bg-slate-900/6 hover:text-slate-950";
  const desktopButtonClass = isTransparent
    ? "border-white/20 text-white hover:bg-white/10 hover:text-white"
    : "border-slate-300 text-slate-700 hover:bg-slate-900/6 hover:text-slate-950";
  const mobileButtonClass = menuOpen
    ? "text-white hover:bg-white/10 hover:text-white"
    : isTransparent
      ? "text-white hover:bg-white/10 hover:text-white"
      : "text-slate-700 hover:bg-slate-900/6 hover:text-slate-950";
  const navLinks = [
    { label: t("nav.home"), href: "/#hero" },
    { label: t("nav.approach"), href: "/approach" },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (!isHomePage) {
        setPastHero(true);
        return;
      }

      const hero = document.getElementById("hero");

      if (!hero) {
        setPastHero(window.scrollY > 10);
        return;
      }

      const triggerPoint = hero.offsetTop + hero.offsetHeight - 88;
      setPastHero(window.scrollY >= triggerPoint);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLocaleChange = () => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    setMenuOpen(false);
    router.refresh();
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent ? "top-4" : "top-0"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-300 ${
            isTransparent ? "max-w-[calc(100%-2rem)] px-4" : "max-w-none px-0"
          }`}
        >
          <div
            className={`mx-auto flex h-16 items-center justify-between transition-all duration-300 ${
              isTransparent
                ? "max-w-7xl rounded-full border border-white/20 bg-white/12 px-6 shadow-[0_18px_50px_rgba(15,23,42,0.18)] backdrop-blur-md"
                : "w-full border-b border-slate-200 bg-white px-6 shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
            }`}
          >
            <Link href="/#hero" className="flex items-center gap-2 shrink-0">
              <span
                className={`text-[28px] font-extrabold tracking-[-0.03em] ${
                  isTransparent ? "text-white" : "text-slate-900"
                }`}
                style={brandHeadingStyle}
              >
                Siddeley Group
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-4 py-2 text-base font-medium transition-colors duration-150 ${desktopTextClass}`}
                  style={fontStyle}
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={handleLocaleChange}
                className={`ml-2 rounded-md border px-3 py-2 text-base font-medium transition-colors duration-150 ${desktopButtonClass}`}
                style={fontStyle}
                aria-label={t("localeSwitch.ariaLabel")}
              >
                {t(`localeSwitch.${nextLocale}`)}
              </button>
            </nav>

            <button
              className={`md:hidden flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-150 ${mobileButtonClass}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={
                menuOpen ? t("actions.closeMenu") : t("actions.openMenu")
              }
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        className={`fixed top-0 right-0 z-50 flex h-full w-64 flex-col px-6 pt-20 pb-8 transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#0D1B2A" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="border-b border-white/10 py-4 text-lg font-medium text-gray-300 transition-colors duration-150 hover:text-white"
            style={fontStyle}
          >
            {link.label}
          </Link>
        ))}

        <button
          type="button"
          onClick={handleLocaleChange}
          className="w-full border-b border-white/10 py-4 text-left text-lg font-medium text-gray-300 transition-colors duration-150 hover:text-white"
          style={fontStyle}
          aria-label={t("localeSwitch.ariaLabel")}
        >
          {t(`localeSwitch.${nextLocale}`)}
        </button>
      </nav>
    </>
  );
}
