'use client';
import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';
import Image from 'next/image';
import sanityConfig from '../../sanity.config';
import { News } from '../types/news';
import Link from 'next/link';
import { PortableTextComponents } from '@portabletext/react';

type Props = {
    news: News;
};

const ImageComponent = (props: any) => {
    const { value, isInline } = props;

    return (
        <Image
            src={urlBuilder(sanityConfig)
                .image(value.asset._ref)
                .width(800)
                .height(Math.floor((9 / 16) * 800))
                .fit('max')
                .auto('format')
                .url()}
            alt={value.alt || ' '}
            width={800}
            height={Math.floor((9 / 16) * 800)}
            loading="lazy"
            style={{
                // Display alongside text if image appears inside a block text span
                display: isInline ? 'inline-block' : 'block',
                // Avoid jumping around with aspect-ratio CSS property
                // aspectRatio: width / height,
            }}
        />
    );
};

const components: PortableTextComponents = {
    types: {
        image: ImageComponent,
        // Any other custom types you have in your content
        // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },

    marks: {
        // Ex. 1: custom renderer for the em / italics decorator
        em: ({ children }: { children: React.ReactNode }) => (
            <em className="text-gray-600 font-semibold">{children}</em>
        ),

        // Ex. 2: rendering a custom `link` annotation
        link: ({ value, children }) => {
            const target = (value?.href || '').startsWith('http')
                ? '_blank'
                : undefined;
            return (
                <Link
                    href={value?.href}
                    target={target}
                    rel={target ? 'noopener noreferrer' : undefined}
                >
                    {children}
                </Link>
            );
        },
    },
    list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => (
            <ul className="mt-0 space-y-0">{children}</ul>
        ),
        number: ({ children }) => <ol className="mt-0">{children}</ol>,

        // Ex. 2: rendering custom lists
        checkmarks: ({ children }) => (
            <ol className="m-auto text-lg">{children}</ol>
        ),
    },
    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => <li className="space-y-0">{children}</li>,

        // Ex. 2: rendering custom list items
        checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
};

const BlockContent = ({ news }: Props) => {
    return (
        <div className="prose">
            <PortableText
                value={news.content}
                components={components}
                onMissingComponent={false}
            />
        </div>
    );
};

export default BlockContent;
