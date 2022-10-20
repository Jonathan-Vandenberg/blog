export default function App({ post }: any) {
  return (
    <a
      rel="noopener noreferrer"
      href="#"
      className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
    >
      {post?.coverImage?.url && (
        <img
          src={post.coverImage.url}
          alt=""
          className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
        />
      )}
      <div className="p-6 space-y-2 lg:col-span-5">
        <h3 className="text-2xl font-semibold sm:text-4xl text-gray-700 group-hover:underline group-focus:underline">
          {post.title}
        </h3>
        <span className="text-xs dark:text-gray-700">{post.createdAt}</span>
        <p className="text-black">{post.excerpt}</p>
      </div>
    </a>
  );
}
