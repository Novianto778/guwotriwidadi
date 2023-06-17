import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
import BlockContent from '../BlockContent';

type Props = {
    image: string;
    content: PortableTextBlock[];
};

const Tentang = ({ image, content }: Props) => {
    return (
        <section className="pt-12" id="about">
            <Container className="flex flex-col items-center">
                <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                    <div className="flex-1 relative aspect-[16/9] w-full">
                        <Image
                            src={image}
                            fill
                            sizes="(max-width: 640px) 640px, 1280px"
                            alt=""
                            className="bg-cover object-cover rounded"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-antiqua font-semibold text-orange-600">
                            Tentang Guwo
                        </h2>
                        <div className="text-base mt-4 font-semibold">
                            <PortableText value={content} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Tentang;
