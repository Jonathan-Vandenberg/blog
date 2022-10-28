import moment from "moment";
import Link from "next/link";

export default function App({ post }: any) {
  return (
    <div className="max-w-sm mx-auto bg-sky-50 group hover:no-underline focus:no-underline">
      {post?.coverImage?.url && (
        <Link href={`/post/${post.slug}`}>
          <a area-label="post cover image">
            <img
              role="presentation"
              className="object-cover w-full rounded h-44"
              src={post.coverImage.url}
              alt={`Cover-image: ${post.title}`}
            />
          </a>
        </Link>
      )}
      <div className="p-6 space-y-2">
        <p>#{post.category}</p>
        <Link href={`/post/${post.slug}`}>
          <a>
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">
              {post.title}
            </h3>
          </a>
        </Link>
        <span className="align-middle text-gray-500">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </span>
        <p className="text-black">{post.excerpt}</p>
      </div>
    </div>
  );
}
