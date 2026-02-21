"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { categories, SITE_NAME } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const pathname = usePathname();

  const isArticlePage = pathname.split("/").length > 2 && pathname !== "/about" && pathname !== "/contact" && pathname !== "/privacy-policy" && pathname !== "/disclaimer";

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
    if (isArticlePage) {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    }
  }, [isArticlePage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navLinkClass = (href: string) =>
    `relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      isActive(href)
        ? "text-maroon-700 bg-maroon-50"
        : "text-gray-600 hover:text-maroon-600 hover:bg-maroon-50/60"
    }`;

  const mobileLinkClass = (href: string) =>
    `flex items-center gap-3 px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
      isActive(href)
        ? "text-maroon-700 bg-maroon-50 border-l-3 border-maroon-500"
        : "text-gray-600 hover:text-maroon-700 hover:bg-paper-warm"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-border/60"
          : "bg-paper/95 backdrop-blur border-b border-border shadow-sm"
      }`}
    >
      {/* Reading Progress Bar */}
      {isArticlePage && readProgress > 0 && (
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-maroon-500 via-maroon-400 to-gold-400 transition-all duration-150 ease-out z-10"
          style={{ width: `${readProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(readProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Reading progress"
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-700 text-white text-lg font-bold shadow-sm group-hover:shadow-md transition-shadow duration-200">
              S
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-maroon-700 to-maroon-500 bg-clip-text text-transparent">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
            <Link href="/" className={navLinkClass("/")}>Home</Link>
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/${cat.slug}`} className={navLinkClass(`/${cat.slug}`)}>
                {cat.name}
              </Link>
            ))}
            <Link href="/about" className={navLinkClass("/about")}>About</Link>
            <Link href="/contact" className={navLinkClass("/contact")}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 ${
              mobileOpen ? "bg-maroon-50 text-maroon-600" : "text-gray-500 hover:bg-paper-dark hover:text-gray-700"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <svg className="h-5 w-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-label="Mobile"
        role="navigation"
      >
        <div className="border-t border-border/60 bg-paper px-4 py-3 space-y-1">
          <Link href="/" className={mobileLinkClass("/")}>
            <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Home
          </Link>
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/${cat.slug}`} className={mobileLinkClass(`/${cat.slug}`)}>
              {cat.name}
            </Link>
          ))}
          <div className="pt-2 mt-2 border-t border-border/40">
            <Link href="/about" className={mobileLinkClass("/about")}>
              <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              About
            </Link>
            <Link href="/contact" className={mobileLinkClass("/contact")}>
              <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
