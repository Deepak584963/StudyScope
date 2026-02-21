import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import {
  articles,
  categories,
  getArticleBySlug,
  getArticlesByCategory,
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
  const category = getCategoryBySlug(categorySlug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const url = `${SITE_URL}/${categorySlug}/${slug}`;
  const plainText = article.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const wordCount = plainText.split(" ").length;
  const readingTime = Math.max(3, Math.ceil(wordCount / 220));

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
      publishedTime: article.lastUpdated,
      section: category?.name || categorySlug,
      authors: [`${SITE_URL}/about`],
      tags: [
        category?.name || categorySlug,
        "Arts Students",
        "India",
        article.title.split(" ").slice(0, 4).join(" "),
      ],
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
      images: [`${SITE_URL}/opengraph-image`],
    },
    alternates: {
      canonical: url,
    },
    other: {
      "article:reading_time": `${readingTime} minutes`,
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

  // Get all articles in same category for next/prev navigation
  const categoryArticles = getArticlesByCategory(categorySlug);
  const currentIndex = categoryArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? categoryArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < categoryArticles.length - 1 ? categoryArticles[currentIndex + 1] : null;

  // Get "more in this category" articles (exclude current + related)
  const relatedSlugsSet = new Set(article.relatedSlugs);
  const moreCategoryArticles = categoryArticles
    .filter((a) => a.slug !== slug && !relatedSlugsSet.has(`${a.category}/${a.slug}`))
    .slice(0, 4);

  return (
    <ArticleLayout
      article={article}
      category={category}
      prevArticle={prevArticle}
      nextArticle={nextArticle}
      moreCategoryArticles={moreCategoryArticles}
    />
  );
}
