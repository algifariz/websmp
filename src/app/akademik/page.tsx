export default function AkademikPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Informasi Akademik</h1>
      <div className="max-w-3xl mx-auto text-lg text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Kurikulum</h2>
        <p>
          Kami menggunakan kurikulum nasional yang diperkaya dengan program-program unggulan untuk mempersiapkan siswa menghadapi tantangan global. Program kami mencakup mata pelajaran inti serta berbagai pilihan elektif di bidang sains, seni, dan olahraga.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Program Unggulan</h2>
        <ul className="list-disc list-inside">
          <li>Kelas Olimpiade Sains</li>
          <li>Program Bahasa Asing (Inggris, Mandarin, Jerman)</li>
          <li>Klub Robotika dan Pemrograman</li>
          <li>Ekstrakurikuler Seni dan Olahraga</li>
        </ul>
      </div>
    </div>
  );
}
