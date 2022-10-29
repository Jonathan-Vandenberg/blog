import Head from "next/head";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import { getPosts } from "../services";
import Button from "../components/Button";
import Card from "../components/AllPostsCard";
import FeaturedPosts from "../components/FeaturedPost";
import { useState } from "react";

export default function Index({ posts }: any) {
  const [addPosts, setAddPosts] = useState(6);
  const [disableButton, setDisableButton] = useState(false);
  const addMorePosts = () => {
    if (posts.length > addPosts) {
      setAddPosts(addPosts + 6);
    } else setDisableButton(true);
  };

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
      <div className="md:mt-14 container mx-auto lg:mb-16 pt-12">
        <Hero />
      </div>
      <div className="hidden lg:block container mx-auto">
        <Categories />
      </div>
      <section>
        <p className="container max-w-6xl font-semibold mx-auto text-2xl pt-12 pb-2 px-6 text-gray-400">
          Featured Posts
        </p>
        <div className="container max-w-6xl px-6 mx-auto space-y-6 sm:space-y-12">
          <FeaturedPosts />
          <div className="">
            <p className="text-2xl text-gray-400 font-semibold mb-2">
              All Posts
            </p>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts
                .map((post: { node: any }, index: any) => (
                  <Card key={index} post={post.node} blogCard={true} />
                ))
                .slice(0, addPosts)}
            </div>
          </div>
          <Button
            content="Load more posts..."
            handleAddMorePosts={addMorePosts}
            disable={disableButton}
          />
        </div>
      </section>
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
