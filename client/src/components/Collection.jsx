import React from 'react'
import Radium from 'radium'

import Card from './Card.tsx'

const collectionStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 232px)',
  gridGap: '5px',
  justifyContent: 'center',
  alignItems: 'center'
}

const Collection = ({ expenses }) => {
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
