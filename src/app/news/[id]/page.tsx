// src/app/news/[id]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { NewsItem } from "@/app/type/Newsitem";


export default function NewsDetailsPage() {
  
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params?.id;
  const region = searchParams.get("region") || "Pakistan";

  const [article, setArticle] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNewsDetails() {
      if (!id || !region) {
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(`/api?region=${region}&mode=details`);
        const data = await res.json();
        
        // Find the specific article by its ID. Use loose comparison with '=='
        const foundArticle = data.find((item: any) => item.id == id);

        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          console.error("Article not found:", id);
        }
      } catch (err) {
        console.error("Error fetching news details:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNewsDetails();
  }, [id, region]);

  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <p>Loading full article...</p>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <p>Article not found. Please go back to the previous page.</p>
      </main>
    );
  }

  return (
    <main className="p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen text-white">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
          {article.headline || article.title}
        </h1>
        {article.img && (
          <img 
            src={article.img} 
            alt={article.headline} 
            className="w-full h-auto rounded-xl shadow-lg my-6" 
          />
        )}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg">
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            <strong className="text-white">Summary:</strong> {article.brief_summary}
          </p>
          <p className="text-lg leading-relaxed mt-4 whitespace-pre-wrap">
            {article.full_content || article.description}
          </p>
        </div>
        
        <div className="mt-8 text-sm text-gray-400 border-t border-gray-600 pt-4">
          <p><strong>Province:</strong> {article.provinceName}</p>
          {article.published && (
            <p><strong>Published:</strong> {new Date(article.published).toLocaleDateString()}</p>
          )}
        </div>
        
        {article.link && (
          <a 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-8 inline-block text-blue-300 hover:text-blue-200 hover:underline transition-colors font-semibold"
          >
            Read full article at source →
          </a>
        )}
      </div>
    </main>
  );
}