import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Label from '../atoms/Label'
import { COLORS } from '../../enums/colors'

const merchantStyles = {
  backgroundColor: COLORS.ORANGE,
  borderRadius: '60px 5px',
  color: 'white',
  fontFamily: 'monospace',
  fontSize: '1.5em',
  lineHeight: '2em',
  textAlign: 'center',
  width: '210px'
}

interface Props {
  name: string
}

function Merchant ({ name }: Props): JSX.Element {
  return (
    <Label
      classes='card-merchant'
      label={name}
      styles={merchantStyles}
    />
  )
}

Merchant.propTypes = {
  name: PropTypes.string.isRequired
}

export default Radium(Merchant)
