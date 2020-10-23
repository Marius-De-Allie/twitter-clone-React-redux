import React from 'react';
import ReplyForm from './ReplyForm';

const NewTweet  = (props) => console.log('NEWTWEETID', props.match.params.tweetId)||(
  <div>
    <ReplyForm newTweet />
  </div>
);

export default NewTweet;