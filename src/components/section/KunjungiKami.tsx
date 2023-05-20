import React from 'react';
import Container from '../Container';

type Props = {};

const KunjungiKami = (props: Props) => {
    return (
        <section className="pt-12" id="maps">
            <Container>
                <h2 className="font-antiqua text-2xl font-semibold text-orange-600">
                    Kunjungi Dusun Guwo
                </h2>
                <div className="mt-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7905.034682606504!2d110.27716372422415!3d-7.8407953774016255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af9aa977f9901%3A0x4f87fbb884ab4ec0!2sGuwo%2C%20Triwidadi%2C%20Kec.%20Pajangan%2C%20Kabupaten%20Bantul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1684562866085!5m2!1sid!2sid"
                        // width="600"
                        // height="450"
                        style={{
                            border: 0,
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[450px]"
                    ></iframe>
                </div>
            </Container>
        </section>
    );
};

export default KunjungiKami;
