import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import FAQAccordion from "./FAQAccordion";
import type { Article, Category } from "@/lib/data";
import { getRelatedArticles, SITE_URL } from "@/lib/data";

interface ArticleLayoutProps {
  article: Article;
  category: Category;
}

const OFFICIAL_SOURCES_BY_CATEGORY: Record<string, { label: string; url: string }[]> = {
  careers: [
    { label: "National Career Service (NCS)", url: "https://www.ncs.gov.in/" },
    { label: "UGC (University Grants Commission)", url: "https://www.ugc.gov.in/" },
  ],
  "government-jobs": [
    { label: "UPSC Official Website", url: "https://upsc.gov.in/" },
    { label: "SSC Official Website", url: "https://ssc.gov.in/" },
    { label: "Employment News", url: "https://www.employmentnews.gov.in/" },
  ],
  exams: [
    { label: "NTA Official Website", url: "https://www.nta.ac.in/" },
    { label: "UPSC Official Website", url: "https://upsc.gov.in/" },
    { label: "IBPS Official Website", url: "https://www.ibps.in/" },
  ],
  comparisons: [
    { label: "AISHE (Higher Education Data)", url: "https://aishe.gov.in/" },
    { label: "UGC (University Grants Commission)", url: "https://www.ugc.gov.in/" },
  ],
  resources: [
    { label: "NCERT", url: "https://ncert.nic.in/" },
    { label: "National Digital Library of India", url: "https://ndl.iitkgp.ac.in/" },
  ],
};

export default function ArticleLayout({
  article,
  category,
}: ArticleLayoutProps) {
  const relatedArticles = getRelatedArticles(article.relatedSlugs);
  const articleUrl = `${SITE_URL}/${category.slug}/${article.slug}`;
  const plainTextContent = article.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const wordCount = plainTextContent.split(" ").length;
  const readingTimeMinutes = Math.max(3, Math.ceil(plainTextContent.split(" ").length / 220));
  const officialSources = OFFICIAL_SOURCES_BY_CATEGORY[category.slug] || [];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: category.name, href: `/${category.slug}` },
          { label: article.title },
        ]}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.metaDescription,
            dateModified: article.lastUpdated,
            datePublished: article.lastUpdated,
            url: articleUrl,
            author: {
              "@type": "Organization",
              name: "StudyScope",
            },
            publisher: {
              "@type": "Organization",
              name: "StudyScope",
            },
          }),
        }}
      />

      {/* Article Header */}
      <header className="mb-7 sm:mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Link
            href={`/${category.slug}`}
            className="inline-block px-3 py-1 text-xs font-semibold text-maroon-700 bg-maroon-50 rounded-full hover:bg-maroon-100 transition-colors"
          >
            {category.name}
          </Link>
          <span className="text-xs text-gray-400">By StudyScope Editorial Team</span>
          <span className="text-xs text-gray-400">
            Updated: {new Date(article.lastUpdated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </span>
          <span className="text-xs text-gray-400">• {readingTimeMinutes} min read</span>
          <span className="text-xs text-gray-400">• {wordCount.toLocaleString("en-IN")} words</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          {article.title}
        </h1>
        <p className="mt-3 text-lg text-gray-600 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="mt-5 p-4 rounded-lg border border-border bg-paper-warm">
          <p className="text-sm text-gray-700 leading-relaxed">
            Reviewed by <strong>StudyScope Editorial Team</strong>. We regularly update this guide based on official notifications and trusted academic/government sources.
          </p>
        </div>
      </header>

      {/* Ad Space - Top of Article (Auto Ads will fill this naturally) */}
      <div className="my-6" />

      {/* Article Content */}
      <article
        className="prose lg:prose-lg max-w-none bg-white border border-border rounded-xl p-4 sm:p-6 lg:p-7"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {officialSources.length > 0 && (
        <section className="mt-8 bg-paper-warm border border-border rounded-xl p-4 sm:p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Official Resources</h2>
          <p className="text-sm text-gray-600 mb-4">
            For the latest and most accurate updates, verify important details from these official sources.
          </p>
          <ul className="space-y-2">
            {officialSources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-maroon-700 hover:text-maroon-600 hover:underline transition-colors"
                >
                  {source.label}
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14h14" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Ad Space - Middle of Article */}
      <div className="my-8" />

      {/* FAQs */}
      {article.faqs.length > 0 && <FAQAccordion faqs={article.faqs} />}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/${related.category}/${related.slug}`}
                className="ui-hover-lift block p-4 sm:p-5 bg-paper-warm rounded-lg border border-border hover:border-gold-400 hover:shadow-md transition-all"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {related.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {related.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Ad Space - Bottom of Article */}
      <div className="my-8" />
    </div>
  );
}
