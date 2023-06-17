import React from 'react';
import Container from '../Container';
import { getWilayah } from '@/sanity/utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { cn } from '@/lib/utils';

type Props = {};

const Wilayah = async (props: Props) => {
    const wilayah = await getWilayah();

    return (
        <section className="pt-12" id="wilayah">
            <Container className="flex flex-col">
                <h2 className="text-2xl font-antiqua font-semibold text-orange-600">
                    Wilayah Guwo
                </h2>
                <div className="flex flex-col gap-4 mt-6">
                    {wilayah?.map((wilayah, index) => {
                        const isEven = (index + 1) % 2 === 0;
                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                            >
                                <Image
                                    src={wilayah.mainImage}
                                    alt=""
                                    className={cn(
                                        'bg-cover object-cover rounded',
                                        isEven && 'order-last'
                                    )}
                                    width={500}
                                    height={500}
                                />
                                <div className="flex flex-col gap-4">
                                    <h6 className="font-antiqua text-xl font-semibold">
                                        {wilayah.title}
                                    </h6>
                                    <div className="indent-8 text-justify text-gray-800 leading-relaxed font-normal prose">
                                        <PortableText value={wilayah.content} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Wilayah;
