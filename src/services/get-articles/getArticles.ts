import { Articles } from "../../types";

const URL_BASE =
  process.env.REACT_APP_STRAPI_URL_BASE || "http://localhost:1337";

export const getArticles = async () => {
  const URL = `${URL_BASE}/blogs`;

  const articles: Articles = await (await fetch(URL)).json();

  return articles;
};
