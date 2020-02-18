import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import IconButton from '../atoms/IconButton'
import { useAppContext } from '../../Context'
import { ICONS } from '../../enums/icon-svgs'
import { openModal } from '../../ducks/actions'
import { COLORS } from '../../enums/colors'

const previewStyles = {
  flexDirection: 'row',
  float: 'right',
  height: '35px',
  justifyContent: 'center',
  margin: '2% 0 0 0',
  width: '100px',
  ':disabled': {
    backgroundColor: COLORS.TRANSPARENT,
    borderColor: '#FFF',
    color: COLORS.GRASS
  }
}
interface Props {
  id: number;
  receipts: Array<string>
}

function ReceiptPreview ({ id, receipts }: Props): JSX.Element {
  const [, dispatch] = useAppContext()
  const noReceipts: boolean = (receipts.length === 0)

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
