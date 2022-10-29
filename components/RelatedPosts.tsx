import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSimilarPosts } from "../services";

export default function RelatedPost({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getSimilarPosts(category, slug).then((result) => {
      setData(result);
      setDataLoaded(true);
    });
  }, [slug]);

  return (
    <>
      {dataLoaded && (
        <section className="py-2">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-gray-700">
                Related posts...
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {data
                .map((post: any, index: number) => (
                  <article key={index} className="flex flex-col">
                    {post?.coverImage?.url && (
                      <Link href={`/post/${post.slug}`}>
                        <a aria-label={post.title}>
                          <img
                            alt={post.title}
                            className="object-cover w-full h-52 dark:bg-gray-500"
                            src={post.coverImage.url}
                          />
                        </a>
                      </Link>
                    )}
                    <div className="flex flex-col flex-1 p-6">
                      <Link href={`/post/${post.slug}`}>
                        <a className="text-xs tracking-wider uppercase hover:underline text-gray-800">
                          {post.title}
                        </a>
                      </Link>

                      <Link href={`/post/${post.slug}`}>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-700 cursor-pointer">
                          {post.excerpt}
                        </h3>
                      </Link>
                      <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-500">
                        <span className="align-middle">
                          {moment(post.createdAt).format("MMM DD, YYYY")}
                        </span>
                      </div>
                    </div>
                  </article>
                ))
                .slice(0)
                .reverse()}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
