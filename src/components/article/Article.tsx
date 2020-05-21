import React from "react";
import { Article as IArticle } from "../../types";

interface ArticleProps {
  article: IArticle;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
  return <div></div>;
};
