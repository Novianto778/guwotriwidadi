'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type Props = {};

const LINKS = [
    {
        name: 'Beranda',
        href: '/',
    },
    {
        name: 'Tentang',
        href: '/#about',
    },
    {
        name: 'Berita',
        href: '/#news',
    },
    {
        name: 'Contact',
        href: '/#contact',
    },
];

const Navbar = (props: Props) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // if screen more than md size setisopen to false
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={cn(
                'bg-transparent fixed w-full z-20 top-0 left-0 h-16',
                isScrolled && 'bg-white shadow-sm border-b border-gray-200'
            )}
        >
            <Container>
                <div className="flex flex-wrap items-center justify-between py-4">
                    <Link href="/" className="flex items-center">
                        {/* <Image
                            src="/logo.png"
                            width={84}
                            height={48}
                            alt="logo"
                            className="object-contain w-[84px]"
                        /> */}

                        <span
                            className={cn(
                                'self-center text-2xl text-white font-semibold whitespace-nowrap',
                                isScrolled && 'text-black'
                            )}
                        >
                            Guwo
                        </span>
                    </Link>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-700 font-medium rounded text-sm px-4 py-2 text-center mr-3 md:mr-0 duration-300"
                        >
                            Deal with Us
                        </button>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-orange-600 duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={cn(
                            'items-center justify-between hidden w-full md:flex md:w-auto md:order-1',
                            isOpen ? 'flex' : 'hidden'
                        )}
                        id="navbar-sticky"
                    >
                        <ul
                            className={cn(
                                'flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0',
                                isOpen
                                    ? 'flex w-full bg-white'
                                    : 'hidden md:flex',
                                isScrolled && 'bg-white',
                                !isScrolled && 'md:bg-transparent'
                            )}
                        >
                            {LINKS.map((link) => (
                                <li
                                    key={link.name}
                                    className={cn(
                                        'text-white',
                                        isScrolled && 'text-black',
                                        isOpen && 'py-2 md:py-0 text-gray-800',
                                        pathname === link.href &&
                                            'text-orange-600'
                                    )}
                                >
                                    <Link href={link.href} scroll={false}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
