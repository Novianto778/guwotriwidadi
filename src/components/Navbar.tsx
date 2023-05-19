'use client';

import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from './Container';

type Props = {};

const LINKS = [
    {
        name: 'Beranda',
        href: '/#home',
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
        name: 'Wilayah',
        href: '/#wilayah',
    },
];

const Navbar = (props: Props) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hashId, setHashId] = useState('');

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

        handleScroll();

        window.addEventListener('resize', handleResize);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav
            className={cn(
                'bg-transparent fixed w-full z-9999 top-0 left-0',
                isScrolled && 'bg-white shadow-sm border-b border-gray-200'
            )}
        >
            <Container className="h-full">
                <div className="flex flex-wrap w-full h-full items-center justify-between py-4">
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
                                'self-center text-2xl text-black font-semibold whitespace-nowrap',
                                isScrolled && 'text-black',
                                pathname === '/' && !isScrolled && 'text-white'
                            )}
                        >
                            Guwo
                        </span>
                    </Link>
                    <div className="flex md:order-2">
                        <Link
                            href="/#maps"
                            scroll={false}
                            type="button"
                            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-700 font-medium rounded text-sm px-4 py-2 text-center mr-3 md:mr-0 duration-300"
                        >
                            Kunjungi Kami
                        </Link>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className={cn(
                                'inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-orange-600 duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200',
                                isScrolled && 'text-black hover:text-white'
                            )}
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Menu size={24} />
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
                                        pathname === '/' && 'text-white',
                                        isScrolled && 'text-black',
                                        isOpen && 'py-2 md:py-0 text-gray-800',
                                        pathname === link.href ||
                                            (link.href === hashId &&
                                                'text-orange-600')
                                    )}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => {
                                            setHashId(link.href);
                                        }}
                                    >
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
