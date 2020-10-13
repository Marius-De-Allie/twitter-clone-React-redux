import React from 'react';
import { useSelector } from 'react-redux';
import TweetItem from './TweetItem';

const TweetPage = ({ match }) => {
  // Retrieve current tweet from redux store.
  const tweet = useSelector((state) => state.tweets[match.params.tweetId]);

  return (
    <div>
      {tweet.id}
      TweetItem
      ReplayForm
    </div>
  );
};

export default TweetPage;