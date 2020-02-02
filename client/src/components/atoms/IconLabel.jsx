import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Icon from './Icon'
import { ICONSIZES } from '../../enums/icon-sizes'

const IconLabelStyles = {
  base: {
    float: 'left',
    lineHeight: '2em',
    paddingLeft: '1em',
    // width: '90%'
  },
  textBlock: {
    paddingLeft: '0.1em',
    fontSize: '1em',
    textAlign: 'center',
    flex: 1
  }
}

const IconLabel = ({
  classes,
  icon,
  label,
  styles
}) => (
  <div className={classes} style={styles || IconLabelStyles.base}>
    <Icon icon={icon} noStyles size={ICONSIZES.LABEL} />
    <span className={`${classes}-icon`} style={styles || IconLabelStyles.textBlock}>
      {label}
    </span>
  </div>
)

IconLabel.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

IconLabel.defaultProps = {
  classes: {},
  styles: null
}

export default Radium(IconLabel)
