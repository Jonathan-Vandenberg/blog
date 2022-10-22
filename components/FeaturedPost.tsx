import moment from "moment";
import Link from "next/link";

export default function App({ post }: any) {
  return (
    <Link href={`/post/${post.slug}`}>
      <a
        area-label={post.title}
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
      >
        {post?.coverImage?.url && (
          <img
            src={post.coverImage.url}
            alt={`featured post image: ${post.title}`}
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
        )}
        <div className="p-6 space-y-2 lg:col-span-5 bg-gray-100">
          <h3 className="text-2xl font-semibold sm:text-4xl text-gray-700 group-hover:underline group-focus:underline">
            {post.title}
          </h3>
          <span className="align-middle text-gray-700">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
          <p className="text-black">{post.excerpt}</p>
        </div>
      </a>
    </Link>
  );
}
