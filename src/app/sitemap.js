import { getNews } from '@/sanity/utils';
export default async function sitemap() {
    const baseUrl = 'https://www.guwotriwidadi.my.id';
    const news = await getNews();
    const routes = news.map((item) => ({
        url: `${baseUrl}/news/${item.slug}`,
        lastModified: item.publishedAt,
    }));

    const staticRoutes = [
        { url: `${baseUrl}/`, lastModified: new Date() },
        { url: `${baseUrl}/news`, lastModified: new Date() },
    ];

    return [...staticRoutes, ...routes];
}
