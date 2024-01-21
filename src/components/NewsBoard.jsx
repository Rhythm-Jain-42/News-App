import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => setArticles(data.articles))
      .catch(error => setError(error.message));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      
      {error ? (
        <div className="alert alert-danger" role="alert">
          Error fetching news: {error}
        </div>
      ) : (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      )}
    </div>
  );
};

export default NewsBoard;
