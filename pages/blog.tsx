// import { GraphQLClient } from "graphql-request";
// import Image from "next/image";

// const hygraph = new GraphQLClient(
//   "https://api-us-west-2.hygraph.com/v2/cl9cmtkid02yz01uq4x0e7ajj/master"
// );

// import { gql } from "graphql-request";

// const QUERY = gql`
//   {
//     postsConnection {
//       edges {
//         node {
//           coverImage {
//             url
//           }
//           title
//           content {
//             html
//           }
//         }
//       }
//     }
//   }
// `;

// export async function getStaticProps() {
//   const { posts } = await hygraph.request(QUERY);

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// type Post = {
//   title: string;
//   id: string;
//   content: {
//     html: string;
//   };
//   coverImage: {
//     id: string;
//     url: string;
//   };
// };

// export default function PostsPage({ posts }: any) {
//   function createMarkup() {
//     return {
//       __html: posts.content.html,
//     };
//   }
//   console.log(posts?.coverImage?.url);
//   return (
//     <ul>
//       <h1
//         style={{
//           padding: "3rem",
//           color: "black",
//           background: "",
//           marginTop: "4rem",
//         }}
//       >
//         Post
//       </h1>
//       <>
//         <li
//           key={posts.id}
//           style={{ padding: "3rem", color: "black", background: "" }}
//         >
//           {posts.title}
//         </li>
//         <div
//           style={{
//             display: "block",
//             padding: "3rem",
//             width: "600px",
//             height: "auto",
//           }}
//         >
//           {/* {post.coverImage && ( */}
//           <Image
//             src={
//               posts?.coverImage?.url
//               // "https://media.graphassets.com/BAQOPp3BSbUwHmOOhx1k"
//             }
//             alt="post image"
//             layout="responsive"
//             width={300}
//             height={180}
//           />
//           {/* )} */}
//         </div>
//         <div
//           style={{ padding: "3rem", color: "black" }}
//           dangerouslySetInnerHTML={createMarkup()}
//         />
//       </>
//     </ul>
//   );
// }

export default function App() {
  return <div></div>;
}
