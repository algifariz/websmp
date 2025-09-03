export default function KontakPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Hubungi Kami</h1>
      <div className="max-w-3xl mx-auto text-lg text-gray-700">
        <p>
          Kami senang mendengar dari Anda. Silakan hubungi kami melalui informasi di bawah ini atau kunjungi kami langsung di sekolah.
        </p>
        <ul className="mt-8 space-y-4">
          <li><strong>Alamat:</strong> Jalan Pendidikan No. 1, Kota Harapan, Indonesia</li>
          <li><strong>Telepon:</strong> (021) 123-4567</li>
          <li><strong>Email:</strong> info@sman1harapan.sch.id</li>
        </ul>
      </div>
    </div>
  );
}
