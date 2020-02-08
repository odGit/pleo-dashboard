import React from 'react'
import Radium, { StyleRoot } from 'radium'

import { useAppContext } from '../Context'
import Collection from './Collection'
import { useGetItems } from '../utils/useGetItems'
import ReceiptModal from './ReceiptModal'
import ControlsBar from './ControlsBar'

const componentStyles = {
  minWidth: '285px'
}

function App () {
  const [state, dispatch] = useAppContext()
  const { limit, offsetSize, data, showModal } = state
  useGetItems(limit, offsetSize, dispatch)

  return (
    <StyleRoot>
      <div className='App' style={componentStyles}>
        <ControlsBar />
        {showModal && <ReceiptModal />}
        {data && <Collection expenses={data} />}
      </div>
    </StyleRoot>
  )
}

export default Radium(App)
