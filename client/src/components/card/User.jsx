import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import IconLabel from '../atoms/IconLabel'
import { ICONS } from '../../enums/icon-svgs'

const userStyles = {
  width: '80%'
}
function User ({ name }) {
  return (
    <IconLabel
      classes='card-user-name'
      label={`${name.last} ${name.first}`}
      icon={ICONS.USER}
      styles={userStyles}
    />
  )
}

User.propTypes = {
  name: PropTypes.shape({
    last: PropTypes.string,
    first: PropTypes.string
  }).isRequired
}

export default Radium(User)
