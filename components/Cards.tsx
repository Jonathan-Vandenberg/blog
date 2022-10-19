import Link from "next/link";

export default function App({
  blogCard,
  post,
}: {
  blogCard: boolean;
  post: any;
}) {
  // const posts = [
  //   {
  //     title: "Work",
  //     desc: "A change of career could be the biggest positive effect you could have on your life, let's look at some alternative job opportunities",
  //     img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
  //     authorName: "Sidi dev",
  //     date: "Jan 4 2022",
  //     href: "javascript:void(0)",
  //   },
  //   {
  //     title: "Self-improvement",
  //     desc: "Self-improvement will be the key which unlocks the doors of opportunity.",
  //     img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
  //     authorName: "Micheal",
  //     date: "Jan 4 2022",
  //     href: "javascript:void(0)",
  //   },
  //   {
  //     title: "Travel",
  //     desc: "Traveling opens new life perspectives and could be the big change which you need.",
  //     img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
  //     authorName: "Luis",
  //     date: "Jan 4 2022",
  //     href: "javascript:void(0)",
  //   },
  //   {
  //     title: "Hobbies",
  //     desc: "All work and no play leads to dull life, however, there are also ways to make your hobby into a passive income.",
  //     img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
  //     authorName: "Lourin",
  //     date: "Jan 4 2022",
  //     href: "javascript:void(0)",
  //   },
  // ];

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          <span className="text-indigo-600">Latests</span>
        </h1>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
          {post?.coverImage?.url && (
            <img
              src={post.coverImage.url}
              loading="lazy"
              alt={post.title}
              className="w-full h-48 rounded-t-md"
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
                  <span className="block text-gray-900">
                    {post.author.name}
                  </span>
                )}
                {post?.createdAt && (
                  <span className="block text-gray-400 text-sm">
                    {post.createdAt}
                  </span>
                )}
              </div>
            </div>
          )}
          <div className="pt-3 ml-4 mr-2 mb-3">
            <h1 className="transition duration-700 text-indigo-600 text-center cursor-pointer hover:text-pink-600 text-3xl font-semibold p-6">
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h1>
            {post?.excerpt && (
              <p className="text-gray-400 text-sm mt-1">{post.excerpt}</p>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
