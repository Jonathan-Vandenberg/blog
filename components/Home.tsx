import Button from "./Button";
import Card3 from "./Card3";

export default function App({ posts }: any) {
  return (
    <section>
      <div className="container max-w-6xl px-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
        >
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl text-black group-hover:underline group-focus:underline">
              Noster tincidunt repasdimique ad pro
            </h3>
            <span className="text-xs dark:text-gray-700">
              February 19, 2021
            </span>
            <p className="text-black">
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </a>
        <div className="underline text-2xl text-gray-700">All Posts</div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: { node: any }, index: any) => (
            <Card3 key={index} post={post.node} blogCard={true} />
          ))}
        </div>
        <Button content={"Load more posts..."} />
      </div>
    </section>
  );
}
