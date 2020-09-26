import React from 'react';
import { Link } from 'react-router-dom';

const TweetItem = ({ tweet }) => (
  <li>
    <div style={{border: 'solid 1px red', margin: '20px'}}>
      <p>{tweet.author}</p>
      <p>{tweet.timestamp}</p>
      <p>{tweet.text}</p>
      <div className='icons-container'>
        <span>{`replies: ${tweet.replies.length}, `}</span><span>{`likes: ${tweet.likes.length}`}</span>
      </div>
    </div>
  </li>
);

export default TweetItem;