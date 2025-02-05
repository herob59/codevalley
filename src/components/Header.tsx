'use client'
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src='assets/hit.png' alt='hit' />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-6 list-none">
          <li>
            <Link href="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setTimeout(() => setDropdownOpen(true), 300)}
            onMouseLeave={() => setTimeout(() => setDropdownOpen(false), 300)}
          >
            <button className="hover:text-gray-400">About</button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-700 shadow-lg rounded-md">
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-600">Our Story</Link>
                <Link href="/team" className="block px-4 py-2 hover:bg-gray-600">Team</Link>
                <Link href="/mission" className="block px-4 py-2 hover:bg-gray-600">Mission</Link>
              </div>
            )}
          </li>
          <li>
            <Link href="/product" className="hover:text-gray-400">Product</Link>
          </li>
          <li>
            <Link href="/service" className="hover:text-gray-400">Service</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Search Bar & Get Started */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none"
          />
          <Search className="absolute right-3 top-2 text-gray-400" size={18} />
        </div>
        <button className="bg-blue-600 px-4 py-2 rounded-full">Get Started</button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    <div className={`md:hidden fixed top-0 left-0 h-full w-64 bg-gray-900 p-4 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
      <button
        className="absolute top-4 right-4 focus:outline-none"
        onClick={() => setMenuOpen(false)}
      >
        <X size={24} className="text-white" />
      </button>
      <nav className="mt-10">
        <ul className="list-none">
          <li className="py-2 border-b border-gray-700">
            <Link href="/" className="block text-white">Home</Link>
          </li>
          <li className="py-2 border-b border-gray-700">
            <Link href="/about" className="block text-white">About</Link>
          </li>
          <li className="py-2 border-b border-gray-700">
            <Link href="/product" className="block text-white">Product</Link>
          </li>
          <li className="py-2 border-b border-gray-700">
            <Link href="/service" className="block text-white">Service</Link>
          </li>
          <li className="py-2 border-b border-gray-700">
            <Link href="/contact" className="block text-white">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
}
