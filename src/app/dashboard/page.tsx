"use client";
import { useEffect, useState } from "react";
import NewsCard from "../components/NewCard";
import { NewsItem } from "../type/Newsitem";

export default function DashboardPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        // 👉 calling your Next.js API route (which calls FastAPI)
        const res = await fetch(`/api?region=Pakistan`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setNews(data);
        } else {
          console.error("Unexpected response:", data);
          setNews([]);
        }
      } catch (err) {
        console.error("Error fetching news:", err);
        setNews([]);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) return <p className="text-white text-center">Loading news...</p>;

  return (
    <main className="p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">📰 Latest News</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
        <NewsCard key={article.id || index} article={article} />
      ))}

      </div>
    </main>
  );
}











