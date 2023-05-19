import Hero from '@/components/section/Hero';
import Berita from '@/components/section/Berita';
import Tentang from '@/components/section/Tentang';

export default function Home() {
    return (
        <div>
            <Hero />
            <Tentang />
            {/* @ts-expect-error Server Component */}
            <Berita />
        </div>
    );
}
