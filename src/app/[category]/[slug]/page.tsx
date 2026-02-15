import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import {
  articles,
  categories,
  getArticleBySlug,
  getCategoryBySlug,
  SITE_NAME,
  SITE_URL,
} from "@/lib/data";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const article = getArticleBySlug(categorySlug, slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const url = `${SITE_URL}/${categorySlug}/${slug}`;

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.metaDescription,
      url,
      siteName: SITE_NAME,
      modifiedTime: article.lastUpdated,
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { category: categorySlug, slug } = await params;

  // Ensure this is actually a valid category (not a static page)
  const category = getCategoryBySlug(categorySlug);
  if (!category) {
    notFound();
  }

  const article = getArticleBySlug(categorySlug, slug);
  if (!article) {
    notFound();
  }

  return <ArticleLayout article={article} category={category} />;
}
