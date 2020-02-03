import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Icon from './Icon'
import Button from './Button'

import { COLORS } from '../../enums/colors'

const componentStyles = {
  flexGrow: 1,
  dispaly: 'flex',
  color: COLORS.GRASS,
  flexDirection: 'column',
  justifyContnet: 'flex-start',
  margin: '0 0.7em 0 0'
}

function IconButton ({ icon, onClick, size, styles, disabled }) {
  return (
    <Button
      onClick={onClick}
      styles={styles ? { ...componentStyles, ...styles } : componentStyles}
      disabled={disabled}
    >
      <Icon
        noStyles
        icon={icon}
        size={size}
      />

    </Button>
  )
}

IconButton.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

IconButton.defaultProps = {
  styles: null
}

export default Radium(IconButton)
