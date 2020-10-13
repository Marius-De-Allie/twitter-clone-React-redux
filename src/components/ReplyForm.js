import React, { useState } from 'react';

const ReplyForm = () => {
  const [reply, setReply] = useState('');

  const replyChange = evt => {
    setReply(evt.target.value);
  };

  return (
    <form>
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