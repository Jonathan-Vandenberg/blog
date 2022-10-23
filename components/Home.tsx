import Button from "./Button";
import Card from "./Card";
import FeaturedPosts from "./FeaturedPost";

export default function App({ posts }: any) {
  return (
    <section>
      <div className="container max-w-6xl underline-offset-2 underline mx-auto text-2xl pt-12 pb-2 px-6 text-gray-700">
        Featured Posts
      </div>
      <div className="container max-w-6xl px-6 mx-auto space-y-6 sm:space-y-12">
        <FeaturedPosts />
        <div className="">
          <div className="underline text-2xl text-gray-700 mb-2">All Posts</div>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: { node: any }, index: any) => (
              <Card key={index} post={post.node} blogCard={true} />
            ))}
          </div>
        </div>
        <Button content="Load more posts..." />
      </div>
    </section>
  );
}
