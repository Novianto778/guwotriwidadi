'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

type Props = {};

const ClientNavbar = (props: Props) => {
    const pathname = usePathname();
    const hideNavbarPage = ['/admin'];
    const isHideNavbar = hideNavbarPage.some((page) =>
        pathname.startsWith(page)
    );

    if (isHideNavbar) return null;

    return <>{!isHideNavbar && <Navbar />}</>;
};

export default ClientNavbar;
