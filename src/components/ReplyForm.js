import React, { useState } from 'react';

const ReplyForm = () => {
  const [reply, setReply] = useState('');

  const replyChange = evt => {
    setReply(evt.target.value);
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

export default ReplyForm;