"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 sm:px-10 py-4">
        <div className="text-2xl font-bold text-blue-600">Algorooms</div>

       
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/feature">Features</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
          <li><Link href="/Plan">Pricing</Link></li>
        </ul>

       
        <div className="hidden md:block">
          <Link href="/get-started">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>

       
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/Explore" onClick={() => setIsOpen(false)}>Features</Link></li>
            <li><Link href="/Contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link href="/Plan" onClick={() => setIsOpen(false)}>Pricing</Link></li>
            <li>
              <Link href="/get-started" onClick={() => setIsOpen(false)}>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                  Get Started
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}






