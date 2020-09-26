import * as React from 'react'
import { useDispatch } from 'react-redux';
import handleGetInitialData from '../redux/actions/shared'

export default function App () {
  // Gain access to redux store's dispatch method.
  const dispatch = useDispatch();

  // Fetch all users and tweets from backend API.
  React.useEffect(() => {
    dispatch(handleGetInitialData());
  }, [dispatch]);

  return (
    <div className='container'>
      Redux Course Curriculum
    </div>
  )
}