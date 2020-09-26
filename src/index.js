import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import './index.css'
import App from './components/App'
import reducer from './redux/reducers'

function ColorfulBorder() {
  return (
    <React.Fragment>
      <ul className='border-container'>
        <li className='border-item' style={{ background: 'var(--red)' }} />
        <li className='border-item' style={{ background: 'var(--blue)' }} />
        <li className='border-item' style={{ background: 'var(--pink)' }} />
        <li className='border-item' style={{ background: 'var(--yellow)' }} />
        <li className='border-item' style={{ background: 'var(--aqua)' }} />
      </ul>
    </React.Fragment>
  )
}

// Create redux store.
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <ColorfulBorder />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)