import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-maroon-50 mb-6">
        <span className="text-5xl font-extrabold text-gradient">404</span>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        Page Not Found
      </h1>
      <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
        The page you are looking for does not exist or has been moved. Browse
        our popular sections below.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="ui-hover-lift inline-flex items-center px-7 py-3.5 bg-maroon-600 text-white font-bold rounded-xl hover:bg-maroon-700 transition-colors shadow-md shadow-maroon-600/20"
        >
          <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Go Home
        </Link>
        <Link
          href="/careers"
          className="ui-hover-lift inline-flex items-center px-7 py-3.5 border-2 border-border text-gray-700 font-semibold rounded-xl hover:border-gold-400 hover:text-maroon-600 transition-all"
        >
          Browse Careers
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-border/60">
        <p className="text-sm text-gray-400 mb-4">Quick links</p>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { label: "Careers", href: "/careers" },
            { label: "Government Jobs", href: "/government-jobs" },
            { label: "Exams", href: "/exams" },
            { label: "Comparisons", href: "/comparisons" },
            { label: "Resources", href: "/resources" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-paper-warm rounded-xl border border-border/60 hover:border-gold-400 hover:text-maroon-600 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
