import React from 'react'
import Radium from 'radium'

import InnerModal from './atoms/InnerModal'
import Label from './atoms/Label'
import Item from './atoms/Item'
import UploadReceipt from './receiptModal/UploadReceipt'
import { useAppContext } from '../Context'

const componentStyle = {
  container: {
    padding: '0 5%'
  },
  label: {
    fontSize: '20pt',
    padding: '0 10px'
  }
}

function ReceiptModal () {
  const [state] = useAppContext()
  const { activeData } = state
  const toShow = ['id', 'merchant', 'user', 'date', 'amount']

  return (
    <InnerModal>
      <div className='expense-overview' style={componentStyle.container}>
        <Label classes='expense-overview-label' label='Overview' styles={componentStyle.label} />
        {
          toShow.map(x => (
            (typeof activeData[x] === 'object') ? (
              Object.entries(activeData[x]).map((entry) => (
                <Item
                  key={`item-${x}-${entry[0]}`}
                  name={entry[0]}
                  value={entry[1]}
                />
              ))
            ) : (
              <Item
                key={`item-${x}`}
                name={x}
                value={activeData[x]}
              />
            )
          ))
        }
      </div>
      <UploadReceipt />
    </InnerModal>
  )
}
export default Radium(ReceiptModal)
