'use client'; // This is a client component because it uses useState

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://www.smkn1-cmi.sch.id/wp-content/uploads/2023/05/SMK_Negeri_1_Cimahi-2.png" alt="SMK Negeri 1 Cimahi" className="h-12 mr-4" />
          <div>
            <h1 className="text-xl font-bold text-blue-900">SMK Negeri 1 Cimahi</h1>
            <p className="text-sm text-gray-600">SMK Unggulan yang Menghasilkan SDM Bermutu dan Berdaya Saing Tinggi</p>
          </div>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* Mobile menu icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <nav className="hidden md:flex bg-blue-800 text-white">
        <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-4 py-2">
                <Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded">Beranda</Link>
                <Link href="/profil" className="hover:bg-blue-700 px-3 py-2 rounded">Profil</Link>
                <Link href="/kurikulum" className="hover:bg-blue-700 px-3 py-2 rounded">Kurikulum</Link>
                <Link href="/program-sekolah" className="hover:bg-blue-700 px-3 py-2 rounded">Program Sekolah</Link>
                <Link href="/gtk" className="hover:bg-blue-700 px-3 py-2 rounded">GTK</Link>
                <Link href="/kesiswaan" className="hover:bg-blue-700 px-3 py-2 rounded">Kesiswaan</Link>
                <Link href="/sarana-prasarana" className="hover:bg-blue-700 px-3 py-2 rounded">Sarana Prasarana</Link>
                <Link href="/hubungan-industri" className="hover:bg-blue-700 px-3 py-2 rounded">Hubungan Industri</Link>
                <Link href="/fitur" className="hover:bg-blue-700 px-3 py-2 rounded">Fitur</Link>
                <Link href="/inovasi-sekolah" className="hover:bg-blue-700 px-3 py-2 rounded">Inovasi Sekolah</Link>
                <Link href="/jurusan" className="hover:bg-blue-700 px-3 py-2 rounded">Jurusan</Link>
                <Link href="/kontak" className="hover:bg-blue-700 px-3 py-2 rounded">Kontak</Link>
                <Link href="/ppdb" className="hover:bg-blue-700 px-3 py-2 rounded">PPDB</Link>
            </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md">
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
            <Link href="/profil" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Profil</Link>
            <Link href="/kurikulum" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Kurikulum</Link>
            <Link href="/program-sekolah" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Program Sekolah</Link>
            <Link href="/gtk" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>GTK</Link>
            <Link href="/kesiswaan" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Kesiswaan</Link>
            <Link href="/sarana-prasarana" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Sarana Prasarana</Link>
            <Link href="/hubungan-industri" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Hubungan Industri</Link>
            <Link href="/fitur" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Fitur</Link>
            <Link href="/inovasi-sekolah" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Inovasi Sekolah</Link>
            <Link href="/jurusan" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Jurusan</Link>
            <Link href="/kontak" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Kontak</Link>
            <Link href="/ppdb" className="text-gray-600 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>PPDB</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
