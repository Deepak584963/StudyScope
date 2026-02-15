import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      <h1 className="text-6xl font-extrabold text-maroon-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist or has been moved. Browse
        our popular sections below.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="ui-hover-lift inline-flex items-center px-6 py-3 bg-maroon-600 text-white font-semibold rounded-lg hover:bg-maroon-700 transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/careers"
          className="ui-hover-lift inline-flex items-center px-6 py-3 border border-border text-gray-700 font-semibold rounded-lg hover:border-gold-400 hover:text-maroon-600 transition-colors"
        >
          Browse Careers
        </Link>
      </div>
    </div>
  );
}
