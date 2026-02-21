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

      <header className="mb-10 sm:mb-12 rounded-2xl border border-border/60 bg-gradient-to-br from-paper-warm to-paper overflow-hidden shadow-sm">
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-50 text-maroon-700 text-xs font-bold uppercase tracking-wider">
              <span aria-hidden="true">{categoryIcons[category.slug] || "📄"}</span>
              Category
            </span>
            <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full font-medium">{categoryArticles.length} articles</span>
            {latestUpdated && <span className="text-xs text-gray-400">Updated {latestUpdated}</span>}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {category.name}
          </h1>
          <p className="mt-3 text-lg text-gray-500 max-w-3xl leading-relaxed">
            {category.description}
          </p>
        </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {categoryArticles.map((article, i) => {
              const plainText = article.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
              const readingTimeMinutes = Math.max(3, Math.ceil(plainText.split(" ").length / 220));

              return (
            <Link
              key={article.slug}
              href={`/${categorySlug}/${article.slug}`}
              className={`ui-hover-lift card-shine group block bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl hover:border-gold-300 transition-all animate-fade-in-up stagger-${Math.min(i + 1, 6)}`}
            >
              <div className="h-1 bg-gradient-to-r from-maroon-500 via-maroon-400 to-gold-400" />
              <div className="p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block px-2.5 py-0.5 text-xs font-bold text-maroon-700 bg-maroon-50 rounded-full">
                    {category.name}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {readingTimeMinutes} min read
                  </span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-maroon-600 transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="mt-2.5 text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-maroon-600 font-semibold flex items-center group-hover:gap-1.5 transition-all">
                    Read Article
                    <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(article.lastUpdated).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                </div>
              </div>
            </Link>
              );
            })}
          </div>

          <section className="mt-12 border-t border-border/60 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Explore Other Categories</h2>
            <div className="flex flex-wrap gap-2.5">
              {categories
                .filter((item) => item.slug !== categorySlug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="ui-hover-lift inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-white text-sm font-medium text-gray-700 hover:border-gold-400 hover:text-maroon-600 hover:shadow-md transition-all"
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
