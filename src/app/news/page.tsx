import React from 'react';
import { getNews } from '@/sanity/utils';
import NewsCard from '@/components/NewsCard';
import Container from '@/components/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Berita - Guwo Triwidadi',
    description: `Semua berita yang ada di dusun guwo triwidadi`,
    keywords: [
        'guwo triwidadi',
        'guwo',
        'triwidadi',
        'dusun',
        'dusun guwo triwidadi',
        'dusun guwo',
        'berita',
        'semua berita',
        'semua berita guwo triwidadi',
    ],
};

const SemuaBerita = async () => {
    const news = await getNews();
    return (
        <Container className="mt-4">
            <h1 className="text-2xl font-bold font-antiqua text-orange-500">
                Semua Berita
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                {news?.map((news, index) => {
                    return <NewsCard key={index} news={news} />;
                })}
            </div>
        </Container>
    );
};

export default SemuaBerita;
