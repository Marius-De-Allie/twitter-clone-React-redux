import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ReplyForm = ({ match }) => {
  const [tweetText, setTweetText] = useState('');
  const author = useSelector(({ authedUser }) => authedUser);

  const replyChange = evt => {
    setTweetText(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
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