import { IArticle } from "./models/article";

const URL_BASE =
  process.env.REACT_APP_STRAPI_URL_BASE || "http://localhost:1337";

type ID = number;
type Cover = Image;
type Title = string;
type Markdown = string;
type Content = Markdown;
type Articles = Array<Article>;
type Images = Array<Image>;
type FormatImage = {
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string | null;
  url: string;
};
type Formats = {
  thumbnail?: FormatImage;
  small?: FormatImage;
  medium?: FormatImage;
  large?: FormatImage;
};
type Image = {
  id: ID;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  created_at: string;
  updated_at: string;
};
type Article = {
  id: ID;
  title: Title;
  content: Content;
  created_at: string;
  updated_at: string;
  cover?: Cover;
  images?: Images;
};
