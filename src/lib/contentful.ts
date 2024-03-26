import contentful, { type EntryFieldTypes } from "contentful";

export interface Post {
  contentTypeId: "post";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    publishDate: EntryFieldTypes.Date;
    heroImage: EntryFieldTypes.AssetLink;
    body: EntryFieldTypes.RichText;
    // tags: EntryFieldTypes.Array<Item>
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
