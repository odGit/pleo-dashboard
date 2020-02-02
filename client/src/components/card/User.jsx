import React from 'react'
import PropTypes from 'prop-types'

import IconLabel from '../atoms/IconLabel'
import { ICONS } from '../../enums/icon-svgs'

const User = ({ name }) => (
  <IconLabel
    classes='card-user-name'
    label={`${name.last} ${name.first}`}
    icon={ICONS.USER}
  />
)
User.propTypes = {
  name: PropTypes.shape({
    last: PropTypes.string,
    first: PropTypes.string
  }).isRequired
}

export default User
