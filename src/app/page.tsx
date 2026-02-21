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
    inLanguage: "en-IN",
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

  // ItemList schema — helps Google understand the page structure and index listed articles
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latest Career Guides for Arts Students",
    description: "Most recent guides and articles for Arts students in India",
    numberOfItems: latestArticles.length,
    itemListElement: latestArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      url: `https://study-scope.vercel.app/${article.category}/${article.slug}`,
    })),
  };

  // BreadcrumbList for homepage
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://study-scope.vercel.app",
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-700 via-maroon-800 to-maroon-900 text-white">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-maroon-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-maroon-100 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
              Trusted guidance for Arts students across India
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.15] !text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Best Career &amp; Government Job Guidance for{" "}
              <span className="relative">
                <span className="relative z-10">Arts Students</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-gold-400/30 -skew-x-3 rounded" />
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-maroon-100/90 leading-relaxed max-w-2xl mx-auto">
              Helping Indian Arts students (12th, BA, MA) discover career
              options, government jobs, competitive exams, and study resources
              for a successful future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/careers"
                className="ui-hover-lift inline-flex items-center px-7 py-3.5 bg-gold-500 text-maroon-900 font-bold rounded-xl hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 text-base"
              >
                Explore Careers
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/government-jobs"
                className="ui-hover-lift inline-flex items-center px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all text-base backdrop-blur-sm"
              >
                Government Jobs
              </Link>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{totalArticles}+</div>
              <div className="text-xs sm:text-sm text-maroon-200 mt-0.5">Guides</div>
            </div>
            <div className="text-center border-x border-white/15">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{totalCategories}</div>
              <div className="text-xs sm:text-sm text-maroon-200 mt-0.5">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
              <div className="text-xs sm:text-sm text-maroon-200 mt-0.5">Free Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-maroon-700 bg-maroon-50 rounded-full uppercase tracking-wider mb-3">
              Quick Start
            </span>
            <h2 className="section-heading text-2xl sm:text-3xl font-bold text-gray-900">
              Start Your Journey
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Choose your current stage and get step-by-step guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {quickStartPaths.map((path, i) => (
              <Link
                key={path.href}
                href={path.href}
                className={`ui-hover-lift card-shine group rounded-2xl border bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all animate-fade-in-up stagger-${i + 1} ${
                  i === 1
                    ? "border-maroon-200 ring-1 ring-maroon-100 relative"
                    : "border-border hover:border-gold-400"
                }`}
              >
                {i === 1 && (
                  <span className="absolute -top-3 left-6 px-3 py-0.5 bg-maroon-600 text-white text-xs font-bold rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-maroon-50 to-maroon-100 flex items-center justify-center mb-4">
                  <span className="text-lg">{["🎓", "📘", "🎯"][i]}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-maroon-600 transition-colors">
                  {path.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {path.description}
                </p>
                <div className="mt-5 inline-flex items-center text-sm font-semibold text-maroon-600 group-hover:gap-2 transition-all">
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
      <section className="bg-paper-warm py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-olive-700 bg-olive-50 rounded-full uppercase tracking-wider mb-3">
              Categories
            </span>
            <h2 className="section-heading text-2xl sm:text-3xl font-bold text-gray-900">
              Explore by Category
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Find the information that matters most to your Arts career journey
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {categories.map((cat, i) => {
              const catArticleCount = articles.filter(a => a.category === cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className={`ui-hover-lift card-shine group block bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl hover:border-gold-300 transition-all animate-fade-in-up stagger-${i + 1}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-paper-warm to-paper-dark flex items-center justify-center text-2xl shadow-inner">
                      {categoryIcons[cat.slug] || "📄"}
                    </div>
                    <span className="px-2.5 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
                      {catArticleCount} articles
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-maroon-600 transition-colors leading-tight">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="mt-4 inline-flex items-center text-sm font-semibold text-maroon-600 group-hover:gap-2 transition-all">
                    Explore category
                    <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-gold-700 bg-gold-50 rounded-full uppercase tracking-wider mb-3">
              Latest
            </span>
            <h2 className="section-heading text-2xl sm:text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Comprehensive guides to help Arts students make informed decisions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {latestArticles.map((article, i) => {
              const cat = categories.find((c) => c.slug === article.category);
              const wordCount = article.content.split(/\s+/).length;
              const readTime = Math.max(1, Math.ceil(wordCount / 200));
              return (
                <Link
                  key={article.slug}
                  href={`/${article.category}/${article.slug}`}
                  className={`ui-hover-lift card-shine group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gold-300 transition-all animate-fade-in-up stagger-${i + 1}`}
                >
                  {/* Top gradient accent bar */}
                  <div className="h-1 bg-gradient-to-r from-maroon-500 via-maroon-400 to-gold-400" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-maroon-700 bg-maroon-50 rounded-full">
                        {cat?.name || article.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {readTime} min read
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-maroon-600 transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-gray-500 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {new Date(article.lastUpdated).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span className="inline-flex items-center text-sm font-semibold text-maroon-600 group-hover:gap-1.5 transition-all">
                        Read
                        <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/careers"
              className="inline-flex items-center px-6 py-3 text-sm font-bold text-maroon-700 bg-maroon-50 hover:bg-maroon-100 rounded-xl transition-colors"
            >
              Explore all guides
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Linking / Popular Guides */}
      <section className="bg-paper-warm py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-olive-700 bg-olive-50 rounded-full uppercase tracking-wider mb-3">
              Trending
            </span>
            <h2 className="section-heading text-2xl sm:text-3xl font-bold text-gray-900">
              Popular Career Guides
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Start with these most-read guides to plan your next academic or job step.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Career Options After 12th Arts",
                href: "/careers/career-options-after-12th-arts",
                desc: "Explore all career paths available after completing 12th in Arts stream",
                icon: "🎓",
              },
              {
                title: "Government Jobs for Arts Students",
                href: "/government-jobs/government-jobs-for-arts-students",
                desc: "Complete guide to government job opportunities for Arts graduates",
                icon: "🏛️",
              },
              {
                title: "UPSC Exam Explained for Beginners",
                href: "/exams/upsc-exam-explained",
                desc: "Everything you need to know about UPSC Civil Services exam",
                icon: "📝",
              },
              {
                title: "BA vs BCom vs BSc Comparison",
                href: "/comparisons/ba-vs-bcom-vs-bsc",
                desc: "Honest comparison to help you choose the right degree",
                icon: "⚖️",
              },
              {
                title: "SSC Jobs After BA",
                href: "/government-jobs/ssc-jobs-after-ba",
                desc: "SSC CGL, CHSL, and MTS opportunities for BA graduates",
                icon: "📋",
              },
              {
                title: "Study Tips for Arts Students",
                href: "/resources/study-tips-for-arts-students",
                desc: "Proven techniques to improve your exam scores",
                icon: "📚",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="ui-hover-lift group flex items-start gap-4 p-5 bg-white rounded-2xl border border-border hover:border-gold-300 hover:shadow-lg transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-paper-warm to-paper-dark flex items-center justify-center text-lg shadow-inner">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900 group-hover:text-maroon-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
                <svg className="shrink-0 ml-auto mt-1 h-5 w-5 text-gray-300 group-hover:text-maroon-500 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / CTA Section */}
      <section className="relative py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-50/50 via-transparent to-gold-50/50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-maroon-600 to-maroon-700 text-white text-2xl font-bold shadow-lg mb-5">
            S
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            About {SITE_NAME}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {SITE_DESCRIPTION}
          </p>
          <Link
            href="/about"
            className="inline-block mt-4 text-maroon-600 font-semibold hover:underline transition-colors"
          >
            Learn more about us →
          </Link>

          <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="ui-hover-lift inline-flex items-center px-6 py-3 rounded-xl bg-maroon-600 text-white font-semibold hover:bg-maroon-700 transition-colors shadow-md shadow-maroon-600/20"
            >
              Get Career Guidance
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/government-jobs"
              className="ui-hover-lift inline-flex items-center px-6 py-3 rounded-xl border-2 border-border text-gray-700 font-semibold hover:border-gold-400 hover:text-maroon-600 transition-all"
            >
              Browse Government Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
