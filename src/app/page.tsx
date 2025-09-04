import Link from 'next/link';

const HomePage = () => {
  const newsData = [
    {
      title: '77 Siswa SMKN 1 Cimahi Lolos SNPMB 2025',
      date: '11 Agu 2025',
      imageUrl: 'https://www.smkn1-cmi.sch.id/wp-content/uploads/snpmb.jpg',
      link: '#',
      category: 'Berita Sekolah',
    },
    {
      title: 'Kolaborasi SMKN 1 Cimahi & PT. Novoleum dalam Program "Raksha Bumi"',
      date: '10 Agu 2025',
      imageUrl: 'https://www.smkn1-cmi.sch.id/wp-content/uploads/raksa-bumi.png',
      link: '#',
      category: 'Kerjasama',
    },
    {
      title: 'Dukungan Perangkat Pembelajaran dari PT Sagara Teknik Mulia untuk Jurusan IOP',
      date: '7 Agu 2025',
      imageUrl: 'https://www.smkn1-cmi.sch.id/wp-content/uploads/Perangkat-Pembelajaran-Sagara-Teknik-Mulia.png',
      link: '#',
      category: 'Kurikulum',
    },
     {
      title: 'Sukses Penyelenggaraan Asesmen Nasional Berbasis Komputer (ANBK) 2025',
      date: '7 Agu 2025',
      imageUrl: 'https://www.smkn1-cmi.sch.id/wp-content/uploads/ANBK-2025.png',
      link: '#',
      category: 'ANBK',
    },
  ];

  const categories = [
    'Alumni', 'Berita Sekolah', 'BP/BK', 'GTK', 'Hubin', 'Kesiswaan', 'Kurikulum', 'Sarana Prasarana'
  ];

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://www.smkn1-cmi.sch.id/wp-content/uploads/2023/05/gedung-sekolah.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            SMK Negeri 1 Cimahi
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-2xl">
            Mencetak Generasi Unggul, Bermutu, dan Berdaya Saing Tinggi di Era Digital
          </p>
          <Link href="/ppdb" className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Penerimaan Siswa Baru 2025
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Content */}
          <main className="w-full lg:w-2/3">
            <div className="flex justify-between items-center mb-6 border-b-2 border-slate-200 pb-3">
              <h2 className="text-3xl font-bold text-slate-800">Berita Terkini</h2>
              <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                Lihat Semua
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsData.map((news, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="relative">
                    <img src={news.imageUrl} alt={news.title} className="w-full h-52 object-cover"/>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-slate-500 mb-2">{news.date}</p>
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">
                      <Link href={news.link}>{news.title}</Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-slate-800 border-b border-slate-200 pb-3">Pencarian</h3>
              <div className="relative">
                <input type="text" placeholder="Cari berita atau halaman..." className="w-full border-slate-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                <button className="absolute right-0 top-0 mt-2.5 mr-3 text-slate-400 hover:text-slate-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-slate-800 border-b border-slate-200 pb-3">Kategori Berita</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link href="#" className="flex justify-between items-center py-2 px-3 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                      <span>{category}</span>
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

             <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-slate-800 border-b border-slate-200 pb-3">Kalender Akademik</h3>
                <div className="text-center">
                    <div className="flex justify-between items-center mb-4">
                        <button className="text-slate-500 hover:text-slate-700">&lt;</button>
                        <span className="font-semibold text-slate-700">September 2025</span>
                        <button className="text-slate-500 hover:text-slate-700">&gt;</button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-sm">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => <div key={day} className="font-medium text-slate-500">{day}</div>)}
                        {[...Array(30).keys()].map(i => <div key={i} className={`py-1 rounded-full ${[0, 6, 7, 13, 14, 20, 21, 27, 28].includes(i+1) ? 'text-red-500' : 'text-slate-700'} ${i+1 === 18 ? 'bg-blue-500 text-white' : ''}`}>{i+1}</div>)}
                    </div>
                </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
