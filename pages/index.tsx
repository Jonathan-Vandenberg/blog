import Head from "next/head";
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
      <Head>
        <title>Alternatively a better option</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Information for alternative options to a wide variety of topics including self development, health, technology, travel, news and trends."
        ></meta>
        <meta property="og:title" content="Alternatively a better option" />
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
