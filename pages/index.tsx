import AnimatedBG from "../components/AnimatedBG";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Home from "../components/Home";
import { getPosts } from "../services";

{
  /* // <PostCard key={index} post={post.node} /> */
}
export default function Index({ posts }: any) {
  return (
    <>
      <div className="md:mt-14 container mx-auto py-28">
        <Hero />
      </div>
      <Categories />
      <div className="container max-w-6xl underline-offset-2 underline p-6 mx-auto text-2xl text-gray-700">
        Featured Post
      </div>
      <Home posts={posts} />
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
