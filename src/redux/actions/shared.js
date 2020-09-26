import { getInitialData } from '../../utils/api';

// ACTION TYPES.
const SUCCESS_INIT_DATA = 'SUCCESS_INIT_DATA';
const FAIL_INIT_DATA = 'FAIL_INIT_DATA';

const successInitData = data => ({
  type: SUCCESS_INIT_DATA,
  data
}); 

const failInitData = error => ({
  type: FAIL_INIT_DATA,
  error
});

// Thunk action creator.
const handleGetInitialData = () => {
  return (dispatch) => {
    getInitialData()
      .then((data) => {
        dispatch(successInitData(data));
      })
      .catch(() => {
        dispatch(failInitData('Unable to fetch data.'))
      })
  }
};

export { 
  handleGetInitialData as default,
  SUCCESS_INIT_DATA,
  FAIL_INIT_DATA,
};