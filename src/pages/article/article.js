import React, { Component } from "react";
import { animateScroll as scroll} from 'react-scroll';

import { AppContext } from "../../app-context";

import ArticleDetails from "../../components/article-details";
import PrevArticle from "../../components/prev-article";
import Loading from "../../components/loading";

class Article extends Component {
  static contextType = AppContext;

  findArticleById = (id) => {
    return this.context.articles.find((article) => {
      return article.id === parseInt(id);
    });
  };

  componentDidMount(){
    scroll.scrollToTop();
  }

  render() {
    const { articles, isLoading } = this.context;
    const { id } = this.props.match.params;

    const article = this.findArticleById(id);

    return (
      <div className="h-100 pl-4 pr-4">
        <div className="title text-center pt-3 pb-1">
          <h1>{isLoading ? <Loading /> : article.title}</h1>
        </div>
        <main className="h-100 d-flex">
          <div className="w-75 m-2">
            {isLoading ? <Loading /> : <ArticleDetails article={article} />}
          </div>
          <div className="w-25">
            <aside>
              {isLoading ? (
                <Loading />
              ) : (
                articles.map(
                  ({ id, title, description }, index) =>
                    index < 3 && (
                      <PrevArticle
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                      />
                    )
                )
              )}
            </aside>
          </div>
        </main>
      </div>
    );
  }
}

export default Article;
