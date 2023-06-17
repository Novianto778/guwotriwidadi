import { PortableTextBlock } from 'sanity';

export type Beranda = {
    title: string;
    subtitle: string;
    mainImage: string;
    content: PortableTextBlock[];
    tentangImage: string;
};
