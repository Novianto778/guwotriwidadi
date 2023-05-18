import Image from 'next/image';
import React from 'react';
import Container from '../Container';

type Props = {};

const Hero = (props: Props) => {
    return (
        <div className="relative h-screen">
            <div className="relative inset-0 w-full h-full">
                <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-10"></div>
                <Image
                    alt=""
                    src="/images/hero.jpg"
                    fill
                    className="object-cover w-full h-full"
                />
                <Container className="absolute flex flex-col items-center justify-center inset-0 z-20 tracking-widest">
                    <h1 className="text-4xl md:text-5xl text-white font-antiqua font-bold text-center">
                        Selamat Datang di Desa Guwo!
                    </h1>
                    <p className="text-base md:text-xl text-white font-antiqua max-w-2xl text-center mt-4 font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa debitis aperiam a? Cupiditate, ex minus.
                    </p>
                </Container>
            </div>
        </div>
    );
};

export default Hero;
