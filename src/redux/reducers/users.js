import { SUCCESS_INIT_DATA } from '../actions/shared';

// Users reducer.
const users = (state = {}, action) => {
  switch(action.type) {
    case SUCCESS_INIT_DATA:
      const { users } = action.data;
      return {
        ...state,
        ...users
      }
    default:
      return state;
  }
};

export default users;