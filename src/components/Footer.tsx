import Link from "next/link";
import { categories, SITE_NAME } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-maroon-200 relative">
      {/* Back to top */}
      <div className="absolute -top-5 right-6 sm:right-10">
        <a
          href="#main-content"
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-maroon-800 border border-maroon-700 text-maroon-300 hover:text-gold-300 hover:border-gold-600 hover:bg-maroon-700 transition-all shadow-lg"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 text-maroon-900 text-lg font-bold shadow-sm">
                S
              </span>
              <span className="text-xl font-bold text-gold-300">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-maroon-300/80 leading-relaxed max-w-xs">
              India&apos;s trusted career guidance platform for Arts students.
              Helping you discover the best career options, government jobs, and
              competitive exam strategies.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-sm text-maroon-300/80 hover:text-gold-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-maroon-600 group-hover:bg-gold-400 transition-colors" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-maroon-300/80 hover:text-gold-300 transition-colors inline-flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-maroon-600 group-hover:bg-gold-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Articles */}
          <div>
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
              Popular Articles
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Career Options After 12th Arts", href: "/careers/career-options-after-12th-arts" },
                { label: "Government Jobs for Arts Students", href: "/government-jobs/government-jobs-for-arts-students" },
                { label: "UPSC Exam Explained", href: "/exams/upsc-exam-explained" },
                { label: "BA vs BCom vs BSc", href: "/comparisons/ba-vs-bcom-vs-bsc" },
              ].map((article) => (
                <li key={article.href}>
                  <Link href={article.href} className="text-sm text-maroon-300/80 hover:text-gold-300 transition-colors inline-flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-maroon-600 group-hover:bg-gold-400 transition-colors" />
                    {article.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-maroon-800/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-maroon-400/70">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" className="text-xs text-maroon-400/70 hover:text-gold-300 transition-colors">
                Privacy
              </Link>
              <Link href="/disclaimer" className="text-xs text-maroon-400/70 hover:text-gold-300 transition-colors">
                Disclaimer
              </Link>
              <Link href="/contact" className="text-xs text-maroon-400/70 hover:text-gold-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
