import Card2 from "../components/Card2";
import Cards from "../components/Cards";
import PostCard from "../components/PostCard";
import SideSection from "../components/SideSection";
import { getPosts } from "../services";

{
  /* // <PostCard key={index} post={post.node} /> */
}
export default function Home({ posts }: any) {
  return (
    <>
      <div className="mt-28"></div>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post: { node: any }, index: any) => (
              <Cards key={index} post={post.node} blogCard={true} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8 space-y-5">
              {posts.map((post: { node: any }, index: any) => (
                // <SideSection key={index} post={post.node} blogCard={true} />
                <Card2 key={index} post={post.node} />
              ))}
            </div>
          </div>
        </div>
      </div>
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
