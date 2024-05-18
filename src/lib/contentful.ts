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

export interface WorkFields {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  publishDate: EntryFieldTypes.Date;
  // heroImage: EntryFieldTypes.AssetLink;
  metaDescription: EntryFieldTypes.Text;
}

export interface Work {
  contentTypeId: "work";
  fields: WorkFields;
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_ACCESS_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
