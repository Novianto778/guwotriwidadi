import React from 'react';
import Container from '../Container';
import Image from 'next/image';

type Props = {};

const Tentang = (props: Props) => {
    return (
        <section className="pt-12" id="about">
            <Container className="flex flex-col items-center">
                <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                    <div className="flex-1 relative aspect-[16/9] w-full">
                        <Image
                            src="/images/hero.jpg"
                            fill
                            alt=""
                            className="bg-cover object-cover rounded"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-antiqua font-semibold text-orange-600">
                            Tentang Guwo
                        </h2>
                        <p className="text-base mt-4 font-semibold">
                            Guwo Triwidadi adalah sebuah dusun di Kalurahan
                            Triwidadi, Kapanewon Pajangan, Kabupaten Bantul,
                            Daerah Istimewa Yogyakarta, Indonesia. Dusun ini
                            terletak di sebelah barat daya Kapanewon Pajangan,
                            berbatasan dengan Dusun Sumbermulyo di sebelah
                            barat, Dusun Sumberagung di sebelah timur, Dusun
                            Sumbermulyo di sebelah utara, dan Dusun Sumberagung
                            di sebelah selatan.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Tentang;
