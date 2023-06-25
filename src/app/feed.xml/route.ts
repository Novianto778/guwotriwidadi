import { getNews } from '@/sanity/utils';
import { toPlainText } from '@portabletext/react';
import RSS from 'rss';

export async function GET() {
    const baseUrl = 'https://www.guwotriwidadi.my.id';
    const news = await getNews();
    const feed = new RSS({
        title: 'Guwo Triwidadi',
        description: 'Guwo Triwidadi',
        feed_url: `${baseUrl}/feed.xml`,
        site_url: baseUrl,
        image_url: `${baseUrl}/favicon.ico`,
        managingEditor: 'Guwo Triwidadi',
        webMaster: 'Guwo Triwidadi',
        language: 'id',
        categories: ['Personal', 'Blog'],
        pubDate: new Date().toUTCString(),
        ttl: 60,
    });

    news.forEach((item) => {
        feed.item({
            title: item.title,
            description: toPlainText(item.content),
            url: `${baseUrl}/news/${item.slug}`,
            guid: item.slug,
            date: item.publishedAt,
        });
    });

    return new Response(feed.xml(), {
        headers: {
            'content-type': 'application/atom+xml;charset=UTF-8',
        },
    });
}
