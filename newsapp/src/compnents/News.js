import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./news.css";
import Loader from "./Loading";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    const { page } = this.state;
    this.setState({ loading: true });
    try {
      let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c880f1af66974d4d91043f8724b45b1e&page=${page}&pageSize=9`;
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let data = await response.json();
      this.setState({
        articles: data.articles,
        loading: false,
        totalArticles: response.totalResults,
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
      this.setState({ loading: false });
    }
  };

  handlePrevClick = () => {
    this.setState(
      (prevState) => ({
        page: Math.max(prevState.page - 1, 1),
      }),
      this.fetchArticles
    );
  };

  handleNextClick = () => {
    if (this.state.page + 1 > Math.ceil(this.totalResults / 9)) {
    } else {
      this.setState(
        (prevState) => ({
          page: prevState.page + 1,
        }),
        this.fetchArticles
      );
    }
  };

  render() {
    const { articles, loading, page } = this.state;

    if (loading) {
      return <Loader />;
    }

    return (
      <div className="gradient-background">
        {" "}
        <div className="container my-3">
          <h2>Top Headlines</h2>
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={article.title ? article.title.slice(0, 45) : ""}
                  description={
                    article.description ? article.description.slice(0, 88) : ""
                  }
                  imgurl={article.urlToImage}
                  newsUrl={article.url}
                />
              </div>
            ))}
          </div>
          <div className="container d-flex justify-content-center my-3">
            <button
              type="button"
              disabled={page <= 1}
              className="btn btn-dark mx-2"
              onClick={this.handlePrevClick}
            >
              Prev
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
