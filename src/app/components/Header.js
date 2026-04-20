"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_THEME } from "../theme";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const featuresCloseTimeoutRef = useRef(null);

  const openFeaturesMenu = () => {
    if (featuresCloseTimeoutRef.current) {
      clearTimeout(featuresCloseTimeoutRef.current);
      featuresCloseTimeoutRef.current = null;
    }
    setFeaturesOpen(true);
  };

  const closeFeaturesMenuWithDelay = () => {
    if (featuresCloseTimeoutRef.current) {
      clearTimeout(featuresCloseTimeoutRef.current);
    }
    featuresCloseTimeoutRef.current = setTimeout(() => {
      setFeaturesOpen(false);
      featuresCloseTimeoutRef.current = null;
    }, 220);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (featuresCloseTimeoutRef.current) {
        clearTimeout(featuresCloseTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const closeMenuOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    if (mediaQuery.matches) setMenuOpen(false);
    mediaQuery.addEventListener("change", closeMenuOnDesktop);

    return () => mediaQuery.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
     {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Features",
      href: "/features",
      submenu: [
        {
          label: "Integrations",
          href: "/integration",
          desc: "Connect courier partners and tools",
        },
         {
          label: "Features",
          href: "/features",
         desc: "Platform Features",
        },
    
      ],
    },
  ];

  const theme = SITE_THEME;

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md border-b shadow-[0_4px_30px_rgba(17,24,39,0.08)]"
            : "bg-transparent"
        }`}
        style={
          scrolled
            ? {
                background: "rgba(255,255,255,0.96)",
                borderColor: theme.colors.border,
              }
            : undefined
        }
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-[72px]">
          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center no-underline">
            <div className="relative w-[220px] h-[150px] md:w-[320px] md:h-[120px] flex items-center justify-center overflow-hidden flex-shrink-0 -ml-2">
              <Image
                src="/AIship1.png"
                alt="AIShip logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              if (!link.submenu) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-[18px] font-bold tracking-wide text-black/70 transition-all duration-200 "
                  >
                    <span className="opacity-70">{link.icon}</span>
                    {link.label}
                    <span
                      className="absolute bottom-[6px] left-4 right-4 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                      style={{
                        background: "linear-gradient(90deg, #1e3a8a, #172554)",
                      }}
                    />
                  </Link>
                );
              }

              return (
                <div
                  key={link.label}
                  className="relative pb-3 -mb-3"
                  onMouseEnter={openFeaturesMenu}
                  onMouseLeave={closeFeaturesMenuWithDelay}
                >
                  <button
                    type="button"
                    className="group relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-[18px] font-bold tracking-wide text-black/70 transition-all duration-200"
                    onClick={() => setFeaturesOpen((prev) => !prev)}
                    onFocus={openFeaturesMenu}
                    onBlur={closeFeaturesMenuWithDelay}
                  >
                    {link.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`transition-transform duration-200 ${featuresOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                    <span
                      className="absolute bottom-[6px] left-4 right-4 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                      style={{
                        background: "linear-gradient(90deg, #1e3a8a, #172554)",
                      }}
                    />
                  </button>

                  <div
                    className={`absolute top-full right-0 mt-2 w-72 rounded-2xl border border-black/10 bg-white shadow-[0_20px_45px_rgba(17,24,39,0.13)] p-2 transition-all duration-200 ${
                      featuresOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    onMouseEnter={openFeaturesMenu}
                    onMouseLeave={closeFeaturesMenuWithDelay}
                  >
                    {link.submenu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block rounded-xl px-3 py-2.5 hover:bg-[#ffa200]/10 transition-colors duration-200"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        <p className="text-sm font-semibold text-blue-950">{item.label}</p>
                        <p className="text-xs text-black/55 mt-0.5">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* ── CTA BUTTONS ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="relative overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(96,165,250,0.35)] group"
              style={{ background: theme.colors.accentGradient }}
            >
              <span
                className="absolute top-0 left-[-100%] w-full h-full group-hover:left-full transition-all duration-500"
                style={{
                  background: "linear-gradient(90deg, #1e3a8a, #172554)",
                }}
              />
             Ship now
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </a>
          </div>

          {/* ── HAMBURGER ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 rounded transition-all duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45 bg-[#ffa200]" : "bg-black"}`}
            />
            <span
              className={`block w-6 h-0.5 rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : "bg-black"}`}
            />
            <span
              className={`block w-6 h-0.5 rounded transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45 bg-[#ffa200]" : "bg-black"}`}
            />
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      <nav
        className={`fixed top-[72px] left-0 right-0 z-40 px-4 py-4 flex flex-col gap-1 border-b transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        style={{
          background: "rgba(255,255,255,0.98)",
          borderColor: theme.colors.border,
          backdropFilter: "blur(20px)",
        }}
      >
        {navLinks.map((link, i) => {
          if (!link.submenu) {
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium border-l-2 transition-all duration-200 hover:text-blue-950 hover:border-[#ffa200] hover:bg-[#ffa200]/7 ${
                  i === 0
                    ? "text-blue-950 border-[#ffa200] bg-[#ffa200]/7"
                    : "text-black/70 border-transparent"
                }`}
              >
                <span className="opacity-60">{link.icon}</span>
                {link.label}
              </Link>
            );
          }

          return (
            <div key={link.label} className="rounded-xl border border-black/10 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileFeaturesOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-medium text-black/75 bg-white hover:bg-[#ffa200]/7 transition-colors duration-200"
              >
                <span>{link.label}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`transition-transform duration-200 ${mobileFeaturesOpen ? "rotate-180" : ""}`}
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>

              <div className={`${mobileFeaturesOpen ? "block" : "hidden"} bg-white border-t border-black/10`}>
                {link.submenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileFeaturesOpen(false);
                    }}
                    className="block px-4 py-3 text-sm text-black/70 hover:text-blue-950 hover:bg-[#ffa200]/7 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <div className="h-px bg-black/10 my-2" />

        <div className="flex flex-col gap-2.5">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="flex justify-center items-center gap-2 py-3 rounded-xl text-[14px] font-semibold text-white hover:opacity-90 transition-all duration-200"
            style={{ background: theme.colors.accentGradient }}
          >
           Ship now
          </a>
        </div>
      </nav>
    </>
  );
}
