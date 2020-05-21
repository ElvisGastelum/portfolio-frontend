import React from "react";
import { Articles as IArticles } from "../../types";

interface ArticlesProps {
  articles: IArticles;
}

export const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return <div></div>;
};
