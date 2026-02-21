import type { MetadataRoute } from "next";
import { articles, categories, SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  // Get the latest article update date across all articles
  const latestArticleDate = articles.reduce((latest, article) => {
    const d = new Date(article.lastUpdated);
    return d > latest ? d : latest;
  }, new Date(0));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: latestArticleDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Category pages get high priority — they are key landing pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => {
    const catArticles = articles.filter((a) => a.category === cat.slug);
    const latestCatDate = catArticles.reduce((latest, article) => {
      const d = new Date(article.lastUpdated);
      return d > latest ? d : latest;
    }, new Date(0));
    return {
      url: `${SITE_URL}/${cat.slug}`,
      lastModified: latestCatDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    };
  });

  // Article pages are the money pages — highest content priority
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/${article.category}/${article.slug}`,
    lastModified: new Date(article.lastUpdated),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
