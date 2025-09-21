"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-red-500">
            The Pakistan Times
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/provinces/punjab" className="hover:text-red-500">
              Punjab
            </Link>
            <Link href="/provinces/sindh" className="hover:text-red-500">
              Sindh
            </Link>
            <Link href="/provinces/kpk" className="hover:text-red-500">
              KPK
            </Link>
            <Link href="/provinces/balochistan" className="hover:text-red-500">
              Balochistan
            </Link>
            <Link href="/provinces/gb" className="hover:text-red-500">
              Gilgit Baltistan
            </Link>
            <Link href="/provinces/ajk" className="hover:text-red-500">
              AJK
            </Link>
            <Link href="/provinces/islamabad" className="hover:text-red-500">
              Islamabad
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search news..."
              className="px-3 py-1 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2 space-y-2 shadow">
          <Link href="/provinces/punjab" className="block hover:text-red-500">
            Punjab
          </Link>
          <Link href="/provinces/sindh" className="block hover:text-red-500">
            Sindh
          </Link>
          <Link href="/provinces/kpk" className="block hover:text-red-500">
            KPK
          </Link>
          <Link href="/provinces/balochistan" className="block hover:text-red-500">
            Balochistan
          </Link>
          <Link href="/provinces/gb" className="block hover:text-red-500">
            Gilgit Baltistan
          </Link>
          <Link href="/provinces/ajk" className="block hover:text-red-500">
            AJK
          </Link>
          <Link href="/provinces/islamabad" className="block hover:text-red-500">
            Islamabad
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
