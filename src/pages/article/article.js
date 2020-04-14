import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { AppContext } from "../../app-context";

import ArticleDetails from "../../components/article-details";
import PrevArticle from "../../components/prev-article";

class Article extends Component {
  static contextType = AppContext;
  render() {
    const articles = this.context;
    return (
      <div className="h-100 pl-4 pr-4">
        <div className="title text-center pt-3 pb-1">
          <h1>Article Name</h1>
        </div>
        <main className="h-100 d-flex">
          <div className="w-75 m-2">
            <ArticleDetails subtitle="This is a incredible subtitle!">
              <div className="pb-3">
                <img
                  src={undefined}
                  alt="Lorem Pic"
                  className="img-thumbnail mx-auto d-block"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                eius earum molestias qui tempora impedit ullam ut laudantium
                obcaecati quae odit sit harum sapiente consequatur nesciunt
                illum, molestiae odio laboriosam!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt laboriosam, ab accusamus eaque inventore modi
                voluptates suscipit, nihil veritatis repudiandae tenetur, velit
                sequi officiis qui ipsam! Accusamus repellendus asperiores
                dolores. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Laborum sequi repudiandae pariatur aliquid, harum iusto
                accusamus facilis! Aperiam illo sequi, inventore officiis
                ducimus molestiae repellat? Temporibus in quidem obcaecati
                earum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat laborum beatae quidem? Quia, vel in cupiditate delectus
                iste sequi itaque eaque fuga dolor harum voluptates. Expedita
                odit laboriosam quis totam.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt laboriosam, ab accusamus eaque inventore modi
                voluptates suscipit, nihil veritatis repudiandae tenetur, velit
                sequi officiis qui ipsam! Accusamus repellendus asperiores
                dolores. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Laborum sequi repudiandae pariatur aliquid, harum iusto
                accusamus facilis! Aperiam illo sequi, inventore officiis
                ducimus molestiae repellat? Temporibus in quidem obcaecati
                earum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat laborum beatae quidem? Quia, vel in cupiditate delectus
                iste sequi itaque eaque fuga dolor harum voluptates. Expedita
                odit laboriosam quis totam.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt laboriosam, ab accusamus eaque inventore modi
                voluptates suscipit, nihil veritatis repudiandae tenetur, velit
                sequi officiis qui ipsam! Accusamus repellendus asperiores
                dolores. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Laborum sequi repudiandae pariatur aliquid, harum iusto
                accusamus facilis! Aperiam illo sequi, inventore officiis
                ducimus molestiae repellat? Temporibus in quidem obcaecati
                earum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat laborum beatae quidem? Quia, vel in cupiditate delectus
                iste sequi itaque eaque fuga dolor harum voluptates. Expedita
                odit laboriosam quis totam.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt laboriosam, ab accusamus eaque inventore modi
                voluptates suscipit, nihil veritatis repudiandae tenetur, velit
                sequi officiis qui ipsam! Accusamus repellendus asperiores
                dolores. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Laborum sequi repudiandae pariatur aliquid, harum iusto
                accusamus facilis! Aperiam illo sequi, inventore officiis
                ducimus molestiae repellat? Temporibus in quidem obcaecati
                earum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat laborum beatae quidem? Quia, vel in cupiditate delectus
                iste sequi itaque eaque fuga dolor harum voluptates. Expedita
                odit laboriosam quis totam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                eius earum molestias qui tempora impedit ullam ut laudantium
                obcaecati quae odit sit harum sapiente consequatur nesciunt
                illum, molestiae odio laboriosam!
              </p>
            </ArticleDetails>
          </div>
          <div className="w-25">
            <aside>
              {articles.map(({id, title, description}) => (
                <PrevArticle
                  key={id}
                  title={title}
                  description={description}
                />
              ))}
            </aside>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Article);