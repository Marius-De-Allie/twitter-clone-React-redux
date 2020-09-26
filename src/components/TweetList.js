import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TweetItem from './TweetItem';

const TweetList = () => {
  // Retrieve tweets peice of state from redux store.
  const tweets = useSelector((state) => state.tweets);
  const dispatch = useDispatch();

  // Create array of tweets objects, sorted by creation date.
  let tweetArray = Object.keys(tweets).map((id) => tweets[id]).sort((a, b) => b.timestamp - a.timestamp);

  return (
    <React.Fragment>
      <h2>tweets</h2>
      <ul>
        {tweetArray.map((tweet) => <TweetItem key={tweet.id} tweet={tweet} />)}

      </ul>
    </React.Fragment>
  );
};

export default TweetList;