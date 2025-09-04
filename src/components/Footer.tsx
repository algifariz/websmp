import Link from 'next/link';

const Footer = () => {
  const usefulLinks = [
    { href: '/profil', label: 'Profil Sekolah' },
    { href: '/jurusan', label: 'Program Keahlian' },
    { href: '/ppdb', label: 'PPDB Online' },
    { href: '/berita', label: 'Berita Sekolah' },
    { href: '/kontak', label: 'Hubungi Kami' },
  ];

  const resources = [
    { href: 'https://www.kemdikbud.go.id/', label: 'Kemendikbud' },
    { href: 'https://disdik.jabarprov.go.id/', label: 'Disdik Jabar' },
    { href: 'https://smk.kemdikbud.go.id/', label: 'Direktorat SMK' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/SMKNegeri1cimahi', icon: 'facebook' },
    { href: 'https://www.instagram.com/smkn1cmi/', icon: 'instagram' },
    { href: 'https://www.youtube.com/@SMKNEGERI1CIMAHIOFFICIAL', icon: 'youtube' },
  ];

  const SocialIcon = ({ icon }: { icon: string }) => {
    if (icon === 'facebook') return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>;
    if (icon === 'instagram') return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.116 0-3.479.012-4.696.068-2.583.118-3.953 1.48-4.07 4.07C3.175 8.95 3.163 9.328 3.163 12s.012 3.05.068 4.267c.117 2.59 1.487 3.953 4.07 4.07 1.217.056 1.58.068 4.696.068s3.479-.012 4.696-.068c2.583-.117 3.953-1.48 4.07-4.07.056-1.217.068-1.58.068-4.696s-.012-3.479-.068-4.696c-.117-2.59-1.487-3.953-4.07-4.07-1.217-.056-1.58-.068-4.696-.068zM12 6.837a5.163 5.163 0 100 10.326 5.163 5.163 0 000-10.326zm0 8.468a3.306 3.306 0 110-6.612 3.306 3.306 0 010 6.612zm4.965-7.727a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" /></svg>;
    if (icon === 'youtube') return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418zM9.57 15.58l6.21-3.58-6.21-3.58v7.16z" /></svg>;
    return null;
  };

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://www.smkn1-cmi.sch.id/wp-content/uploads/2023/05/SMK_Negeri_1_Cimahi-2.png" alt="SMKN 1 Cimahi" className="h-12 bg-white p-1.5 rounded-full"/>
              <div>
                <h3 className="font-bold text-white text-lg">SMK Negeri 1 Cimahi</h3>
                <p className="text-xs text-slate-400">Unggul, Bermutu, Berdaya Saing</p>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Jl. Mahar Martanegara No.48, Utama, Kec. Cimahi Sel., Kota Cimahi, Jawa Barat 40533
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Tautan Penting</h4>
            <ul className="space-y-2">
              {usefulLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Sumber Daya</h4>
            <ul className="space-y-2">
              {resources.map(link => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-white mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">{social.icon}</span>
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-700" />

        <div className="text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Tim ICT SMK Negeri 1 Cimahi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
