import React from 'react';

const CommentsList = ({ comments }) => {
  return (
    <>
      <h3>Comments</h3>
      {comments ? (
        comments.map((comment, index) => (
          <div className='comment' key={index}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
          </div>
        ))
      ) : (
        <code>No comments available</code>
      )}
    </>
  );
};

export default CommentsList;
