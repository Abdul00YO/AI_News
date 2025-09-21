"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NewsCard from "@/app/components/NewCard";
import { NewsItem } from "@/app/type/Newsitem";

export default function ProvinceNewsPage() {
  const params = useParams();
  const region = params?.province as string || "Pakistan"; // Correctly get 'province' from URL

  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProvinceTop3() {
      try {
        const res = await fetch(`/api?region=${region}&mode=titles`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setNews(data); // The API route now returns the correctly mapped array
        } else {
          console.log("Unexpected response:", data);
          setNews([]);
        }
      } catch (err) {
        console.log("Error fetching province top 3 news:", err);
        setNews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProvinceTop3();
  }, [region]);

  if (loading) return <p className="text-white text-center mt-12">Loading news...</p>;

  return (
    <main className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen text-white flex flex-col">
      <section className="px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-8 drop-shadow-lg text-center">
          📰 Top 3 News — {region}
        </h1>
        {news.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-200">
            No news available for {region}.
          </p>
        )}
      </section>
    </main>
  );
}