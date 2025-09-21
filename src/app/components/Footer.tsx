"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div className="space-y-3">
          <h3 className="text-2xl font-extrabold tracking-wide text-white">
            🌐 The Pakistan Times
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Delivering AI-powered, unbiased, and engaging news for the future of Pakistan.  
            Stay informed, stay connected ✨
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">🔗 Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-indigo-400 transition">
                🏠 Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-indigo-400 transition">
                ℹ️ About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-400 transition">
                📩 Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-indigo-400 transition">
                🔒 Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">📬 Subscribe</h3>
          <p className="text-sm mb-3 text-gray-400">
            Get fresh news straight to your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-l-xl text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white font-bold px-5 py-2 rounded-r-xl hover:bg-indigo-500 transition"
            >
              🚀 Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-5 text-sm border-t border-gray-700 text-gray-500">
        © {new Date().getFullYear()} The Pakistan Times. Made with ❤️ in Pakistan.
      </div>
    </footer>
  );
}
