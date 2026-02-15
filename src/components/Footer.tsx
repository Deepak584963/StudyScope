import Link from "next/link";
import { categories, SITE_NAME } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">{SITE_NAME}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              India&apos;s trusted career guidance platform for Arts students.
              Helping you discover the best career options, government jobs, and
              competitive exam strategies.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Articles */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
              Popular Articles
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/careers/career-options-after-12th-arts"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Career Options After 12th Arts
                </Link>
              </li>
              <li>
                <Link
                  href="/government-jobs/government-jobs-for-arts-students"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Government Jobs for Arts Students
                </Link>
              </li>
              <li>
                <Link
                  href="/exams/upsc-exam-explained"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  UPSC Exam Explained
                </Link>
              </li>
              <li>
                <Link
                  href="/comparisons/ba-vs-bcom-vs-bsc"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  BA vs BCom vs BSc
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Disclaimer
            </Link>
            <Link href="/contact" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
