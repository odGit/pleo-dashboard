import React, { useState } from 'react'
import Radium from 'radium'

import IconButton from '../atoms/IconButton'
import { useAppContext } from '../../Context'

import { ICONS } from '../../enums/icon-svgs'
import { COLORS } from '../../enums/colors'
import { postReceipt } from '../../utils/postReceipt'
import { toggleSaveBtn } from '../../ducks/actions'

const uploadStyles = {
  main: {
    padding: '5%'
  },
  fileInput: {
    borderColor: COLORS.LIGHTGREY,
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px',
    margin: '15px',
    cursor: 'pointer'
  },
  previewImg: {
    textAlign: 'center',
    margin: '5px 15px',
    height: '200px',
    width: '500px',
    borderColor: COLORS.GREY,
    borderWidth: '1px',
    borderStyle: 'solid',
  },
  img: {
    width: '100%',
    height: '100%'
  },
  previewText: {
    width: '100%',
    margin: '20px 0 0 0'
  },
  submitButton: {
    padding: '1% 2%',
    margin: '0 0 0 10px',
    fontWeight: 700,
    fontSize: '10pt',
    ':disabled': {
      backgroundColor: COLORS.TRANSPARENT,
      borderColor: '#FFF',
      color: COLORS.LIGHTGREY
    }
  }
}

function UploadReceipt () {
  const [img, setImg] = useState()
  const [state, dispatch] = useAppContext()
  const [imgPreviewUrl, setImgUrl] = useState()

  function handleChange (event) {
    const file = event.target.files[0]
    setImg(file)
    dispatch(toggleSaveBtn(true))

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImgUrl(reader.result)
    }
  }

  function handelSubmit (event) {
    event.preventDefault()
    postReceipt(img, state.activeItem, dispatch)
  }

  return (
    <div className='receipt-image-uploader' style={uploadStyles.main}>
      <div className='helper-text'>
        You can upload your receipt as a file in JPEG or PNG format.
      </div>
      <form onSubmit={(e) => handelSubmit(e)}>
        <label> File to upload: </label>
        <input
          className='file-input'
          style={uploadStyles.fileInput}
          type='file'
          accept='image/png, image/jpeg'
          limit='102400'
          onChange={(e) => handleChange(e)}
        />
        <IconButton
          disabled={!state.canSave}
          icon={ICONS.SAVE}
          type='submit'
          onClick={(e) => handelSubmit(e)}
          styles={uploadStyles.submitButton}
        />
      </form>
      <div className='image-preview' style={uploadStyles.previewImg}>
        {imgPreviewUrl ? (
          <img src={imgPreviewUrl} style={uploadStyles.img} />
        ) : (
          <div className='previewText' style={uploadStyles.previewText}>
            Please select a file
          </div>
        )}
      </div>
    </div>
  )
}

export default Radium(UploadReceipt)
