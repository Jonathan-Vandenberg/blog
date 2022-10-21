import AnimatedBG from "../components/AnimatedBG";
import Card2 from "../components/Card2";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Home from "../components/Home";
import PostCard from "../components/PostCard";
import SideSection from "../components/SideSection";
import { getPosts } from "../services";

{
  /* // <PostCard key={index} post={post.node} /> */
}
export default function Index({ posts }: any) {
  return (
    <>
      <div className="relative mt-14 md:mt-36">
        <Hero />
        {/* <div className="absolute top-0 transform translate-x-[25%]">
          <AnimatedBG />
        </div> */}
      </div>
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
