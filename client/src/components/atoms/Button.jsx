import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

function Button ({ children, classes, disabled, onClick, styles, type }) {
  return (
    <button
      style={styles}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.string
}

Button.defaultProps = {
  classes: '',
  disabled: false,
  styles: null,
  type: 'button'
}

export default Radium(Button)
