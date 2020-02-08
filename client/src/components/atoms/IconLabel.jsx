import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Icon from './Icon'
import { ICONSIZES } from '../../enums/icon-sizes'

const IconLabelStyles = {
  base: {
    float: 'left',
    lineHeight: '2em',
    paddingLeft: '1em'
  },
  textBlock: {
    paddingLeft: '0.1em',
    fontSize: '1em',
    textAlign: 'center'
  }
}

function IconLabel ({ classes, icon, label, styles }) {
  return (
    <div className={classes} style={styles ? { ...styles, ...IconLabelStyles.base } : IconLabelStyles.base}>
      <Icon icon={icon} noStyles size={ICONSIZES.LABEL} />
      <span className={`${classes}-icon`} style={IconLabelStyles.textBlock}>
        {label}
      </span>
    </div>
  )
}

IconLabel.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

IconLabel.defaultProps = {
  classes: {},
  styles: null
}

export default Radium(IconLabel)
