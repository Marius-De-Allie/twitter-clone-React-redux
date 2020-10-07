import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import  { FaRegHeart, FaHeart } from 'react-icons/fa';

const TweetItem = ({ tweet }) => {
  const tweets = useSelector((state) => state.tweets);
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();

  // Check whether authedUser has liked this tweet.
  const hasLiked = tweet.likes.includes(authedUser);

  // Handle Tweet like button click event.
  const onLikeClick = () => {
    

    console.log('like clicked!!')

  }


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
            {hasLiked
              ? <FaHeart style={{cursor: 'pointer' }}onClick={onLikeClick}></FaHeart>
              : <FaRegHeart style={{cursor: 'pointer' }}onClick={onLikeClick}></FaRegHeart>
            }
          <span>{` ${tweet.likes.length > 0 ? tweet.likes.length : '0'}`}</span>
        </div>
      </div>
    </li>
  );
};

export default TweetItem;