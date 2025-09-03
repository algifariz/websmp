'use client'; // This is a client component because it uses useState

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-blue-600">
          <Link href="/">SMA Negeri 1 Harapan</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Beranda</Link>
          <Link href="/tentang" className="text-gray-600 hover:text-blue-600">Tentang Kami</Link>
          <Link href="/akademik" className="text-gray-600 hover:text-blue-600">Akademik</Link>
          <Link href="/penerimaan" className="text-gray-600 hover:text-blue-600">Penerimaan</Link>
          <Link href="/kontak" className="text-gray-600 hover:text-blue-600">Kontak</Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* Mobile menu icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md">
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
            <Link href="/tentang" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Tentang Kami</Link>
            <Link href="/akademik" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Akademik</Link>
            <Link href="/penerimaan" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Penerimaan</Link>
            <Link href="/kontak" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Kontak</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
