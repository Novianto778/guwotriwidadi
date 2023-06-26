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

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

const ImageComponent = (props: any) => {
    // ts-ignore
    const ref = props.value.asset._ref;
    const [, imageId, size, format] = pattern.exec(ref) || [];
    const [width, height] = size.split('x').map((n) => parseInt(n, 10));

    const { value, isInline } = props;

    return (
        <div className="unset-img">
            <Image
                src={urlBuilder(sanityConfig)
                    .image(value.asset._ref)
                    .width(width)
                    .height(height)
                    .fit('max')
                    .auto('format')
                    .url()}
                alt={value.alt || ' '}
                loading="lazy"
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                className="rounded mt-8 custom-img"
                // style={
                //     {
                //         // Display alongside text if image appears inside a block text span
                //         // display: 'inline-block',
                //         // Avoid jumping around with aspect-ratio CSS property
                //         // aspectRatio: width / height,
                //     }
                // }
            />
        </div>
    );
};

const components: PortableTextComponents = {
    types: {
        image: ImageComponent,
        // Any other custom types you have in your content
        // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    block: {
        // Ex. 1: customizing common block types
        normal: ({ children }) => (
            <p className="mt-0 w-full leading-relaxed text-justify">
                {children}
            </p>
        ),
        h1: ({ children }) => (
            <h1 className="font-antiqua font-semibold text-xl text-center sm:text-left sm:text-[32px] text-primary mt-10 mb-3">
                {children}
            </h1>
        ),
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
            <ul className="mt-0 space-y-0 prose">{children}</ul>
        ),
        number: ({ children }) => <ol className="mt-0">{children}</ol>,

        // Ex. 2: rendering custom lists
        checkmarks: ({ children }) => (
            <ol className="m-auto text-lg">{children}</ol>
        ),
    },
    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => (
            <li className="space-y-0 prose list-item list-disc ml-6 text-gray-600">
                {children}
            </li>
        ),

        // Ex. 2: rendering custom list items
        checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
};

const BlockContent = ({ news }: Props) => {
    return (
        <div className="text-gray-600">
            <PortableText
                value={news.content}
                components={components}
                onMissingComponent={false}
            />
        </div>
    );
};

export default BlockContent;
