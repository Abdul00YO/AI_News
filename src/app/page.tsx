"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white min-h-screen flex flex-col items-center justify-center px-6">
      
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
          🌐 AI News Intelligence
        </h1>
        <p className="text-lg text-gray-100 mb-8 leading-relaxed">
          Get unbiased, AI-powered global news insights with real-time bias analysis, 
          forecast trends, interactive maps, and conversational AI.  
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                {/* Dashboard Card */}
        

                  {/* Map Card */}
        <Link href="/map" className="group relative w-64 h-40">
          <div className="relative w-full h-full">
            <Image
              src="/pak.jpeg" // small image for map
              alt="News Map"
              fill
              className="object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform"
            />
            <Button
              size="lg"
              className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-white hover:bg-gray-800"
            >
              🗺️ Explore News Map
            </Button>
          </div>
        </Link>

        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">📊 Bias Analysis</h3>
          <p className="text-sm text-gray-200">Compare how global outlets frame the same story.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">🗺️ News Map</h3>
          <p className="text-sm text-gray-200">Explore breaking stories across cities worldwide.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">📈 Forecasts</h3>
          <p className="text-sm text-gray-200">AI predicts short-term impacts & ripple effects.</p>
        </div>
      </section>
    </main>
  );
}
