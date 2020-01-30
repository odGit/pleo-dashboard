import React, { useReducer, useContext } from 'react'
import reducer from './ducks/reducer'
import { initialState } from './ducks/initialState'

const StateContext = React.createContext()

function StateProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

function useAppContext () {
  return useContext(StateContext)
}

export { StateProvider, useAppContext }
