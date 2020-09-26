import { FAIL_INIT_DATA, SUCCESS_INIT_DATA } from '../actions/shared';

const error = (state = null, action) => {
  switch(action.type) {
    case SUCCESS_INIT_DATA:
      return null;
    case FAIL_INIT_DATA:
      return action.error;
    default:
      return state;
  }
};

export default error;