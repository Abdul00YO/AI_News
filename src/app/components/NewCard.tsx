"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { NewsItem } from "../type/Newsitem";


export default function NewsCard({ article }: { article: NewsItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
    >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={article.image_url}
          alt={article.headline}
          className="h-full w-full object-cover hover:scale-110 transition"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-white drop-shadow mb-2">
          {article.headline}
        </h2>
        <p className="text-gray-200 text-sm leading-relaxed mb-4">
          {article.description}
        </p>

        <Link
          href={`/news/${article.id}`}
          className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:opacity-90 transition"
        >
          📖 See More
        </Link>
      </div>
    </motion.div>
  );
}
