import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((art) => art.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  useEffect(() => {
    const fetchData = async () => {
      // proxy http://localhost:8000/ defined in package.json, for DEVELOPMENT only
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFoundPage />;

  const otherArticles = articleContent.filter((art) => art.name !== name);

  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other articles: </h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
