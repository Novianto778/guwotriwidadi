import Hero from '@/components/section/Hero';
import { getNews } from '@/sanity/utils';

export default async function Home() {
    const news = await getNews();
    return (
        <div>
            <Hero />
            {/* <div>
                {news.map((item) => {
                    return (
                        <div key={item._id}>
                            <h2>{item.title}</h2>
                            <Image
                                alt=""
                                src={item.mainImage}
                                width={300}
                                height={200}
                            />
                            <Link href={`/news/${item.slug}`}>Read More</Link>
                        </div>
                    );
                })}
            </div> */}
        </div>
    );
}
