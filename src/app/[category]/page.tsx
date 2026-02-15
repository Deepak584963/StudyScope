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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={[{ label: category.name }]} />

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          {category.name}
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </header>

      {categoryArticles.length === 0 ? (
        <p className="text-gray-500">
          No articles available in this category yet. Check back soon!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoryArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/${categorySlug}/${article.slug}`}
              className="group block bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-indigo-300 transition-all"
            >
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {article.title}
              </h2>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-indigo-600 font-medium flex items-center">
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
          ))}
        </div>
      )}
    </div>
  );
}
