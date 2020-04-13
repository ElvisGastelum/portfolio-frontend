import React, { Component } from "react";

import ArticleDetails from "../ArticleDetails";
import PrevArticle from "../PrevArticle";

import image from './img/img-300x200.jpg';

const articles = [
  { title: "First Recomended Article", description: "Prev description 1" },
  { title: "Second Recomended Article", description: "Prev description 2" },
  { title: "Third Recomended Article", description: "Prev description 3" },
];

const hashCode = function(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

console.log(articles.map(a => hashCode(a)))

export default class Article extends Component {
  render() {
    return (
      <div className="h-100 pl-4 pr-4">
        <div className="title text-center pt-3 pb-1">
          <h1>Article Name</h1>
        </div>
        <main className="h-100 d-flex">
          <div className="w-75 m-2">
            <ArticleDetails subtitle="This is a incredible subtitle!">
              <div className="pb-3">
                <img src={image} alt="Lorem Pic" className="img-thumbnail mx-auto d-block"/>
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
              {articles.map((article, index) => (
                <PrevArticle
                  key={index}
                  title={article.title}
                  description={article.description}
                />
              ))}
            </aside>
          </div>
        </main>
      </div>
    );
  }
}
