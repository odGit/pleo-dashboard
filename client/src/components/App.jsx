import React from 'react'
import Radium, { StyleRoot } from 'radium'

import { useAppContext } from '../Context'
import Collection from './Collection'
import { useGetItems } from '../utils/useGetItems'

function App () {
  const [state, dispatch] = useAppContext()
  const { limit, offsetSize, data } = state
  useGetItems(limit, offsetSize, dispatch)

  return (
    <StyleRoot>
      <div className='App'>
        {data && <Collection />}
      </div>
    </StyleRoot>
  )
}

export default Radium(App)
