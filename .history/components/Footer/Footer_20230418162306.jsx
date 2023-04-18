import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <Link href="/" className="text-lg font-bold text-white hover:text-gray-400 transition-colors duration-300">
            GameGenie
          </Link>
        </div>
        <div className="text-center text-gray-200 text-sm">
          Created by: <a href="https://github.com/mfaeezshabbir">Muhammad Faeez Shabbir</a>
        </div>

        <div className="text-gray-200 text-center text-sm">
          &copy; 2023 GameGenie. All rights reserved.
        </div>
</div>
    </footer>
  );
}

export default Footer;
