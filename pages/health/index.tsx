import Head from "next/head";
import Button from "../../components/Button";
import Card from "../../components/Card";
import FeaturedPostsByCategory from "../../components/FeaturedPostsByCategory";
import HeaderCategories from "../../components/HeaderCategories";
import { getHealthPosts } from "../../services";

export default function Index({ posts }: any) {
  return (
    <>
      <Head>
        <title>Health</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Information for alternative options to a wide variety of topics including self development, health, technology, travel, news and trends."
        ></meta>
        <meta property="og:title" content="Health" />
        <meta
          property="og:description"
          content="Information for alternative options to a wide variety of topics including self development, health, technology, travel, news and trends."
        />
        <meta
          property="og:image"
          content="https://blog-beta-orcin.vercel.app/alt.png"
        />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="900" />
      </Head>
      <HeaderCategories
        categoryName={"Health"}
        categoryDescription={"Alternative for better health"}
      />
      <section>
        <div className="container max-w-6xl mx-auto text-2xl pt-12 pb-2 px-6 text-gray-600 font-semibold">
          Featured Posts
        </div>
        <div className="container max-w-6xl px-6 mx-auto space-y-6 sm:space-y-12">
          <FeaturedPostsByCategory category="HEALTH" />
          <div className="">
            <div className="text-gray-600 font-semibold text-2xl mb-2">
              All Posts
            </div>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: { node: any }, index: any) => (
                <Card key={index} post={post.node} blogCard={true} />
              ))}
            </div>
          </div>
          <Button content="Load more posts..." />
        </div>
      </section>
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getHealthPosts()) || [];
  return {
    props: { posts },
  };
}