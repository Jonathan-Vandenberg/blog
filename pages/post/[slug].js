import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

import { getPosts, getPostDetails } from "../../services";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>loading...</div>;
  }

  return (
    <div className="container mx-auto px-10 mb-8 mt-32">
      <div className="text-black">{post.title}</div>
      <div className="text-black">
        <RichText
          className="text-black"
          content={post.content.raw.children}
          renderers={{
            h1: ({ children }) => (
              <h1 className="text-gray-700 text-3xl font-semibold py-6">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="py-4 text-gray-700 font-semibold text-2xl">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="py-3 text-gray-700 font-semibold text-xl">
                {children}
              </h3>
            ),
            bold: ({ children }) => (
              <strong className="text-xl">{children}</strong>
            ),
            ol: ({ children }) => (
              <ol className="py-3 text-gray-800 list-decimal text-xl">
                {children}
              </ol>
            ),
            ul: ({ children }) => (
              <ul className="py-3 text-gray-800 list-disc text-xl">
                {children}
              </ul>
            ),
            p: ({ children }) => (
              <p className="py-3 text-gray-800 text-xl">{children}</p>
            ),
            blockquote: ({ children }) => (
              <blockquote className="py-3 my-6 text-gray-800 text-xl border-l-4 pl-3 border-gray-300">
                <p>{children}</p>
              </blockquote>
            ),
            img: ({ src, altText, height, width }) => (
              <div className="block max-w-[480px] h-auto mx-auto">
                <Image
                  src={src}
                  alt={altText}
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
