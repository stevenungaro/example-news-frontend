/* eslint-disable react/prop-types */
export function ArticlesIndex(props) {
  return (
    <div>
      <h1>Hey check out these articles!</h1>
      {props.articles.map((article) => (
        <div key={article.title}>
          <img src={article.urlToImage} />
          <h2>{article.title}</h2>
          <h3>{article.author}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}
