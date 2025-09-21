// "use client";
// import { useParams } from "next/navigation";
// import { newsData } from "@/app/data/mockData";
// import NewsCard from "@/app/components/NewCard"; 

// export default function NewsArticlePage() {
//   const { id } = useParams();
//   const article = newsData.find((item) => item.id === id);

//   if (!article) {
//     return (
//       <main className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen flex items-center justify-center text-white">
//         <h1 className="text-3xl font-bold">❌ Article Not Found</h1>
//       </main>
//     );
//   }

//   // Related News (same province, exclude current)
//   const relatedNews = newsData.filter(
//     (item) => item.province === article.province && item.id !== article.id
//   );

//   return (
//     <main className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen text-white">
      

//       {/* Banner */}
//       <div className="w-full h-72 md:h-96 overflow-hidden relative">
//         <img
//           src={article.image}
//           alt={article.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-center drop-shadow-lg">
//             {article.title}
//           </h1>
//         </div>
//       </div>

//       {/* Article Content */}
//       <div className="max-w-4xl mx-auto px-6 py-10">
//         <span className="inline-block bg-white/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
//           📍 {article.province}
//         </span>

//         <p className="text-lg leading-relaxed text-gray-100 whitespace-pre-line">
//           {article.content}
//         </p>
//       </div>

//       {/* Related News Section */}
//       {relatedNews.length > 0 && (
//         <section className="max-w-6xl mx-auto px-6 py-10">
//           <h2 className="text-2xl font-bold mb-6">🔗 Related News</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {relatedNews.map((item) => (
//               <NewsCard key={item.id} article={item} />
//             ))}
//           </div>
//         </section>
//       )}

      
//     </main>
//   );
// }




"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NewsCard from "@/app/components/NewCard";
import { NewsItem } from "@/app/type/Newsitem";

export default function NewsArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        setLoading(true);

        // Fetch article details by id
        const res = await fetch(`/api?id=${id}`);
        const data = await res.json();

        if (data) setArticle(data);
        else setArticle(null);

        // Fetch related news by province
        if (data?.provinceName) {
          const relatedRes = await fetch(
            `/api/news?region=${data.provinceName}`
          );
          const relatedData = await relatedRes.json();
          if (Array.isArray(relatedData)) {
            setRelatedNews(relatedData.filter((item) => item.id !== data.id));
          }
        }
      } catch (err) {
        console.error("Error fetching article:", err);
        setArticle(null);
        setRelatedNews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  if (loading)
    return (
      <p className="text-white text-center mt-12">Loading article...</p>
    );

  if (!article)
    return (
      <main className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">❌ Article Not Found</h1>
      </main>
    );

  return (
    <main className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen text-white">
      {/* Banner */}
      <div className="w-full h-72 md:h-96 overflow-hidden relative">
        <img
          src={article.image_url}
          alt={article.headline}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center drop-shadow-lg">
            {article.headline}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <span className="inline-block bg-white/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          📍 {article.provinceName}
        </span>

        <p className="text-lg leading-relaxed text-gray-100 whitespace-pre-line">
          {article.details}
        </p>
      </div>

      {/* Related News Section */}
      {relatedNews.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-6">🔗 Related News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedNews.map((item) => (
              <NewsCard key={item.id} article={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
