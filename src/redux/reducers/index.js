
import { combineReducers } from 'redux';
import tweets from './tweets';
import users from './users';
import authedUser from './authedUser';
import error from './error';

export default combineReducers({
  users,
  tweets,
  authedUser,
  error
});

