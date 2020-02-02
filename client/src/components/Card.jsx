import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Amount from './card/Amount'
import Merchant from './card/Merchant'
import User from './card/User'
import TimeStamp from './card/Timestamp'
import Comment from './card/Comment'
import Receipt from './card/Receipt'

import { COLORS } from '../enums/colors'

const cardStyles = {
  width: '210px',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: COLORS.GRASS,
  padding: '10px'
}

function Card ({ expense }) {
  const { id, amount, merchant, user, date, comment, receipts } = expense
  return (
    <div key={id} className='expense-card' style={cardStyles}>
      <Merchant name={merchant} />
      <User name={user} />
      <TimeStamp date={date} />
      <Comment
        comment={comment}
        itemId={id}
      />
      <Amount
        amount={amount.value}
        currency={amount.currency}
      />
      <Receipt
        id={id}
        receipts={receipts}
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
