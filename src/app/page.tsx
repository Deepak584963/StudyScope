import Link from "next/link";
import {
  categories,
  articles,
  SITE_NAME,
  SITE_DESCRIPTION,
} from "@/lib/data";

const categoryIcons: Record<string, string> = {
  careers: "🎯",
  "government-jobs": "🏛️",
  exams: "📝",
  comparisons: "⚖️",
  resources: "📚",
};

const quickStartPaths = [
  {
    title: "After 12th Arts",
    description: "Pick the right course, exam path, or job track after school.",
    href: "/careers/career-options-after-12th-arts",
  },
  {
    title: "After BA",
    description: "Compare higher studies, government jobs, and private career options.",
    href: "/careers/career-options-after-ba",
  },
  {
    title: "After MA",
    description: "Explore academic, research, and high-growth career opportunities.",
    href: "/careers/career-options-after-ma",
  },
];

export default function HomePage() {
  const latestArticles = articles.slice(0, 6);
  const totalArticles = articles.length;
  const totalCategories = categories.length;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "StudyScope",
    url: "https://study-scope.vercel.app",
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://study-scope.vercel.app/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "StudyScope",
      url: "https://study-scope.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://study-scope.vercel.app/icon",
      },
      sameAs: [],
    },
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "StudyScope",
    url: "https://study-scope.vercel.app",
    description: SITE_DESCRIPTION,
    logo: "https://study-scope.vercel.app/icon",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Arts Career Guidance",
      "Government Jobs India",
      "Competitive Exams",
      "Higher Education India",
      "UPSC Preparation",
      "SSC Exams",
      "Banking Exams",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-maroon-600 via-maroon-700 to-maroon-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-maroon-50 mb-4">
              Trusted guidance for Arts students across India
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight !text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Best Career &amp; Government Job Guidance for Arts Students
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-maroon-50 leading-relaxed">
              Helping Indian Arts students (12th, BA, MA) discover career
              options, government jobs, competitive exams, and study resources
              for a successful future.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/careers"
                className="ui-hover-lift inline-flex items-center px-6 py-3 bg-gold-500 text-maroon-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors shadow-lg"
              >
                Explore Careers
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/government-jobs"
                className="ui-hover-lift inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Government Jobs
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-maroon-50">
                {totalArticles}+ Practical Articles
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-maroon-50">
                {totalCategories} Career Categories
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-maroon-50">
                Updated for Indian Students
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="section-heading text-2xl sm:text-3xl font-bold text-gray-900">
              Start Your Journey
            </h2>
            <p className="mt-2 text-gray-600">
              Choose your current stage and get step-by-step guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {quickStartPaths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="ui-hover-lift group rounded-xl border border-border bg-white p-5 sm:p-6 shadow-sm hover:border-gold-400 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-maroon-600 transition-colors">
                  {path.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {path.description}
                </p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-maroon-600">
                  View roadmap
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-paper-warm py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-9 sm:mb-12">
            <h2 className="section-heading text-2xl sm:text-3xl font-bold text-gray-900">
              Explore by Category
            </h2>
            <p className="mt-2 text-gray-600">
              Find the information that matters most to your Arts career journey
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="ui-hover-lift group block bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-border hover:shadow-lg hover:border-gold-400 transition-all"
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="text-3xl leading-none">
                    {categoryIcons[cat.slug] || "📄"}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-maroon-600 transition-colors leading-tight">
                    {cat.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {cat.description}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-maroon-600">
                  Explore category
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-9 sm:mb-12">
            <h2 className="section-heading text-2xl sm:text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <p className="mt-2 text-gray-600">
              Comprehensive guides to help Arts students make informed decisions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {latestArticles.map((article) => {
              const cat = categories.find((c) => c.slug === article.category);
              return (
                <Link
                  key={article.slug}
                  href={`/${article.category}/${article.slug}`}
                  className="ui-hover-lift group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="p-5 sm:p-6">
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-maroon-700 bg-maroon-50 rounded-full mb-3">
                      {cat?.name || article.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-maroon-600 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        Updated {new Date(article.lastUpdated).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-maroon-600 font-medium">
                      Read More
                      <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/careers"
              className="inline-flex items-center text-sm font-semibold text-maroon-700 hover:text-maroon-600 transition-colors"
            >
              Explore all guides
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Linking / Popular Guides */}
      <section className="bg-paper-warm py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">
            Popular Career Guides
          </h2>
          <p className="text-center text-gray-600 mb-9 sm:mb-12">
            Start with these most-read guides to plan your next academic or job step.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              {
                title: "Career Options After 12th Arts",
                href: "/careers/career-options-after-12th-arts",
                desc: "Explore all career paths available after completing 12th in Arts stream",
              },
              {
                title: "Government Jobs for Arts Students",
                href: "/government-jobs/government-jobs-for-arts-students",
                desc: "Complete guide to government job opportunities for Arts graduates",
              },
              {
                title: "UPSC Exam Explained for Beginners",
                href: "/exams/upsc-exam-explained",
                desc: "Everything you need to know about UPSC Civil Services exam",
              },
              {
                title: "BA vs BCom vs BSc Comparison",
                href: "/comparisons/ba-vs-bcom-vs-bsc",
                desc: "Honest comparison to help you choose the right degree",
              },
              {
                title: "SSC Jobs After BA",
                href: "/government-jobs/ssc-jobs-after-ba",
                desc: "SSC CGL, CHSL, and MTS opportunities for BA graduates",
              },
              {
                title: "Study Tips for Arts Students",
                href: "/resources/study-tips-for-arts-students",
                desc: "Proven techniques to improve your exam scores",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="ui-hover-lift flex items-start gap-3 p-4 bg-white rounded-lg border border-border hover:border-gold-400 hover:shadow-md transition-all"
              >
                <div className="shrink-0 mt-1">
                  <svg className="h-5 w-5 text-olive-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About {SITE_NAME}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {SITE_DESCRIPTION}
          </p>
          <Link
            href="/about"
            className="inline-block mt-5 text-maroon-600 font-medium hover:underline transition-colors"
          >
            Learn more about us →
          </Link>

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <Link
              href="/contact"
              className="ui-hover-lift inline-flex items-center px-5 py-2.5 rounded-lg border border-maroon-200 text-maroon-700 hover:bg-maroon-50 transition-colors text-sm font-medium"
            >
              Get Career Guidance
            </Link>
            <Link
              href="/government-jobs"
              className="ui-hover-lift inline-flex items-center px-5 py-2.5 rounded-lg border border-border text-gray-700 hover:border-gold-400 hover:text-maroon-600 transition-colors text-sm font-medium"
            >
              Browse Government Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
