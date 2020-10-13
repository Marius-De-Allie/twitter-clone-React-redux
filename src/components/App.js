import * as React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import handleGetInitialData from '../redux/actions/shared';
import Homepage from './Homepage';
import TweetPage from './TweetPage';

export default function App () {
  // Gain access to redux store's dispatch method.
  const dispatch = useDispatch();

  // Fetch all users and tweets from backend API.
  React.useEffect(() => {
    dispatch(handleGetInitialData());
  }, [dispatch]);

  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/tweet/:tweetId" component={TweetPage} />
          <Route path="/new" render={() => <p>NewTweetPage</p>} />
          <Route render={() => <p>404 Page</p>} />
        </Switch>
      </Router>
    </div>
  )
}