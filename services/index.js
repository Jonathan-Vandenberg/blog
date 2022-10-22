import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// import { GraphQLClient } from "graphql-request";

// const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);

// export const getPosts = async () => {
//   const { posts } = await hygraph.request(
//     `
//     query GetPosts {
//       postsConnection {
//         edges {
//           cursor
//           node {
//             author {
//               biography
//               name
//               id
//             }
//             category
//             createdAt
//             slug
//             title
//             excerpt
//             coverImage {
//               url
//             }
//           }
//         }
//       }
//     }
//   `
//   );

//   return {
//     posts,
//   };
// };

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              biography
              name
              id
            }
            category
            createdAt
            slug
            title
            excerpt
            coverImage {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

// export const getSimilarPost = async (category, slug) => {
//   const { similarPosts } = await hygraph.request(
//     `
//     query posts(where: { slug_not: $slug, AND: { category: $category } }) {
//         category
//         content {
//           raw
//         }
//         coverImage {
//           url
//         }
//         seo {
//           description
//           title
//         }
//         slug
//         title
//         author {
//           biography
//           name
//           picture {
//             url
//           }
//         }
//     }
//   `,
//     {
//       slug,
//       category,
//     }
//   );

//   return {
//     similarPosts,
//   };
// };

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        category
        excerpt
        coverImage {
          url
        }
        author {
          name
          biography
          picture {
            url
          }
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
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSimilarPosts = async (category, slug) => {
  const query = gql`
    query MyQuery($category: Category!, $slug: String!) {
      posts(where: { category: $category, AND: { slug_not: $slug } }) {
        category
        excerpt
        slug
        seo {
          title
          description
        }
        title
        content {
          raw
        }
        coverImage {
          url
        }
        author {
          biography
          name
          picture {
            url
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { category, slug });

  return result.posts;
};

// export const getAdjacentPosts = async (createdAt, slug) => {
//   const query = gql`
//     query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
//       next: posts(
//         first: 1
//         orderBy: createdAt_ASC
//         where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//       previous: posts(
//         first: 1
//         orderBy: createdAt_DESC
//         where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query, { slug, createdAt });

//   return { next: result.next[0], previous: result.previous[0] };
// };

export const getCategoryPosts = async (category) => {
  const query = gql`
  query GetCategoryPosts($category: String!) {
      postsConnection(where: { category: $category }) {
        edges {
          cursor
          node {
            author {
              biography
              name
            }
            category
            createdAt
            slug
            title
            excerpt
            coverImage {
              url
            }
          }
        }
    }
  `;
  const result = await request(graphqlAPI, query, { category });

  return result.postsConnection.edges;
};

// export const getFeaturedPosts = async () => {
//   const query = gql`
//     query GetCategoryPost() {
//       posts(where: {featuredPost: true}) {
//         author {
//           name
//           photo {
//             url
//           }
//         }
//         featuredImage {
//           url
//         }
//         title
//         slug
//         createdAt
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query);

//   return result.posts;
// };

// export const submitComment = async (obj) => {
//   const result = await fetch("/api/comments", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });

//   return result.json();
// };

// export const getComments = async (slug) => {
//   const query = gql`
//     query GetComments($slug: String!) {
//       comments(where: { post: { slug: $slug } }) {
//         name
//         createdAt
//         comment
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query, { slug });

//   return result.comments;
// };

// export const getRecentPosts = async () => {
//   const query = gql`
//     query GetPostDetails() {
//       posts(
//         orderBy: createdAt_ASC
//         last: 3
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;
//   const result = await request(graphqlAPI, query);

//   return result.posts;
// };
