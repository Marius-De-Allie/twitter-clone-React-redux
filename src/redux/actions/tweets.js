import { saveLikeToggle } from '../../utils/api';

// ACTION TYPES
const TOGGLE_LIKE = 'TOGGLE_LIKE';
const ADD_TWEET = 'ADD_TWEET';

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

/*************TODO: UPDATE THUNK ACTION CREATOR TO DO OPTIMISTIC UPDATE ********************/
// Thunk action creator.
const handleToggleLike = (toggleObj) => {
  return (dispatch) => {

    // call async api function.
    saveLikeToggle(toggleObj)
    // dispatch plain action.
      .then(() => dispatch(toggleLike(toggleObj)))
      .catch((e) => console.log(e))
  }
};

export {
  handleToggleLike as default,
  TOGGLE_LIKE,
  ADD_TWEET
};