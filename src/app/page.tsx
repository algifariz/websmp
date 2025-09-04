import Link from 'next/link';

const HomePage = () => {
  const newsData = [
    {
      title: 'SMK Negeri 1 Cimahi Catat 77 Siswa Lolos Seleksi Nasional Penerimaan Mahasiswa Baru (SNPMB) Tahun 2025',
      date: 'Aug 11, 2025',
      imageUrl: 'https://www.smkn1-cmi.sch.id/wp-content/uploads/snpmb.jpg',
      link: '#',
      category: 'Berita Sekolah',
    },
    {
      title: 'SMKN 1 Cimahi bekerja sama dengan PT. Novoleum Indonesia Investama dalam Program “Raksha Bumi”',
      date: 'Aug 10, 2025',
      imageUrl: 'https://www.smkn1-cmi.sch.id/wp-content/uploads/raksa-bumi.png',
      link: '#',
      category: 'Kerjasama',
    },
    {
      title: 'SMKN 1 Cimahi Terima Dukungan Perangkat Pembelajaran dari PT Sagara Teknik Mulia untuk Jurusan IOP',
      date: 'Aug 7, 2025',
      imageUrl: 'https://www.smkn1-cmi.sch.id/wp-content/uploads/Perangkat-Pembelajaran-Sagara-Teknik-Mulia.png',
      link: '#',
      category: 'Kurikulum',
    },
     {
      title: 'SMK Negeri 1 Cimahi sukses menyelenggarakan ANBK tahun 2025',
      date: 'Aug 7, 2025',
      imageUrl: 'https://www.smkn1-cmi.sch.id/wp-content/uploads/ANBK-2025.png',
      link: '#',
      category: 'ANBK',
    },
  ];

  const categories = [
    'Alumni', 'Berita Sekolah', 'BP/BK', 'GTK', 'Hubin', 'Kesiswaan', 'Kurikulum', 'Sarana Prasarana'
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section - A static representation of the slider */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://www.smkn1-cmi.sch.id/wp-content/uploads/2023/05/gedung-sekolah.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SMK Negeri 1 Cimahi</h1>
            <p className="text-lg md:text-xl">Unggul, Bermutu, dan Berdaya Saing Tinggi</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* Main Content */}
          <main className="w-full md:w-2/3 px-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-800 pb-2">Berita Terbaru</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {newsData.map((news, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                  <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover"/>
                  <div className="p-4">
                    <span className="text-sm text-gray-500">{news.date}</span>
                    <h3 className="font-bold text-lg my-2 text-gray-800 hover:text-blue-800">
                      <Link href={news.link}>{news.title}</Link>
                    </h3>
                     <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{news.category}</span>
                  </div>
                </div>
              ))}
            </div>
             <div className="mt-8 text-center">
                <button className="bg-blue-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    Lihat Semua Berita
                </button>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Pencarian</h3>
              <div className="relative">
                <input type="text" placeholder="Cari..." className="w-full border rounded-lg py-2 px-4"/>
                <button className="absolute right-0 top-0 mt-2 mr-2">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Kategori</h3>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="border-b last:border-b-0">
                    <Link href="#" className="block py-2 text-gray-700 hover:text-blue-800">{category}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Kalender</h3>
                <div className="text-center">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">September 2025</span>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-sm">
                        <div className="text-red-500">S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                        <div></div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
                        <div className="text-red-500">7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div>
                        <div className="text-red-500">14</div><div>15</div><div>16</div><div>17</div><div>18</div><div>19</div><div>20</div>
                        <div className="text-red-500">21</div><div>22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div>
                        <div className="text-red-500">28</div><div>29</div><div>30</div>
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
