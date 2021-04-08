import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './store/reducers'

import Home from './components/Home'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default App
