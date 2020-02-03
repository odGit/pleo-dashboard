import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Icon from './Icon'
import Button from './Button'

import { COLORS } from '../../enums/colors'

const componentStyles = {
  backgroundColor: '#FFF',
  borderColor: COLORS.GRASS,
  borderRadius: '5px',
  borderStyle: 'solid',
  borderWidth: '1px',
  color: COLORS.ORANGE,
  dispaly: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContnet: 'flex-start',
  margin: '0 0.7em 0 0',
  ':hover': {
    backgroundColor: COLORS.TRANSPARENT,
    cursor: 'pointer',
  },
  ':disabled': {
    backgroundColor: COLORS.TRANSPARENT,
    borderColor: '#FFF',
    color: COLORS.GRASS
  }
}

function IconButton ({ icon, onClick, size, styles, disabled, type }) {
  return (
    <Button
      onClick={onClick}
      styles={styles ? { ...componentStyles, ...styles } : componentStyles}
      disabled={disabled}
      type={type}
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
