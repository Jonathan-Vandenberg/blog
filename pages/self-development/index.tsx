import Head from "next/head";
import HeaderSelfDevelopment from "../../components/HeaderSelfDevelopment";
import Home from "../../components/Home";
import { getPostsByCategory } from "../../services";

{
  /* // <PostCard key={index} post={post.node} /> */
}
export default function Index({ posts }: any) {
  return (
    <>
      <Head>
        <title>Self Development</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Information for alternative options to a wide variety of topics including self development, health, technology, travel, news and trends."
        ></meta>
        <meta property="og:title" content="Self Development" />
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
      <HeaderSelfDevelopment
        categoryName={"Self Development"}
        categoryDescription={"Finding alternative ways to better yourself"}
      />
      <Home posts={posts} />
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPostsByCategory()) || [];
  return {
    props: { posts },
  };
}
