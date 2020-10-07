import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  { FaRegHeart, FaHeart } from 'react-icons/fa';

const TweetItem = ({ tweet }) => {

  const tweets = useSelector((state) => state.tweets);

  // Retreive author of tweet being replied to.
  let author;
  if(tweet.replyingTo) {
    author = tweets[tweet.replyingTo].author;
  };

  return console.log(tweet)||(
    <li>
      <div style={{border: 'solid 1px red', margin: '20px'}}>
        <p>{tweet.author}</p>
        <p>{tweet.timestamp}</p>
        {tweet.replyingTo && <p>{`replying to: @${author}`}</p>}
        <p>{tweet.text}</p>
        <div className='icons-container'>
          <span>{`replies: ${tweet.replies.length}, `}</span>
          <FaRegHeart>{`likes: ${tweet.likes.length}`}</FaRegHeart>
        </div>
      </div>
    </li>
  );
};

export default TweetItem;