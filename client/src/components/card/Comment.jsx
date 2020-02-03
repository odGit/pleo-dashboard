import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import { usePostComment } from '../../utils/usePostComment'
import { COLORS } from '../../enums/colors'

const commentStyles = {
  textInput: {
    width: '190px',
    height: '1.8em',
    borderRadius: '5px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    ':focus': {
      borderColor: COLORS.GRASS,
      outline: 'thin dotted',
      outlineColor: COLORS.LIGHTGREY
    }
  },
  charCount: {
    color: COLORS.GREY,
    fontFamily: 'monospace',
    fontSize: '0.8em',
    textAlign: 'right',
    margin: '0 5%'
  }
}

function Comment ({ comment, itemId }) {
  const [localComment, addComment] = useState(comment)
  const [isBlurry, setBlurry] = useState(false)

  const handleBlur = useCallback((event) => {
    const currentTarget = event.currentTarget
    setTimeout(function () {
      if (!currentTarget.contains(document.activeElement)) {
        setBlurry(true)
      }
    }, 0)
  }, [])

  usePostComment(isBlurry, localComment, comment, itemId)

  return (
    <div>
      <input
        maxLength='30'
        onBlur={handleBlur}
        onChange={event => { addComment(event.target.value) }}
        onFocus={event => setBlurry(false)}
        placeholder='add a comment'
        style={commentStyles.textInput}
        type='text'
        value={localComment}
      />
      <p className='character-counter' style={commentStyles.charCount}>
        {`${localComment.length} of 30`}
      </p>
    </div>
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
