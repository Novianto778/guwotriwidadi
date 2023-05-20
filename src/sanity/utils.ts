import { News } from '@/types/news';
import { groq } from 'next-sanity';
import { client } from './lib/client';

export async function getNews(): Promise<News[]> {
    const query = groq`*[_type == "news"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        "mainImage": mainImage.asset->url,
        content
    }`;
    const news = await client.fetch(query);
    return news;
}

export async function getNewsBySlug(slug: string): Promise<News> {
    const query = groq`*[_type == "news" && slug.current == $slug] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        "mainImage": mainImage.asset->url,
        content
    }`;
    const news = await client.fetch(query, { slug });
    return news[0];
}

const getThreeLatestNewsQuery = groq`*[_type == "news"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "mainImage": mainImage.asset->url,
    content
}`;

export async function getThreeLatestNews(): Promise<News[]> {
    const news = await client.fetch(getThreeLatestNewsQuery);
    return news;
}
