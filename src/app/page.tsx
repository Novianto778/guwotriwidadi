import Hero from '@/components/section/Hero';
import Berita from '@/components/section/Berita';
import Tentang from '@/components/section/Tentang';
import KunjungiKami from '@/components/section/KunjungiKami';

export default function Home() {
    return (
        <div>
            <Hero />
            <Tentang />
            {/* @ts-expect-error Server Component */}
            <Berita />
            <KunjungiKami />
        </div>
    );
}
