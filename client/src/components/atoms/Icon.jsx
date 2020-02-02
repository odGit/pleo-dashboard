import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import { COLORS } from '../../enums/colors'
import { ICONSIZES } from '../../enums/icon-sizes'

function Icon ({ icon, color, size, noStyles }) {
  const iconStyling = {
    display: 'inline-block',
    verticalAlign: 'middle',
    fill: color
  }
  return (
    <svg
      dangerouslySetInnerHTML={{ __html: icon }}
      style={noStyles ? {} : iconStyling}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      preserveAspectRatio='xMidYMid meet'
    />
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  colors: PropTypes.string,
  noStyles: PropTypes.bool
}

Icon.defaultProps = {
  size: ICONSIZES.CONTAIN,
  color: COLORS.DEBUG,
  noStyles: false
}

export default Radium(Icon)
