import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const ReplyForm = (props) => {
  const [reply, setReply] = useState('');

  const replyChange = evt => {
    setReply(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('SUBMITTED');
  };

  console.log('REPLY_FORM', props);
  return (
    <form
      onSubmit={handleSubmit}
    >
      <textarea
        value={reply}
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