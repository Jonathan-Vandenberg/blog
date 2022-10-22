import Head from "next/head";
import HeaderCategories from "../../components/HeaderCategories";
import Home from "../../components/Home";
import { getTechnologyPosts } from "../../services";

export default function Index({ posts }: any) {
  return (
    <>
      <Head>
        <title>Technology</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Information for alternative options to a wide variety of topics including self development, health, technology, travel, news and trends."
        ></meta>
        <meta property="og:title" content="Technology" />
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
        categoryName={"Technology"}
        categoryDescription={"Finding alternatives for different technologies"}
      />
      <Home posts={posts} />
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getTechnologyPosts()) || [];
  return {
    props: { posts },
  };
}
