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
    padding: '0 3%'
  },
  form: {
    display: 'flex',
    flexDirection: 'row'
  },
  fileInput: {
    alignSelf: 'center',
    borderColor: COLORS.GREYBLUE,
    borderRadius: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    cursor: 'pointer',
    padding: '3%',
    width: '80%'
  },
  previewImg: {
    borderColor: COLORS.LIGHTGREY,
    borderRadius: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    display: 'flex',
    justifyContent: 'center',
    margin: '5% auto',
    maxHeight: '210px',
    maxWidth: '385px',
    textAlign: 'center'
  },
  img: {
    maxWidth: '355px',
    maxHeight: '200px',
    width: 'auto',
    height: 'auto'
  },
  previewText: {
    width: '100%',
    margin: '20px 0'
  },
  submitButton: {
    margin: '0 0 0 5%'
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
    postReceipt(img, state.activeId, dispatch)
  }

  return (
    <div className='receipt-image-uploader' style={uploadStyles.main}>
      <form onSubmit={(e) => handelSubmit(e)} style={uploadStyles.form}>
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
          classes={'receiplt-upload-submit'}
          icon={ICONS.SAVE}
          type='submit'
          onClick={(e) => handelSubmit(e)}
          styles={uploadStyles.submitButton}
        />
      </form>
      <div className='image-preview' style={uploadStyles.previewImg}>
        {imgPreviewUrl ? (
          <img alt={img.name} src={imgPreviewUrl} style={uploadStyles.img} />
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
