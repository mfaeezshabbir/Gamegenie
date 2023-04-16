import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto mb-8 sm:mb-0">
            <Link href="/">
              <a className="text-2xl font-bold text-white">GameGenie</a>
            </Link>
          </div>
          <div className="w-full sm:w-auto text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} GameGenie. All rights reserved.</p>
            <p>Designed and built by Your Name</p>
          </div>
          <div className="w-full sm:w-auto">
            <ul className="flex space-x-4">
              <li>
                <Link href="/about">
                  <a className="text-white hover:text-gray-400 transition duration-300 ease-in-out">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-white hover:text-gray-400 transition duration-300 ease-in-out">Terms</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-white hover:text-gray-400 transition duration-300 ease-in-out">Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
