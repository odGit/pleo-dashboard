import React from 'react'
import Radium from 'radium'

import IconButton from './IconButton'
import { useAppContext } from '../../Context'
import { COLORS } from '../../enums/colors'
import { closeModal } from '../../ducks/actions'
import { ICONS } from '../../enums/icon-svgs'

const modalStyles = {
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: COLORS.TRANSPARENT,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    zIndex: 3
  },
  inner: {
    minWidth: '240px',
    width: '60%',
    height: '60%',
    background: 'white',
    // h2: {
    //   borderWidth: '1px',
    //   borderStyle: 'solid',
    //   borderColor: COLORS.DARKGREY,
    //   padding: '1rem',
    //   margin: '0'
    // }
  },
  closeButton: {
    float: 'right',
    margin: 0,
    backgroundColor: 'white',
    padding: 0,
    borderWidth: 0,
    color: COLORS.GREYBLUE
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
        <section className='modal-main'>
          {errorMessage && <div style={modalStyles.errorMessage} className='errorMessage'>{errorMessage}</div>}
          {children}
        </section>
      </div>
    </div>
  )
}

export default Radium(InnerModal)
