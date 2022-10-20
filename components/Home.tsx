import Button from "./Button";
import Card3 from "./Card3";
import FeaturedPost from "./FeaturedPost";

export default function App({ posts }: any) {
  return (
    <section>
      <div className="container max-w-6xl px-6 mx-auto space-y-6 sm:space-y-12">
        <FeaturedPost post={posts[1].node} />
        <div className="underline text-2xl text-gray-700">All Posts</div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: { node: any }, index: any) => (
            <Card3 key={index} post={post.node} blogCard={true} />
          ))}
        </div>
        <Button content="Load more posts..." />
      </div>
    </section>
  );
}