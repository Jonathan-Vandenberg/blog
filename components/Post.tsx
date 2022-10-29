import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function App({ content, post }: any) {
  return (
    <article className="max-w-2xl pb-6 mx-auto mt-6 text-gray-700">
      <div className="w-full mx-auto text-center border-y-4 border-gray-200 py-4">
        {post?.category && (
          <p className="text-xs font-semibold tracking-wider uppercase">
            #{post.category}
          </p>
        )}
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          {post.title}
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          by
          <a
            rel="noopener noreferrer"
            href="mailto:jonvdberg8@gmail.com"
            target="_blank"
            className="underline text-black px-2"
          >
            <p>{post.author.name}</p>
          </a>
          <span className="align-middle">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </p>
      </div>
      <div className="text-gray-500">{content}</div>
      <div className="py-8 border-y dark:border-gray-700">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          {post?.author?.picture?.url && (
            <div className="self-center block flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-700">
              <Image
                src={post.author.picture.url}
                layout="responsive"
                alt={"Author's image"}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          )}
          <div className="flex flex-col">
            <p className="text-lg font-semibold">{post.author.name}</p>
            <p className="text-gray-500">{post.author.biography}</p>
          </div>
        </div>
        {post.author.name === "Jon van den Berg" && (
          <div className="flex justify-center pt-6 space-x-4 align-center">
            <Link href="mailto:jonvdberg8@gmail.com">
              <a
                aria-label="Email"
                className="text-gray-500 border-2 hover:border-gray-800 hover:text-gray-800 border-gray-400 px-4 py-2 flex items-center justify-center space-x-2"
              >
                <p>Contact</p>
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                </svg>
              </a>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
