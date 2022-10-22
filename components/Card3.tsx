import moment from "moment";
import Link from "next/link";

export default function App({ post }: any) {
  return (
    <a
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto border-b-2 border-gray-500 group hover:no-underline focus:no-underline"
    >
      {post?.coverImage?.url && (
        <img
          role="presentation"
          className="object-cover w-full rounded h-44"
          src={post.coverImage.url}
        />
      )}
      <div className="p-6 space-y-2">
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
    </a>
  );
}
