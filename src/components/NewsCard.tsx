import Image from 'next/image';
import Link from 'next/link';
import { News } from '@/types/news';
import { toPlainText } from '@portabletext/react';
import { formatDate } from '../lib/utils';

type Props = {
    news: News;
};

const NewsCard = ({ news }: Props) => {
    return (
        <div className="flex flex-col gap-4 shadow pb-4 rounded overflow-hidden">
            <div className="w-full h-[200px]">
                <Image
                    src={news.mainImage}
                    alt={news.title}
                    width={500}
                    height={500}
                    sizes="(max-width: 640px) 640px, 1280px"
                    className="bg-cover object-cover aspect-[16/9] h-full rounded w-full hover:scale-110 duration-300"
                />
            </div>
            <div className="flex flex-col gap-2 px-4 h-full min-h-[200px]">
                <p className="text-sm text-gray-600">
                    {formatDate(news.publishedAt)}
                </p>
                <h3 className="text-lg font-semibold leading-tight">
                    {news.title}
                </h3>
                <p className="text-sm text-gray-600">
                    {toPlainText(news.content).slice(0, 100)}...
                </p>
                <Link
                    href={`/news/${news.slug}`}
                    scroll={false}
                    type="button"
                    className="text-white mt-auto bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-700 font-medium rounded-sm text-sm px-4 py-2 text-center mr-3 md:mr-0 duration-300"
                >
                    Baca Selengkapnya
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;
