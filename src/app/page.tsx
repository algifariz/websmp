import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1200/800?school')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Selamat Datang di SMA Negeri 1 Harapan</h1>
            <p className="text-lg md:text-xl mb-8">Mencetak Generasi Unggul dan Berkarakter</p>
            <Link href="/penerimaan" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
              Info Penerimaan
            </Link>
          </div>
        </div>
      </section>

      {/* Berita Terbaru Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Berita Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://picsum.photos/400/300?news,1" alt="Berita 1" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Prestasi Siswa di Olimpiade Sains</h3>
                <p className="text-gray-700 mb-4">Siswa kami berhasil meraih medali emas dalam ajang olimpiade sains tingkat nasional.</p>
                <Link href="#" className="text-blue-600 hover:underline">Baca Selengkapnya</Link>
              </div>
            </div>
            {/* News Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://picsum.photos/400/300?news,2" alt="Berita 2" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Kegiatan Bakti Sosial Tahunan</h3>
                <p className="text-gray-700 mb-4">Sekolah mengadakan kegiatan bakti sosial untuk membantu masyarakat sekitar.</p>
                <Link href="#" className="text-blue-600 hover:underline">Baca Selengkapnya</Link>
              </div>
            </div>
            {/* News Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://picsum.photos/400/300?news,3" alt="Berita 3" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Juara 1 Lomba Cerdas Cermat</h3>
                <p className="text-gray-700 mb-4">Tim cerdas cermat sekolah berhasil menjadi juara pertama tingkat provinsi.</p>
                <Link href="#" className="text-blue-600 hover:underline">Baca Selengkapnya</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acara Mendatang Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Acara Mendatang</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
              <div className="bg-blue-600 text-white text-center rounded-lg p-3">
                <span className="block text-2xl font-bold">25</span>
                <span className="block text-sm">OKT</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold">Pentas Seni Akhir Tahun</h3>
                <p className="text-gray-600">Aula Sekolah, Pukul 18:00</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
              <div className="bg-blue-600 text-white text-center rounded-lg p-3">
                <span className="block text-2xl font-bold">10</span>
                <span className="block text-sm">NOV</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold">Upacara Hari Pahlawan</h3>
                <p className="text-gray-600">Lapangan Utama, Pukul 07:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
