import BlockContent from '@/components/BlockContent';
import { getNewsBySlug } from '@/sanity/utils';

type Props = {
    params: {
        slug: string;
    };
};

const NewsPage = async ({ params }: Props) => {
    const news = await getNewsBySlug(params.slug);

    return (
        <div>
            <h1>{news.title}</h1>
            <BlockContent news={news} />
        </div>
    );
};

export default NewsPage;
