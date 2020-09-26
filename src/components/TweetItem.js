import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TweetItem = ({ tweet }) => {

  const tweets = useSelector((state) => state.tweets);

  // Retreive author of tweet being replied to.
  let author;
  if(tweet.replyingTo) {
    author = tweets[tweet.replyingTo].author;
  };

  return (
    <li>
      <div style={{border: 'solid 1px red', margin: '20px'}}>
        <p>{tweet.author}</p>
        <p>{tweet.timestamp}</p>
        {tweet.replyingTo && <p>{`replying to: @${author}`}</p>}
        <p>{tweet.text}</p>
        <div className='icons-container'>
          <span>{`replies: ${tweet.replies.length}, `}</span><span>{`likes: ${tweet.likes.length}`}</span>
        </div>
      </div>
    </li>
  );
};

export default TweetItem;