import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import IconButton from '../atoms/IconButton'
import { useAppContext } from '../../Context'
import { COLORS } from '../../enums/colors'
import { ICONS } from '../../enums/icon-svgs'
import { openModal } from '../../ducks/actions'

const previewStyles = {
  borderColor: COLORS.GRASS,
  borderRadius: '5px',
  borderStyle: 'colid',
  borderWidth: '1px',
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
  const styling = noReceipts ? (
    { ...previewStyles, ...{ color: COLORS.ORANGE } }
  ) : (
    previewStyles
  )

  return (
    <IconButton
      icon={noReceipts ? ICONS.ADD : ICONS.FILE}
      styles={styling}
      disabled={false}
      onClick={() => dispatch(openModal(id, !noReceipts))}
    />
  )
}

ReceiptPreview.protoTypes = {
  id: PropTypes.string.isRequired,
  receipts: PropTypes.array
}

export default Radium(ReceiptPreview)
