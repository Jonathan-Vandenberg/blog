import moment from "moment";
import { graphCMSImageLoader } from "../util";
import Image from "next/image";

export default function App({ post }: any) {
  return (
    <a
      href="#"
      className="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between sm:flex">
        <div>
          {post?.title && (
            <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
          )}

          <p className="mt-1 text-xs font-medium text-gray-600">
            By {post.author.name}
          </p>
        </div>

        <div className="ml-3 hidden flex-shrink-0 sm:block">
          {post?.coverImage?.url && (
            <img
              alt="Paul Clapton"
              src={post.coverImage.url}
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        {post?.excerpt && (
          <p className="text-sm text-gray-500">{post.excerpt}</p>
        )}
      </div>

      <dl className="mt-2 flex items-center justify-between">
        <div className="flex flex-col-reverse">
          {post?.createdAt && (
            <div className="text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 inline mr-2 text-pink-500"
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
              <span className="align-middle text-xs">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          )}
        </div>
      </dl>
    </a>
  );
}
