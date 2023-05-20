import Link from 'next/link';
import { getThreeLatestNews } from '../../sanity/utils';
import Container from '../Container';
import NewsCard from '../NewsCard';

type Props = {};

const Berita = async (props: Props) => {
    const news = await getThreeLatestNews();
    return (
        <section className="pt-12" id="news">
            <Container>
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-antiqua font-semibold text-orange-600">
                        Berita Terbaru
                    </h2>
                    <Link
                        href="/news"
                        className="text-orange-600 hover:text-orange-700 focus:outline-none font-medium rounded-sm text-sm text-center duration-300"
                    >
                        Lihat Semua
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {news.map((news) => (
                        <NewsCard key={news.slug} news={news} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Berita;
