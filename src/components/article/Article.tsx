import React from "react";
import ReactMarkdown from "react-markdown";
import { Article as IArticle } from "../../types";
import 'bootstrap/dist/css/bootstrap.min.css';
import { parseImageUrl } from "../../helpers/parse-image-url";

interface ArticleProps {
  article: IArticle;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
  var coverSource = "";
  if(article.cover){
    coverSource = parseImageUrl(article.cover.url);
  }

  return (
    <div className="container">
      <h1 className="text-center">{article.title}</h1>
      {article.cover && 
        <img src={coverSource} className="mx-auto d-block" alt="cover" height="150"/>
      }
      <ReactMarkdown
        escapeHtml={false}
        source={article.content}
      />
    </div>
  );
};
