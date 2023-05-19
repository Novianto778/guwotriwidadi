import BlockContent from '@/components/BlockContent';
import { getNewsBySlug } from '@/sanity/utils';
import Image from 'next/image';
import Container from '@/components/Container';

type Props = {
    params: {
        slug: string;
    };
};

const NewsPage = async ({ params }: Props) => {
    const news = await getNewsBySlug(params.slug);
    return (
        <div className="w-full mx-auto mb-20">
            <Container className="relative w-full aspect-[16/9]">
                <Image
                    src={news.mainImage}
                    fill
                    priority
                    alt="mainImage"
                    className="w-full object-cover"
                />
            </Container>
            <Container>
                <article className="w-full">
                    <h1 className="font-antiqua font-semibold text-xl text-center sm:text-left sm:text-[32px] text-primary mt-10 mb-3">
                        {news.title}
                    </h1>

                    <p>
                        Dipublikasi
                        <span className="font-bold text-orange-600">
                            {' '}
                            {news.publishedAt}
                        </span>
                    </p>
                    <div className="mt-10">
                        <BlockContent news={news} />
                    </div>
                </article>
            </Container>
        </div>
    );
};

export default NewsPage;
