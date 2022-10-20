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
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
      {post?.coverImage?.url && (
        <img
          src={post.coverImage.url}
          loading="lazy"
          alt={post.title}
          className="w-full h-auto rounded-t-md"
        />
      )}
      {blogCard && (
        <div className="flex post-center mt-2 pt-3 ml-4 mr-2">
          <div className="flex-none w-10 h-10 rounded-full">
            {post?.author?.picture?.url && (
              <img
                src={post.author.picture.url}
                className="w-full h-full rounded-full"
                alt={post.author.name}
              />
            )}
          </div>
          <div className="ml-3">
            {post?.author?.name && (
              <span className="block text-gray-900">{post.author.name}</span>
            )}
            {post?.createdAt && (
              <div className="font-sm text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="align-middle text-sm">
                  {moment(post.createdAt).format("MMM DD, YYYY")}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="pt-3 ml-4 mr-2 mb-3">
        <h1 className="transition duration-700 text-gray-700 text-center cursor-pointer hover:text-pink-600 text-xl font-semibold p-6">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        {post?.excerpt && (
          <p className="text-gray-400 text-sm mt-1">{post.excerpt}</p>
        )}
      </div>
    </article>
  );
}
