import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

const commentStyles = {
  width: '190px',
  height: '1.8em',
  borderRadius: '5px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  ':focus': {
    height: '2.2em',
    outline: 'thin dotted'
  }
}

function Comment ({ comment, itemId }) {
  const [localComment, addComment] = useState(comment)

  return (
    <input
      type='text'
      placeholder='add a comment'
      onChange={event => { addComment(event.target.value)}}
      value={localComment}
      style={commentStyles}
    />
  )
}

Comment.propTypes = {
  comment: PropTypes.string,
  itemId: PropTypes.string.isRequired
}

Comment.defaultProps = {
  comment: null
}

export default Radium(Comment)