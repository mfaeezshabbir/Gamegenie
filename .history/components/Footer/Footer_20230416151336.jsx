import Link from 'next/link';

window.onload = function() {
    var body = document.body,
        html = document.documentElement,
        footer = document.getElementsByTagName("footer")[0],
        footerHeight = footer.offsetHeight,
        windowHeight = window.innerHeight,
        bodyHeight = Math.max( body.scrollHeight, body.offsetHeight,
                               html.clientHeight, html.scrollHeight, html.offsetHeight );
  
    if (bodyHeight < windowHeight) {
      body.style.paddingBottom = footerHeight + "px";
    }
  };
  

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 py-6 bottom-0 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <Link href="/" className="text-lg font-bold text-white hover:text-gray-400 transition-colors duration-300">GameGenie
                    </Link>
                </div>
                <div className="w-full sm:w-auto text-sm">
                    <ul className="flex flex-wrap gap-6">
                        <li>
                            <Link href="/about" className="hover:text-gray-400 transition-colors duration-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-400 transition-colors duration-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-400 transition-colors duration-300">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full sm:w-auto text-sm">
                    <ul className="flex flex-wrap gap-6">
                        <li>
                            <a href="https://twitter.com/GameGenie" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/GameGenie" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/GameGenie" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
