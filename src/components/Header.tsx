'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/profil', label: 'Profil' },
    { href: '/kurikulum', label: 'Kurikulum' },
    { href: '/program-sekolah', label: 'Program Sekolah' },
    { href: '/gtk', label: 'GTK' },
    { href: '/kesiswaan', label: 'Kesiswaan' },
    { href: '/sarana-prasarana', label: 'Sarana Prasarana' },
    { href: '/hubungan-industri', label: 'Hubungan Industri' },
    { href: '/fitur', label: 'Fitur' },
    { href: '/inovasi-sekolah', label: 'Inovasi Sekolah' },
    { href: '/jurusan', label: 'Jurusan' },
    { href: '/kontak', label: 'Kontak' },
    { href: '/ppdb', label: 'PPDB' },
  ];

  return (
    <header className="bg-slate-50/90 shadow-sm sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="https://www.smkn1-cmi.sch.id/wp-content/uploads/2023/05/SMK_Negeri_1_Cimahi-2.png"
                alt="SMK Negeri 1 Cimahi Logo"
                className="h-14 w-auto"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-slate-800 tracking-tight">
                  SMK Negeri 1 Cimahi
                </h1>
                <p className="text-xs text-slate-500 font-medium">
                  Unggul, Bermutu, dan Berdaya Saing Tinggi
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 7).map(link => (
              <Link key={link.href} href={link.href} className="text-slate-700 hover:bg-slate-200/70 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                {link.label}
              </Link>
            ))}
             {/* Simple dropdown for more links */}
            <div className="relative group">
                <button className="text-slate-700 hover:bg-slate-200/70 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                    Lainnya <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 hidden group-hover:block">
                    {navLinks.slice(7).map(link => (
                        <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-200/70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-50/95 absolute w-full shadow-lg backdrop-blur-md">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200/70"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
