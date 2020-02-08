import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Icon from './Icon'
import Button from './Button'

import { COLORS } from '../../enums/colors'

const componentStyles = {
  backgroundColor: '#FFF',
  borderColor: COLORS.GREYBLUE,
  borderRadius: '5px',
  borderStyle: 'solid',
  borderWidth: '1px',
  color: COLORS.ORANGE,
  dispaly: 'flex',
  margin: '0 0.7em',
  transition: 'transform .3s',
  ':hover': {
    transform: 'scale(1.09)',
    color: 'white',
    borderWidth: '2px',
    backgroundColor: COLORS.GREYBLUE,
    cursor: 'pointer'
  },
  ':disabled': {
    backgroundColor: COLORS.TRANSPARENT,
    borderColor: '#FFF',
    color: COLORS.GREY
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
