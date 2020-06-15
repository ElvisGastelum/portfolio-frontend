import { Article } from "../../types";

const URL_BASE =
  process.env.REACT_APP_STRAPI_URL_BASE || "http://localhost:1337";

export const getArticle = async (id: number) => {
  const URL = `${URL_BASE}/blogs/${id}`;

  const article: Article = await (await fetch(URL)).json();

  return article;
};
