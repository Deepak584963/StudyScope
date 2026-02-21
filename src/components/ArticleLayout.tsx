import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import FAQAccordion from "./FAQAccordion";
import TableOfContents from "./TableOfContents";
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

  // Inject id attributes into h2 tags for TOC anchor links
  const contentWithIds = article.content.replace(
    /<h2([^>]*)>(.*?)<\/h2>/gi,
    (_match, attrs, inner) => {
      const text = inner.replace(/<[^>]*>/g, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .substring(0, 60);
      return `<h2${attrs} id="${id}">${inner}</h2>`;
    }
  );

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
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": articleUrl,
            },
            wordCount: wordCount,
            articleSection: category.name,
            inLanguage: "en-IN",
            author: {
              "@type": "Organization",
              name: "StudyScope",
              url: "https://study-scope.vercel.app",
            },
            publisher: {
              "@type": "Organization",
              name: "StudyScope",
              url: "https://study-scope.vercel.app",
              logo: {
                "@type": "ImageObject",
                url: "https://study-scope.vercel.app/icon",
              },
            },
            image: {
              "@type": "ImageObject",
              url: "https://study-scope.vercel.app/opengraph-image",
            },
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://study-scope.vercel.app",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: category.name,
                item: `https://study-scope.vercel.app/${category.slug}`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      {/* FAQ Schema (JSON-LD) */}
      {article.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: article.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      {/* Article Header */}
      <header className="mb-8 sm:mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Link
            href={`/${category.slug}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-maroon-700 bg-maroon-50 rounded-full hover:bg-maroon-100 transition-colors uppercase tracking-wide"
          >
            {category.name}
          </Link>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {readingTimeMinutes} min read
          </span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-400">{wordCount.toLocaleString("en-IN")} words</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-[1.2]">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-gray-500 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-maroon-600 to-maroon-700 flex items-center justify-center text-white text-xs font-bold">S</div>
            <div>
              <span className="font-medium text-gray-700">StudyScope Editorial</span>
            </div>
          </div>
          <span className="hidden sm:block text-gray-300">|</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Updated: {new Date(article.lastUpdated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </span>
        </div>

        <div className="mt-6 p-4 rounded-xl border border-olive-200 bg-olive-50/50">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-olive-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <p className="text-sm text-olive-800 leading-relaxed">
              Reviewed by <strong className="text-olive-900">StudyScope Editorial Team</strong>. We regularly update this guide based on official notifications and trusted academic/government sources.
            </p>
          </div>
        </div>
      </header>

      {/* Ad Space - Top of Article (Auto Ads will fill this naturally) */}
      <div className="my-6" />

      {/* Table of Contents */}
      <TableOfContents htmlContent={article.content} />

      {/* Article Content */}
      <article
        className="prose lg:prose-lg max-w-none bg-white border border-border/60 rounded-2xl p-5 sm:p-7 lg:p-8 shadow-sm"
        dangerouslySetInnerHTML={{ __html: contentWithIds }}
      />

      {officialSources.length > 0 && (
        <section className="mt-8 bg-gradient-to-br from-paper-warm to-paper border border-border/60 rounded-2xl p-5 sm:p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-maroon-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-maroon-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Official Resources</h2>
              <p className="text-xs text-gray-500">Verify from these trusted sources</p>
            </div>
          </div>
          <ul className="space-y-2.5">
            {officialSources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-maroon-700 hover:text-maroon-600 hover:underline transition-colors group"
                >
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-maroon-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  {source.label}
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
        <section className="mt-12 pt-10 border-t border-border/60">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/${related.category}/${related.slug}`}
                className="ui-hover-lift group block p-5 bg-white rounded-2xl border border-border/60 hover:border-gold-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-base font-bold text-gray-900 group-hover:text-maroon-600 transition-colors mb-2 leading-snug">
                  {related.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                  {related.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-maroon-600">
                  Read article
                  <svg className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
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
