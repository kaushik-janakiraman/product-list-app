import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Login from './components/login'

function App() {

  return (
    <React.Fragment>
      <Provider store={store}>
        <Login />
      </Provider>
    </React.Fragment>
  )
}

export default App
