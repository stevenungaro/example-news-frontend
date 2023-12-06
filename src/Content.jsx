import axios from "axios";
import { useState, useEffect } from "react";
import { ArticlesIndex } from "./ArticlesIndex";

export function Content() {
  const [articles, setArticles] = useState([]);

  const handleIndexArticles = () => {
    console.log("handleIndexArticles");
    axios.get("https://newsapi.org/v2/everything?q=tesla&apiKey=XXXX").then((response) => {
      console.log(response.data);
      setArticles(response.data.articles);
    });
  };

  useEffect(handleIndexArticles, []);

  return (
    <div>
      <main>
        <h1>Steven Page Neato</h1>
        <ArticlesIndex articles={articles} />
      </main>
    </div>
  );
}
