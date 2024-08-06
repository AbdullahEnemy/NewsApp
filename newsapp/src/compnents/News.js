import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Top HeadLines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="Ok"
              discription="Ok i am here"
              imgurl="..."
              newsUrl="todo"
            ></NewsItem>
          </div>
          <div className="col-md-4">
            <NewsItem></NewsItem>
          </div>
          <div className="col-md-4">
            <NewsItem></NewsItem>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
