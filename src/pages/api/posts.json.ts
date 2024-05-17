import type { APIRoute } from "astro";
import { contentfulClient, type Post } from "../../lib/contentful";

// @TODO: Implement the GET method and generic endpoint for posts
// export const GET: APIRoute = async ({ params, request }) => {
//   try {
//     const contentfulEntriesz = await contentfulClient.getEntries<Post>({
//       content_type: "post",
//     });
//     return new Response(contentfulEntriesz as unknown as BodyInit);
//   } catch (error) {
//     return new Response("Error fetching posts", { status: 500 });
//   }
// };
