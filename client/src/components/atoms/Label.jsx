import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

const labelStyles = {
  fontSize: '1em',
  lineHeight: '2em',
  textAlign: 'center',
  flex: 1
}

const Label = ({
  classes,
  label,
  styles
}) => (
  <div
    className={classes}
    style={styles ? { ...labelStyles, ...styles } : labelStyles}
  >
    {label}
  </div>
)

Label.propTypes = {
  classes: PropTypes.string,
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  label: PropTypes.string.isRequired
}

Label.defaultProps = {
  styles: null,
  classes: ''
}

export default Radium(Label)
