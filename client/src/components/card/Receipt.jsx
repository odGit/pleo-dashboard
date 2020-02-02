import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import IconButton from '../atoms/IconButton'
import { useAppContext } from '../../Context'
import { COLORS } from '../../enums/colors'
import { ICONS } from '../../enums/icon-svgs'

const receiptStyles = {
  button: {
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
}

function Receipt ({ id, receipts }) {
  const [, dispatch] = useAppContext()
  const noReceipts = (receipts.length !== 0)
  const styling = noReceipts ? (
    { button: { ...receiptStyles.button, ...{ color: COLORS.ORANGE } } }
  ) : (
    receiptStyles
  )

  return (
    <IconButton
      icon={noReceipts ? ICONS.ADD : ICONS.FILE}
      styles={styling}
      disabled={false}
      onClick={() => dispatch({ type: 'OPEN_MODAL', id: id, modalType: 'SHOW' })}
    />
  )
}

Receipt.protoTypes = {
  id: PropTypes.string.isRequired,
  receipts: PropTypes.array
}

export default Radium(Receipt)
