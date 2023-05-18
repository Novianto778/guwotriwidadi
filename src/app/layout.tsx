import { Metadata } from 'next';
import './globals.css';
import { Quicksand, Modern_Antiqua } from 'next/font/google';

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-quicksand',
});

const modern_antiqua = Modern_Antiqua({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-antiqua',
});

export const metadata: Metadata = {
    title: 'Guwo Triwidadi',
    description: `Guwo Triwidadi adalah sebuah dusun di Kalurahan Triwidadi, Kapanewon Pajangan, Kabupaten Bantul, Daerah Istimewa Yogyakarta, Indonesia. Dusun ini terletak di sebelah barat daya Kapanewon Pajangan, berbatasan dengan Dusun Sumbermulyo di sebelah barat, Dusun Sumberagung di sebelah timur, Dusun Sumbermulyo di sebelah utara, dan Dusun Sumberagung di sebelah selatan.`,
    keywords: [
        'guwo triwidadi',
        'guwo',
        'triwidadi',
        'dusun',
        'dusun guwo triwidadi',
        'dusun guwo',
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${quicksand.variable} ${modern_antiqua.variable} font-sans`}
        >
            <body className={quicksand.className}>{children}</body>
        </html>
    );
}
