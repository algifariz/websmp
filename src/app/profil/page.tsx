import Image from 'next/image';

const ProfilPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Sambutan Kepala Sekolah</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 flex justify-center">
          <Image
            src="https://via.placeholder.com/250"
            alt="Foto Kepala Sekolah"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Assalamualaikum Wr. Wb.</h2>
          <p className="mb-4">
            Puji syukur kami panjatkan kehadirat Allah SWT, yang atas berkat rahmat dan hidayah-Nya kita semua dalam keadaan sehat walafiat.
          </p>
          <p className="mb-4">
            Selamat datang di website resmi SMK Negeri 1 Cirebon. Website ini kami hadirkan sebagai media komunikasi dan informasi bagi seluruh warga sekolah, alumni, dan masyarakat umum.
          </p>
          <p className="mb-4">
            Melalui website ini, kami berharap dapat memberikan informasi yang lengkap dan akurat mengenai berbagai kegiatan dan prestasi sekolah kami. Kami juga berharap website ini dapat menjadi sarana untuk menjalin silaturahmi dan kerjasama yang baik antara sekolah, orang tua siswa, dan masyarakat.
          </p>
          <p className="mb-4">
            Kami menyadari bahwa website ini masih jauh dari sempurna. Oleh karena itu, kami sangat mengharapkan kritik dan saran yang membangun dari semua pihak demi kemajuan sekolah kita bersama.
          </p>
          <p className="mb-4">
            Terima kasih.
          </p>
          <p className="font-semibold">Wassalamualaikum Wr. Wb.</p>
          <p className="mt-4 font-bold">[Nama Kepala Sekolah]</p>
          <p>Kepala SMK Negeri 1 Cirebon</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
