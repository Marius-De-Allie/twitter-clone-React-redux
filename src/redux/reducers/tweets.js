import { SUCCESS_INIT_DATA } from '../actions/shared';
import { TOGGLE_LIKE, ADD_TWEET } from '../actions/tweets';

// Tweets reducer.
const tweets = (state = {}, action) => {
  switch(action.type) {
    case SUCCESS_INIT_DATA:
      const { tweets } = action.data;
      return {
        ...state,
        ...tweets
      }
    case TOGGLE_LIKE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked ? state[action.id].likes.filter(user => user !== action.authedUser)
            : [...state[action.id].likes, action.authedUser]
        }
      }
    case ADD_TWEET:
      return {
        ...state,
        [action.tweet.id]: action.tweet
      }
    default:
      return state;
  }
};

export default tweets;