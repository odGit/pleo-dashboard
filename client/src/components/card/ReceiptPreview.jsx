import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import IconButton from '../atoms/IconButton'
import { useAppContext } from '../../Context'
import { ICONS } from '../../enums/icon-svgs'
import { openModal } from '../../ducks/actions'

const previewStyles = {
  flexDirection: 'row',
  float: 'right',
  height: '35px',
  justifyContent: 'center',
  margin: '2% 0 0 0',
  width: '100px'
}

function ReceiptPreview ({ id, receipts }) {
  const [, dispatch] = useAppContext()
  const noReceipts = (receipts.length === 0)

  return (
    <IconButton
      icon={noReceipts ? ICONS.ADD : ICONS.FILE}
      styles={previewStyles}
      disabled={!noReceipts}
      onClick={() => dispatch(openModal(id, !noReceipts))}
    />
  )
}

ReceiptPreview.protoTypes = {
  id: PropTypes.string.isRequired,
  receipts: PropTypes.array
}

export default Radium(ReceiptPreview)
