import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Amount from './card/Amount'
import Merchant from './card/Merchant'
import User from './card/User'
import TimeStamp from './card/Timestamp'
import Comment from './card/Comment'
import ReceiptPreview from './card/ReceiptPreview'

import { COLORS } from '../enums/colors'
import { useAppContext } from '../Context'

const cardStyles = {
  item: {
    width: '210px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: COLORS.GRASS,
    padding: '10px'
  },
  select: {
    borderWidth: '3px',
    margin: '-2px'
  }
}
interface Props {
  expense: {
    id: number,
    amount: {
      value: number,
      currency: string
    },
    date: string, // TODO: Date type
    merchant: string,
    receipts: Array<string>,
    comment: string,
    category: string,
    user: {
      first: string,
      last: string,
      email: string
    }
  }
}

function Card ({ expense }: Props): JSX.Element {
  const { id, amount, merchant, user, date, comment, receipts } = expense
  const [state] = useAppContext()
  const { select } = state

  function shouldSelect () {
    if (select.length === 1) {
      return expense[select[0]].length !== 0
    } else if (select.length === 2) {
      return expense[select[0]].length !== 0 && expense[select[1]].length !== 0
    } else {
      return false
    }
  }

  return (
    <div
      key={id}
      className='expense-card'
      style={shouldSelect() ? { ...cardStyles.item, ...cardStyles.select } : cardStyles.item}
    >
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
      <ReceiptPreview
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
