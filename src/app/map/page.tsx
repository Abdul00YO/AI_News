"use client";

import dynamic from "next/dynamic";
import { newsData } from "../data/mockData";

// Dynamically import RealNewsMap to prevent SSR issues
const LeafletMap = dynamic(() => import("../components/RealNewsMap"), { ssr: false });

export default function MainPage() {
  return (
    <main className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen p-8 text-white">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">
          🗺 Explore by Province
        </h2>
        {/* Use dynamically imported component */}
        <LeafletMap />
      </section>
    </main>
  );
}
