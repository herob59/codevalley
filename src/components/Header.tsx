"use client";
import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-700 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
        <img src='assets/hit.png' alt='hit' className=" mb-4" />
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About", "Product", "Service", "Contact"].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase()}`} className="hover:text-blue-400 transition">
              {item}
            </Link>
          ))}
        </nav>

        {/* Search Bar & Get Started Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <FiSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <button className="bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-black shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden`}>
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button className="text-white text-2xl" onClick={() => setMenuOpen(false)}>
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col gap-6 mt-6 px-6">
          {["Home", "About", "Product", "Service", "Contact"].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase()}`} className="text-lg hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>
              {item}
            </Link>
          ))}
        </nav>

        {/* Search Bar & Get Started Button in Mobile */}
        <div className="px-6 mt-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <FiSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <button className="w-full bg-blue-500 mt-4 px-6 py-2 rounded-full hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
