import { SUCCESS_INIT_DATA } from '../actions/shared';
import { ADD_TWEET } from '../actions/tweets';

// Users reducer.
const users = (state = {}, action) => {
  switch(action.type) {
    case SUCCESS_INIT_DATA:
      const { users } = action.data;
      return {
        ...state,
        ...users
      }
    case ADD_TWEET:
      return {
        ...state,
        [action.tweet.author]: {
          ...state[action.tweet.author],
          tweets: [...state[action.tweet.author].tweets, action.tweet.id]
        }
      }
    default:
      return state;
  }
};

export default users;