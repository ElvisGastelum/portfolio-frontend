import { hashCode } from "./index";

const BASE_URL =
  process.env.REACT_APP_BASE_URL_ARTICLES_LIST || "https://newsapi.org/v2";
const API_KEY =
  process.env.REACT_APP_BASE_API_KEY || "6000bc1aeed64d458affdc47fb7ce2d5";

const addId = (articles) => {
  articles.forEach((a) => {
    a.id = hashCode(a.publishedAt);
  });
};

export const getArticles = async ({ country = "mx" }) => {
  const url = `
    ${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}
  `;

  const response = await fetch(url);

  const json = await response.json();

  const { articles } = json;

  addId(articles);

  return articles;
};
