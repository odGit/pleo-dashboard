import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import { CURRENCIES } from '../../enums/currencies'

const amountStyles = {
  general: {
    textAlign: 'left',
    padding: '2% 5%',
    float: 'left',
    height: '2em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  amount: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    position: 'relative'
  },
  inDkk: {
    fontSize: '0.8em',
    position: 'relative'
  }
}

function Amount ({ amount, currency }) {
  const applySign = Object.prototype.hasOwnProperty.call(CURRENCIES, currency) ? (
    `${amount} ${CURRENCIES[currency].symbol}`
  ) : (
    `${amount} in ${currency}`
  )
  const convertToDKK = (currency !== 'DKK' && Object.prototype.hasOwnProperty.call(CURRENCIES, currency)) ? (
    <div className='amount-DKK' style={amountStyles.inDkk}>
      {`${(amount * CURRENCIES[currency].rate).toFixed(2)} ${CURRENCIES.DKK.symbol}`}
    </div>
  ) : (
    null
  )

  return (
    <div className='amount-section' style={amountStyles.general}>
      <div className='ammount-orig' style={amountStyles.amount}>
        {applySign}
      </div>
      {convertToDKK}
    </div>
  )
}

Amount.propsTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}

export default Radium(Amount)
