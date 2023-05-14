export const ArticleList = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((objectId, url, title) => (
          <li key={objectId}>
            <a href={url} target="_blank" rel="noreferrer noopener"></a>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
