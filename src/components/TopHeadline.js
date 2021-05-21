import React, { useEffect, useState } from "react";
import News from "./News";

const TopHeadline = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2021-04-21&sortBy=publishedAt&apiKey=ccf5ab0c03404bd6bf16d40f5126e13a";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div>
      <h2>news Available: {articles.length}</h2>
      {
          articles.map(article =><News article={article}></News>)
      }
    </div>
  );
};

export default TopHeadline;
