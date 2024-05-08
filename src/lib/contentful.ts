import contentful, { type EntryFieldTypes } from "contentful";

export interface PostFields {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  publishDate: EntryFieldTypes.Date;
  heroImage: EntryFieldTypes.AssetLink;
  body: EntryFieldTypes.RichText;
}

export interface Post {
  contentTypeId: "post";
  fields: PostFields;
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
