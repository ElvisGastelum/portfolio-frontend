import React from "react";
import { useArticles } from "../../hooks/use-articles";


export const Articles: React.FC = () => {
  const { articles, isLoaded } = useArticles();



  return (
    <>
      {isLoaded
        ? articles.map(article => {
          return <h3 key={article.id} >{article.title}</h3>
          })
        : <p>Loading...</p>
    }
    </>
  );
};
