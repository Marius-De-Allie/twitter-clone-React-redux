import { SUCCESS_INIT_DATA } from '../actions/shared';

// Tweets reducer.
const tweets = (state = {}, action) => {
  switch(action.type) {
    case SUCCESS_INIT_DATA:
      const { tweets } = action.data;
      return {
        ...state,
        ...tweets
      }
    default:
      return state;
  }
};

export default tweets;