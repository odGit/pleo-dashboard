import React from 'react'
import Radium from 'radium'

import SortingSection from './controlsBar/SortingSection'

const barStyles = {
  width: '100%',
  minWidth: '260px',
  display: 'inline-flex',
  '@media only screen and (max-width: 500px)': {
    display: 'grid',
    backgroundColor: '#F09A9D' /* Red */
  },

  /* Tablet Styles */
  '@media only screen and (min-width: 501px) and (max-width: 960px)': {
    backgroundColor: '#F5CF8E' /* Yellow */
  },

  /* Desktop Styles */
  '@media only screen and (min-width: 961px)': {
    backgroundColor: '#B2D6FF' /* Blue */
  }
}

function ControlsBar () {
  return (
    <div className='controls-bar' style={barStyles}>
      <SortingSection />
    </div>
  )
}

export default Radium(ControlsBar)
