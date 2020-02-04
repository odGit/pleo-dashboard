import React from 'react'
import Radium from 'radium'

const itemStyles = {
  container: {
    borderBottom: '1px solid #dedede',
    display: 'block',
    fontFamily: 'Source Sans Pro, sans-serif',
    margin: '0 0 16px 0',
    padding: '0 0 8px 0 ',
    position: 'relative'
  },
  left: {
    fontSize: '11pt',
    padding: '2%'
  },
  right: {
    fontSize: '10pt',
    position: 'absolute',
    right: '2%'
  }
}

function Item ({ name, value }) {
  return (
    <div className='item-container' style={itemStyles.container}>
      <span className='item-name' style={itemStyles.left}>{name.toUpperCase()}</span>
      <span className='item-value' style={itemStyles.right}>{value}</span>
    </div>
  )
}

export default Radium(Item)
