import React from 'react';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  const onAddUpvote = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: 'POST',
    });
    const body = await result.json();
    setArticleInfo(body);
  };

  return (
    <div id='upvotes-section'>
      <button onClick={() => onAddUpvote()}>Add upvote</button>
      <code>This post has been upvoted {upvotes} times</code>
    </div>
  );
};

export default UpvotesSection;
