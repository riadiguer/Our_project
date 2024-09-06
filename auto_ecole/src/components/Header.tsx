'use client'; // Mark this component as a Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const pathname = usePathname(); // Get the current route
  const [isOpen, setIsOpen] = useState(false); // Sidebar open state

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-500 text-white p-4 fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Auto École</h1>
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className="hidden md:flex">
          <Link
            href="/"
            className={`mr-6 text-lg ${pathname === '/' ? 'text-black font-bold' : 'text-white'} hover:text-black hover:scale-110 hover:font-bold transition-transform duration-500`}
          >
            Accueil
          </Link>
          <Link
            href="/courses"
            className={`mr-6 text-lg ${pathname === '/courses' ? 'text-black font-bold' : 'text-white'} hover:text-black hover:scale-110 hover:font-bold transition-transform duration-500`}
          >
            Cours
          </Link>
          <Link
            href="/instructors"
            className={`mr-6 text-lg ${pathname === '/instructors' ? 'text-black font-bold' : 'text-white'} hover:text-black hover:scale-110 hover:font-bold transition-transform duration-500`}
          >
            Instructeurs
          </Link>
          <Link
            href="/contact"
            className={`text-lg ${pathname === '/contact' ? 'text-black font-bold' : 'text-white'} hover:text-black hover:scale-110 hover:font-bold transition-transform duration-500`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-500 p-8 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <button className="absolute top-4 right-4" onClick={toggleSidebar}>
          <FaTimes size={24} />
        </button>
        <nav className="flex flex-col space-y-4 mt-8">
          <Link
            href="/"
            className={`text-lg ${pathname === '/' ? 'text-black font-bold' : 'text-white'} hover:text-black transition-colors duration-300`}
            onClick={toggleSidebar} // Close sidebar when link is clicked
          >
            Accueil
          </Link>
          <Link
            href="/courses"
            className={`text-lg ${pathname === '/courses' ? 'text-black font-bold' : 'text-white'} hover:text-black transition-colors duration-300`}
            onClick={toggleSidebar}
          >
            Cours
          </Link>
          <Link
            href="/instructors"
            className={`text-lg ${pathname === '/instructors' ? 'text-black font-bold' : 'text-white'} hover:text-black transition-colors duration-300`}
            onClick={toggleSidebar}
          >
            Instructeurs
          </Link>
          <Link
            href="/contact"
            className={`text-lg ${pathname === '/contact' ? 'text-black font-bold' : 'text-white'} hover:text-black transition-colors duration-300`}
            onClick={toggleSidebar}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
