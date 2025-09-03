export default function PenerimaanPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Penerimaan Siswa Baru</h1>
      <div className="max-w-3xl mx-auto text-lg text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Prosedur Pendaftaran</h2>
        <p>
          Pendaftaran siswa baru untuk tahun ajaran 2025/2026 akan segera dibuka. Calon siswa dapat mendaftar secara online melalui portal pendaftaran kami. Pastikan untuk melengkapi semua dokumen yang diperlukan.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Jadwal Penting</h2>
        <ul className="list-disc list-inside">
          <li>Pendaftaran Online: 1 - 30 Juni 2025</li>
          <li>Tes Seleksi: 5 Juli 2025</li>
          <li>Pengumuman Hasil: 10 Juli 2025</li>
          <li>Daftar Ulang: 11 - 15 Juli 2025</li>
        </ul>
      </div>
    </div>
  );
}
