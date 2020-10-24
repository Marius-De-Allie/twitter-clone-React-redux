import { saveLikeToggle, saveTweet } from '../../utils/api';

// ACTION TYPES
const TOGGLE_LIKE = 'TOGGLE_LIKE';
const ADD_TWEET = 'ADD_TWEET';
const ADD_REPLY = 'ADD_REPLY';

// ACTION CREATORS.
const toggleLike = ({ id, hasLiked, authedUser }) => ({
  type: TOGGLE_LIKE,
  id,
  hasLiked,
  authedUser
});

// AddTweet action creator.
const addTweet = (tweet) => ({
  type: ADD_TWEET,
  tweet
});

const addReply = (tweetId, replyId) => ({
  type: ADD_REPLY,
  tweetId,
  replyId
});

/*************TODO: UPDATE THUNK ACTION CREATOR TO DO OPTIMISTIC UPDATE ********************/
// THUNK ACTION CREATORS.
const handleToggleLike = (toggleObj) => {
  return (dispatch) => {
    // Optimistically toggle like.
    dispatch(toggleLike(toggleObj));

    // call async api function.
    saveLikeToggle(toggleObj)
    // dispatch toggleLike action to reverse change if request fails.
      .catch((e) => {
        console.log(e);
        dispatch((toggleLike(toggleObj)));
        // TODO - ADD action for likefail error.
      })
  }
};

const handleAddTweet = (id = null, tweetInfo) => {
  return(dispatch) => {
    // call async api function to save new tweet.
    saveTweet(tweetInfo)
    // Dispatch plain action object to add tweet if request successful.
      .then((tweet) => {
        dispatch(addTweet(tweet));
        // 1. Check whether the new tweet is a reply to an existing tweet.
        if(tweet.replyingTo !== null) {
          // 2. if so, dispatch ADD_REPLY action.
          dispatch(addReply(id, tweet.id));
        }
      })
      .catch((e) => console.log(e));
  }
};

export {
  handleToggleLike as default,
  handleAddTweet,
  TOGGLE_LIKE,
  ADD_TWEET,
  ADD_REPLY
};