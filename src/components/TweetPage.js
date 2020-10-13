import React from 'react';
import { useSelector } from 'react-redux';
import TweetItem from './TweetItem';
import ReplyForm from './ReplyForm';

const TweetPage = ({ match }) => {
  // Retrieve current tweet from redux store.
  const tweet = useSelector((state) => state.tweets[match.params.tweetId]);

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