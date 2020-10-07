import { saveLikeToggle } from '../../utils/api';

// ACTION TYPE
const TOGGLE_LIKE = 'TOGGLE_LIKE';

// Action creator.

const toggleLike = ({ id, hasLiked, authedUser }) => ({
  type: TOGGLE_LIKE,
  id,
  hasLiked,
  authedUser
});

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
  TOGGLE_LIKE
};