import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { getPosts, getPostDetails } from "../../services";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Head>
        {post?.seo?.title && <title>{post.seo.title}</title>}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {post?.seo?.description && (
          <meta name="description" content={post.seo.description}></meta>
        )}

        {post?.seo?.title && (
          <meta property="og:title" content={post.seo.title} />
        )}
        {post?.seo?.description && (
          <meta property="og:description" content={post.seo.description} />
        )}
        {post?.seo?.image?.seoImage?.image?.url && (
          <meta
            property="og:image"
            content={post.seo.image.seoImage.image.url}
          />
        )}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <div className="mx-auto mb-8 mt-32 lg:max-w-[730px] px-6">
        <div className="text-black">
          <RichText
            className="text-black"
            content={post.content.raw.children}
            renderers={{
              h1: ({ children }) => (
                <h1 className="text-gray-700 text-3xl font-semibold py-4">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="py-4 text-gray-700 font-semibold text-2xl">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="py-4 text-gray-700 font-semibold text-xl">
                  {children}
                </h3>
              ),
              bold: ({ children }) => (
                <strong className="text-xl">{children}</strong>
              ),
              ol: ({ children }) => (
                <ol className="py-4 ml-12 text-gray-800 list-decimal text-xl">
                  {children}
                </ol>
              ),
              ul: ({ children }) => (
                <ul className="py-4 ml-12 text-gray-800 list-disc text-xl">
                  {children}
                </ul>
              ),
              p: ({ children }) => (
                <p className="py-4 text-gray-800 text-xl">{children}</p>
              ),
              blockquote: ({ children }) => (
                <blockquote className="py-4 my-6 text-gray-800 text-xl border-l-[6px] pl-3 border-gray-400">
                  <p>{children}</p>
                </blockquote>
              ),
              img: ({ src, title, height, width }) => (
                <div className="block h-auto mx-auto my-3">
                  <Image
                    src={src}
                    alt={title}
                    height={height}
                    width={width}
                    objectFit="responsive"
                  />
                </div>
              ),
            }}
          />
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return { props: { post: data } };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
