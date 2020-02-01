import React from 'react'
import Radium from 'radium'

import { useAppContext } from '../Context'
import Card from './Card'

const collectionStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 232px)',
  gridGap: '5px',
  justifyContent: 'center',
  alignItems: 'center'
}

const Collection = () => {
  const [state] = useAppContext()
  const expenses = state.data

  return (
    <div className='collection' style={collectionStyle}>
      {
        expenses.map((value, index) => (
          <Card
            key={index}
            expense={value}
          />
        ))
      }
    </div>
  )
}

export default Radium(Collection)
