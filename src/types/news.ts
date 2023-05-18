import { PortableTextBlock } from "sanity";

export type News = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    mainImage: string;
    content: PortableTextBlock[]
};
