import React from 'react';
import { useSelector } from 'react-redux';
import TweetItem from './TweetItem';
import ReplyForm from './ReplyForm';

const TweetPage = ({ match }) => {
  // Retrieve current tweet from redux store state.
  const tweet = useSelector((state) => state.tweets[match.params.tweetId]);
  // Retrieve current tweets peice of state from redux store.
  const tweets = useSelector((state) => state.tweets);

  let replies;
  const repliesArray = (() => {
    if(tweet) {
      replies = tweet.replies.map(replyId => tweets[replyId])
        .sort((a, b) => b.timestamp - a.timestamp);
    }
  })();

  return (
    <div>
      {tweet ? (
        <React.Fragment>
          <TweetItem tweet={tweet} />
          <ReplyForm />
          
        </React.Fragment>
        ) 
        : <h2>Loading</h2>
      }
    </div>
  );
};

export default TweetPage;