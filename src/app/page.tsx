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

export default function HomePage() {
  const latestArticles = articles.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Best Career &amp; Government Job Guidance for Arts Students
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-indigo-100 leading-relaxed">
              Helping Indian Arts students (12th, BA, MA) discover career
              options, government jobs, competitive exams, and study resources
              for a successful future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Explore Careers
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/government-jobs"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Government Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Explore by Category
            </h2>
            <p className="mt-2 text-gray-600">
              Find the information that matters most to your Arts career journey
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group block bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-indigo-300 transition-all"
              >
                <div className="text-3xl mb-3">
                  {categoryIcons[cat.slug] || "📄"}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <p className="mt-2 text-gray-600">
              Comprehensive guides to help Arts students make informed decisions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => {
              const cat = categories.find((c) => c.slug === article.category);
              return (
                <Link
                  key={article.slug}
                  href={`/${article.category}/${article.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="p-6">
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-full mb-3">
                      {cat?.name || article.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-indigo-600 font-medium">
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
        </div>
      </section>

      {/* Internal Linking / Popular Guides */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Popular Career Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="shrink-0 mt-1">
                  <svg className="h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About {SITE_NAME}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {SITE_DESCRIPTION}
          </p>
          <Link
            href="/about"
            className="inline-block mt-5 text-indigo-600 font-medium hover:underline"
          >
            Learn more about us →
          </Link>
        </div>
      </section>
    </>
  );
}
