import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { StateProvider } from './Context'

function Main () {
  return (
    <StateProvider>
      <App />
    </StateProvider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
