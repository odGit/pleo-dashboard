import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

const labelStyles = {
  fontSize: '1em',
  lineHeight: '2em',
  textAlign: 'center'
}

function Label ({ classes, label, styles }) {
  return (
    <div
      className={classes}
      style={styles ? { ...labelStyles, ...styles } : labelStyles}
    >
      {label}
    </div>
  )
}

Label.propTypes = {
  classes: PropTypes.string,
  label: PropTypes.string.isRequired,
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

Label.defaultProps = {
  classes: '',
  styles: null
}

export default Radium(Label)
