import React from 'react'
import Radium from 'radium'

import IconButton from './IconButton'
import { useAppContext } from '../../Context'
import { COLORS } from '../../enums/colors'
import { closeModal } from '../../ducks/actions'
import { ICONS } from '../../enums/icon-svgs'
import { OVERLAYS } from '../../enums/overlay-index'

const modalStyles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: COLORS.TRANSPARENT,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    zIndex: OVERLAYS.MODAL
  },
  inner: {
    background: 'white',
    left: '50%',
    maxWidth: '80%',
    minWidth: '300px',
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  closeButton: {
    float: 'right',
    margin: 0,
    padding: '1% 2%',
    position: 'relative',
    right: '-1em',
    top: '-1em',
  },
  errorMessage: {
    color: COLORS.ERROR,
    padding: '2%'
  }
}

function InnerModal ({ type, children }) {
  const [state, dispatch] = useAppContext()
  const { errorMessage } = state
  return (
    <div className='modal' style={modalStyles.modal}>
      <div className='inner-modal' style={modalStyles.inner}>
        <IconButton
          styles={modalStyles.closeButton}
          onClick={(e) => dispatch(closeModal())}
          icon={ICONS.CLOSE}
        />
        {errorMessage && <div style={modalStyles.errorMessage} className='errorMessage'>{errorMessage}</div>}
        {children}
      </div>
    </div>
  )
}

export default Radium(InnerModal)
