import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import FAQAccordion from "./FAQAccordion";
import type { Article, Category } from "@/lib/data";
import { getRelatedArticles, SITE_URL } from "@/lib/data";

interface ArticleLayoutProps {
  article: Article;
  category: Category;
}

export default function ArticleLayout({
  article,
  category,
}: ArticleLayoutProps) {
  const relatedArticles = getRelatedArticles(article.relatedSlugs);
  const articleUrl = `${SITE_URL}/${category.slug}/${article.slug}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
              name: "ArtsCareerGuide",
            },
            publisher: {
              "@type": "Organization",
              name: "ArtsCareerGuide",
            },
          }),
        }}
      />

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Link
            href={`/${category.slug}`}
            className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors"
          >
            {category.name}
          </Link>
          <span className="text-xs text-gray-400">
            Updated: {new Date(article.lastUpdated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          {article.title}
        </h1>
        <p className="mt-3 text-lg text-gray-600 leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      {/* Ad Space - Top of Article (Auto Ads will fill this naturally) */}
      <div className="my-6" />

      {/* Article Content */}
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

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
                className="block p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all"
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
