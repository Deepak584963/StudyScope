import Link from "next/link";
import { categories, SITE_NAME } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-maroon-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="mb-8 flex justify-end">
          <a
            href="#main-content"
            className="text-xs text-maroon-300 hover:text-gold-300 transition-colors"
          >
            Back to top ↑
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gold-300 mb-3">{SITE_NAME}</h3>
            <p className="text-sm text-maroon-300 leading-relaxed">
              India&apos;s trusted career guidance platform for Arts students.
              Helping you discover the best career options, government jobs, and
              competitive exam strategies.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-gold-400 uppercase tracking-wide mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-sm text-maroon-300 hover:text-gold-300 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gold-400 uppercase tracking-wide mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-maroon-300 hover:text-gold-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-maroon-300 hover:text-gold-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-maroon-300 hover:text-gold-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-maroon-300 hover:text-gold-300 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Articles */}
          <div>
            <h4 className="text-sm font-semibold text-gold-400 uppercase tracking-wide mb-3">
              Popular Articles
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/careers/career-options-after-12th-arts"
                  className="text-sm text-maroon-300 hover:text-gold-300 transition-colors"
                >
                  Career Options After 12th Arts
                </Link>
              </li>
              <li>
                <Link
                  href="/government-jobs/government-jobs-for-arts-students"
                  className="text-sm text-maroon-300 hover:text-gold-300 transition-colors"
                >
                  Government Jobs for Arts Students
                </Link>
              </li>
              <li>
                <Link
                  href="/exams/upsc-exam-explained"
                  className="text-sm text-maroon-300 hover:text-gold-300 transition-colors"
                >
                  UPSC Exam Explained
                </Link>
              </li>
              <li>
                <Link
                  href="/comparisons/ba-vs-bcom-vs-bsc"
                  className="text-sm text-maroon-300 hover:text-gold-300 transition-colors"
                >
                  BA vs BCom vs BSc
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-maroon-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-maroon-400">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-maroon-400 hover:text-gold-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="text-xs text-maroon-400 hover:text-gold-300 transition-colors">
              Disclaimer
            </Link>
            <Link href="/contact" className="text-xs text-maroon-400 hover:text-gold-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
