"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, SITE_NAME } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/90 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-bold text-maroon-600">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-maroon-600 hover:bg-maroon-50 rounded-md transition-colors duration-200"
            >
              Home
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-maroon-600 hover:bg-maroon-50 rounded-md transition-colors duration-200"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-maroon-600 hover:bg-maroon-50 rounded-md transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-maroon-600 hover:bg-maroon-50 rounded-md transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-paper-dark"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav id="mobile-nav" className="md:hidden border-t border-border bg-paper" aria-label="Mobile">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-maroon-600 hover:bg-maroon-50 rounded-md"
            >
              Home
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-maroon-600 hover:bg-maroon-50 rounded-md"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-maroon-600 hover:bg-maroon-50 rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-maroon-600 hover:bg-maroon-50 rounded-md"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
