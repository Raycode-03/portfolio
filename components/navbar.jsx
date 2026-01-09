"use client";
import Image from "next/image";
import {react , useState} from "react";
import { Menu, X } from "lucide-react"; // icons for open/close

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-black/90 text-white h-20 flex justify-between items-center px-6 sm:px-10 opacity-95">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src={"/images/raycode.jpg"} 
          alt="Raycode Icon"
          width={40}
          height={40}
          className="rounded-full w-10 h-10"
        />
        <span className="text-xl font-semibold hidden sm:inline-block">RayCode</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 lg:gap-20 text-lg font-medium pr-2">
        <a href="#home">
          <li className="hover:text-gray-300 transition-colors cursor-pointer">Home</li>
        </a>
        <a href="#project">
          <li className="hover:text-gray-300 transition-colors cursor-pointer">Projects</li>
        </a>
        <a href="#contact">
          <li className="hover:text-gray-300 transition-colors cursor-pointer">Contacts</li>
        </a>
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/95 border-t border-gray-800 flex flex-col items-center py-6 space-y-6 text-lg font-medium md:hidden animate-slideDown">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-300 transition-colors"
          >
            Home
          </a>
          <a
            href="#project"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-300 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-300 transition-colors"
          >
            Contacts
          </a>
        </div>
      )}
    </nav>
  );
}
