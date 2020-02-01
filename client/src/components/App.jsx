import React from 'react'
import { useAppContext } from '../Context'
import Collection from './Collection'
import { useGetItems } from '../utils/useGetItems'

function App () {
  const [state, dispatch] = useAppContext()
  const { limit, offsetSize, data } = state
  useGetItems(limit, offsetSize, dispatch)

  return (
    <div className='App'>
      {data && <Collection />}
    </div>
  )
}

export default App
