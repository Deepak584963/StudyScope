import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  categories,
  getArticlesByCategory,
  getCategoryBySlug,
  SITE_NAME,
  SITE_URL,
} from "@/lib/data";

const categoryIcons: Record<string, string> = {
  careers: "🎯",
  "government-jobs": "🏛️",
  exams: "📝",
  comparisons: "⚖️",
  resources: "📚",
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: category.seoTitle,
    description: category.metaDescription,
    openGraph: {
      type: "website",
      title: category.seoTitle,
      description: category.metaDescription,
      url: `${SITE_URL}/${categorySlug}`,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: category.seoTitle,
      description: category.metaDescription,
    },
    alternates: {
      canonical: `${SITE_URL}/${categorySlug}`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(categorySlug);
  const latestUpdated = categoryArticles.length
    ? new Date(
        Math.max(...categoryArticles.map((article) => new Date(article.lastUpdated).getTime()))
      ).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
      <Breadcrumbs items={[{ label: category.name }]} />

      <header className="mb-8 sm:mb-10 rounded-2xl border border-border bg-paper-warm p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-50 text-maroon-700 text-xs font-semibold">
            <span aria-hidden="true">{categoryIcons[category.slug] || "📄"}</span>
            Category Overview
          </span>
          <span className="text-xs text-gray-500">{categoryArticles.length} articles</span>
          {latestUpdated && <span className="text-xs text-gray-500">• Last updated {latestUpdated}</span>}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          {category.name}
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </header>

      {categoryArticles.length === 0 ? (
        <div className="rounded-xl border border-border bg-white p-6 text-center">
          <p className="text-gray-500">
            No articles available in this category yet. Check back soon!
          </p>
          <Link
            href="/"
            className="inline-flex mt-4 items-center text-sm font-semibold text-maroon-700 hover:text-maroon-600 transition-colors"
          >
            Explore all categories
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {categoryArticles.map((article) => {
              const plainText = article.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
              const readingTimeMinutes = Math.max(3, Math.ceil(plainText.split(" ").length / 220));

              return (
            <Link
              key={article.slug}
              href={`/${categorySlug}/${article.slug}`}
              className="ui-hover-lift group block bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-border hover:shadow-lg hover:border-gold-400 transition-all"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-maroon-700 bg-maroon-50 rounded-full">
                  {category.name}
                </span>
                <span className="text-xs text-gray-400">{readingTimeMinutes} min read</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-maroon-600 transition-colors">
                {article.title}
              </h2>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-maroon-600 font-medium flex items-center">
                  Read Article
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(article.lastUpdated).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </span>
              </div>
            </Link>
              );
            })}
          </div>

          <section className="mt-10 border-t border-border pt-7">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Explore Other Categories</h2>
            <div className="flex flex-wrap gap-2">
              {categories
                .filter((item) => item.slug !== categorySlug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="ui-hover-lift inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white text-sm font-medium text-gray-700 hover:border-gold-400 hover:text-maroon-600 transition-all"
                  >
                    <span aria-hidden="true">{categoryIcons[item.slug] || "📄"}</span>
                    {item.name}
                  </Link>
                ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
