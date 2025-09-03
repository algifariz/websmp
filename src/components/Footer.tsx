const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} SMA Negeri 1 Harapan. All rights reserved.</p>
        <p className="mt-2">Jalan Pendidikan No. 1, Kota Harapan, Indonesia</p>
      </div>
    </footer>
  );
};

export default Footer;
