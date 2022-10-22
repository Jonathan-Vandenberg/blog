import { GraphQLClient } from "graphql-request";

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);

export async function GetPost(slug) {
  const { post } = await hygraph.request(
    `
    query GetPost {
  post(where: {slug: $slug}) {
    title
    excerpt
    coverImage {
      url
    }
    author {
      name
      biography
    }
    createdAt
    slug
    content {
      raw
    }
    seo {
      description
      title
      image {
        seoImage {
          image {
            url
          }
        }
      }
    }
    category
  }
}

  `,
    {
      slug: params.slug,
    }
  );

  return post;
}
