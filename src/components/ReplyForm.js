import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddTweet } from '../redux/actions/tweets';

const ReplyForm = ({ match }) => {
  const [tweetText, setTweetText] = useState('');
  const author = useSelector(({ authedUser }) => authedUser);
  const dispatch = useDispatch();

  const replyChange = evt => {
    setTweetText(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // Create tweet object.
    const tweetInfo = {
      text: tweetText,
      author,
      replyingTo: match.params.tweetId
    };
    // dispatch handleAddTweet thunk action.
    dispatch(handleAddTweet(match.params.tweetId, tweetInfo));
    // Clear reply form text area field.
    setTweetText('');
    console.log('SUBMITTED');
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <textarea
        value={tweetText}
        placeholder="What's happening"
        onChange={replyChange}
      >
      </textarea>
      <input 
        type="submit"
        name="Submit"
      />
    </form>
  );
};

export default withRouter(ReplyForm);