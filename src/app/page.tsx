import Hero from '@/components/section/Hero';
import Berita from '@/components/section/Berita';
import Tentang from '@/components/section/Tentang';
import KunjungiKami from '@/components/section/KunjungiKami';
import { getBeranda } from '../sanity/utils';
import Wilayah from '../components/section/Wilayah';

export const revalidate = 10;

export default async function Home() {
    const beranda = await getBeranda();

    if (!beranda) return <p>loading...</p>;

    return (
        <div>
            <Hero
                title={beranda?.title}
                subtitle={beranda?.subtitle}
                image={beranda.mainImage}
            />
            <Tentang image={beranda.tentangImage} content={beranda?.content} />
            {/* @ts-expect-error Server Component */}
            <Berita />
            {/* @ts-expect-error Server Component */}
            <Wilayah />
            <KunjungiKami />
        </div>
    );
}
