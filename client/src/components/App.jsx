import React from 'react'
import Radium, { StyleRoot } from 'radium'

import { useAppContext } from '../Context'
import Collection from './Collection'
import { useGetItems } from '../utils/useGetItems'
import ReceiptModal from './ReceiptModal'

function App () {
  const [state, dispatch] = useAppContext()
  const { limit, offsetSize, data, showModal } = state
  useGetItems(limit, offsetSize, dispatch)

  return (
    <StyleRoot>
      <div className='App'>
        {showModal && <ReceiptModal />}
        {data && <Collection expenses={data} />}
      </div>
    </StyleRoot>
  )
}

export default Radium(App)
