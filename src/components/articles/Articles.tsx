import React from "react";
import { useArticles } from "../../hooks/use-articles";
import { Article } from "../article/Article";

export const Articles: React.FC = () => {
  const { articles, isLoaded } = useArticles();

  return (
    <>
      {isLoaded ? (
        articles.map((article) => (
          <Article key={article.id} article={article} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
