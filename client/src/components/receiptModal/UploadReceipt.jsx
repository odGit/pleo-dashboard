import React, { useState, useEffect, useRef } from 'react'
import IconButton from '../atoms/IconButton'
import { ICONS } from '../../enums/icon-svgs'
import { useAppContext } from '../../Context'
import { postReceipt } from '../../utils/postReceipt'

function UploadReceipt () {
  const [img, setImg] = useState()
  const [canSubmit, setCanSubmit] = useState(false)
  const didMountRef = useRef(false)
  const [state, dispatch] = useAppContext()

  function handleChange (event) {
    setImg(event.target.files[0])
    setCanSubmit(true)
  }

  useEffect(() => {
    if (didMountRef.current) {
      console.log('IMG changed!', img)
    } else {
      didMountRef.current = true
    }
  }, [img])

  function handelSubmit (event) {
    event.preventDefault()
    setCanSubmit(false)
    postReceipt(img, state.activeItem, dispatch)
  }

  return (
    <div className='receipt-image-uploader'>
      <div className='helper-text'>
        You can upload your receipt as a file in JPEG or PNG format.
      </div>
      <form onSubmit={(e) => handelSubmit(e)}>
        <label> Upload file: </label>
        <input
          type='file'
          accept='image/png, image/jpeg'
          limit='102400'
          onChange={(e) => handleChange(e)}
        />
        <IconButton
          disabled={!canSubmit}
          icon={ICONS.SAVE}
          onClick={(e) => handelSubmit(e)}
        />
      </form>
    </div>
  )
}

export default UploadReceipt
