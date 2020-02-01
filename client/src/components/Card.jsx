import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Amount from './card/Amount'
import Label from './atoms/Label'
import IconLabel from './atoms/IconLabel'

import { COLORS } from '../enums/colors'
import { ICONS } from '../enums/icon-svgs'

const cardStyles = {
  card: {
    width: '210px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: COLORS.GRASS,
    padding: '10px'
  },
  merchant: {
    width: '210px',
    color: 'white',
    fontSize: '1.5em',
    lineHeight: '2em',
    textAlign: 'center',
    backgroundColor: COLORS.ORANGE,
    borderRadius: '60px, 5px',
    fontFamily: 'monospace'
  }
}

const Card = ({
  expense
}) => {
  const { id, amount, merchant, user } = expense
  return (
    <div key={id} className='expense-card' style={cardStyles.card}>
      <Label
        classes='card-merchant'
        label={merchant}
        styles={cardStyles.merchant}
      />
      <IconLabel
        classes='card-user-name'
        label={`${user.last} ${user.first}`}
        icon={ICONS.USER}
      />
      <Amount
        amount={amount.value}
        currency={amount.currency}
      />
    </div>
  )
}

Card.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string,
    amount: PropTypes.shape({
      value: PropTypes.string,
      currency: PropTypes.string
    }),
    date: PropTypes.string,
    merchant: PropTypes.string,
    receipts: PropTypes.array,
    comment: PropTypes.string,
    category: PropTypes.string,
    user: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
      email: PropTypes.string
    })
  }).isRequired
}

export default Radium(Card)
