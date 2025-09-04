import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex items-center mb-6 justify-center lg:justify-start">
              <img src="https://www.smkn1-cmi.sch.id/wp-content/uploads/2023/05/SMK_Negeri_1_Cimahi-2.png" alt="SMK Negeri 1 Cimahi" className="h-12 mr-4 bg-white p-1 rounded-full" />
              <div>
                <h1 className="text-xl font-bold">SMK Negeri 1 Cimahi</h1>
                <p className="text-sm text-gray-400">SMK Unggulan yang Menghasilkan SDM Bermutu dan Berdaya Saing Tinggi</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li><Link href="/profil" className="hover:text-gray-300 block pb-2 text-sm">Profil</Link></li>
                  <li><Link href="/jurusan" className="hover:text-gray-300 block pb-2 text-sm">Jurusan</Link></li>
                  <li><Link href="/ppdb" className="hover:text-gray-300 block pb-2 text-sm">PPDB</Link></li>
                  <li><Link href="/kontak" className="hover:text-gray-300 block pb-2 text-sm">Kontak</Link></li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                 <span className="block uppercase text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li><Link href="https://www.kemdikbud.go.id/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 block pb-2 text-sm">Kemendikbud</Link></li>
                  <li><Link href="https://disdik.jabarprov.go.id/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 block pb-2 text-sm">Disdik Jabar</Link></li>
                  <li><Link href="https://smk.kemdikbud.go.id/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 block pb-2 text-sm">Direktorat SMK</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-8 lg:my-4">
            <a href="https://www.facebook.com/SMKNegeri1cimahi" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <svg className="w-6 h-6 mx-auto mt-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.instagram.com/smkn1cmi/" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <svg className="w-6 h-6 mx-auto mt-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.153 1.152 4.902 4.902 0 011.152 2.153c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.152 2.153 4.902 4.902 0 01-2.153 1.152c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.153-1.152 4.902 4.902 0 01-1.152-2.153c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.152-2.153A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm0 1.625c-2.375 0-2.706.01-3.66.056-1.01.046-1.58.21-1.94.36a3.28 3.28 0 00-1.43 1.43c-.15.36-.314.93-.36 1.94-.046.954-.056 1.285-.056 3.66s.01 2.706.056 3.66c.046 1.01.21 1.58.36 1.94a3.28 3.28 0 001.43 1.43c.36.15.93.314 1.94.36.954.046 1.285.056 3.66.056s2.706-.01 3.66-.056c1.01-.046 1.58-.21 1.94-.36a3.28 3.28 0 001.43-1.43c.15-.36.314-.93.36-1.94.046-.954.056-1.285.056-3.66s-.01-2.706-.056-3.66c-.046-1.01-.21-1.58-.36-1.94a3.28 3.28 0 00-1.43-1.43c-.36-.15-.93-.314-1.94-.36C15.02 3.635 14.69 3.625 12.315 3.625zm0 2.438a6.063 6.063 0 100 12.125 6.063 6.063 0 000-12.125zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.844a1.406 1.406 0 100-2.812 1.406 1.406 0 000 2.812z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.youtube.com/@SMKNEGERI1CIMAHIOFFICIAL" target="_blank" rel="noopener noreferrer" className="bg-white text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <svg className="w-6 h-6 mx-auto mt-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418zM9.57 15.58l6.21-3.58-6.21-3.58v7.16z" clipRule="evenodd" /></svg>
            </a>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-400 font-semibold py-1">
              © Copyright - Tim ICT SMK Negeri 1 Cimahi {new Date().getFullYear()} | All Rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
