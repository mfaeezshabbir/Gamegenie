import React, { useState } from 'react';
import Link from 'next/link';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function NavItem(props) {
        return (
            <Link href={props.href}>
                <div className="text-gray-500 hover:text-gray-900">{props.children}</div>
            </Link>
        );
    }


    function MobileMenu() {
        const links = [
            { href: '/', text: 'Home' },
            { href: '/about', text: 'About' },
            { href: '/profile', text: 'Contact' },
        ];

        return (
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {links.map((link) => (
                        <NavItem key={link.href} href={link.href}>
                            {link.text}
                        </NavItem>
                    ))}
                </div>
            </div>
        );
    }

    return (<>
        <header className="bg-white shadow fixed w-full z-10  ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 text-3xl text-purple-700 uppercase font-bold">
                        <Link href="/">
                            {/* <Logo className="h-6 w-6" alt="GameGenie logo" /> */}
                            Gamegenie
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavItem href="/">Home</NavItem>
                            <NavItem href="/signup">About</NavItem>
                            <NavItem href="/profile">Contact</NavItem>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
            <MobileMenu />
        </header>
    <div className=''></div>
    </>
    );
}

export default Header;
