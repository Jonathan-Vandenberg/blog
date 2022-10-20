import moment from "moment";
import Link from "next/link";

export default function App({
  blogCard,
  post,
}: {
  blogCard: boolean;
  post: any;
}) {
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
      <div className="mt-12">
        <article className="max-w-md mx-auto grid grid-cols-12 mt-4 duration-300 shadow-lg hover:shadow-none">
          <div className="p-3 col-span-4 my-auto">
            <h1 className="transition duration-700 text-gray-700 text-center cursor-pointer hover:text-pink-600 font-semibold">
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h1>
          </div>
          <div className="col-span-8 my-auto">
            {post?.coverImage?.url && (
              <img
                src={post.coverImage.url}
                loading="lazy"
                alt={post.title}
                className="w-full h-auto"
              />
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
