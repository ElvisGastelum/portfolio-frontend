const BASE_URL_ARTICLES_LIST = process.env.REACT_APP_BASE_URL_ARTICLES_LIST || 'https://newsapi.org/v2';

const getArticles = async ({ country = "mx" }) => {
  const url = `${BASE_URL_ARTICLES_LIST}/top-headlines?country=${country}&apiKey=6000bc1aeed64d458affdc47fb7ce2d5`;

  return await fetch(url)
    .then((res) => res.json())
    .then((res) => res.articles);
};

export { getArticles };
