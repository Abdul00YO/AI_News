// src/components/NewCard.tsx
"use client";
import { motion } from "framer-motion";
import { NewsItem } from "../type/Newsitem";
import { useRouter } from "next/navigation";

export default function NewsCard({ article }: { article: NewsItem }) {
  const router = useRouter();

  const handleSeeMoreClick = () => {
    // Navigate to a dedicated page for full news details
    router.push(`/news/${article.id}?region=${article.provinceName}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col justify-between h-full"
    >
      <div>
        <h2 className="text-xl font-bold text-white drop-shadow mb-2">{article.headline}</h2>
        {article.description && (
          <p className="text-gray-200 text-sm leading-relaxed">{article.description}</p>
        )}
      </div>
      <button
        onClick={handleSeeMoreClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors self-start"
      >
        See More
      </button>
    </motion.div>
  );
}