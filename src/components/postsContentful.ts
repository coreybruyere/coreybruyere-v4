import { contentfulClient, type Post } from "../lib/contentful";

const entries = await contentfulClient.getEntries<Post>({
  content_type: "post",
});

export const postsContentful = entries.items.map((item) => {
  const { title, slug, publishDate } = item.fields;
  return {
    title,
    slug,
    publishDate: new Date(publishDate).toLocaleDateString(),
  };
});
