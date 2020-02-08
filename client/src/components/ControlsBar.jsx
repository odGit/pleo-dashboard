import React from 'react'
import Radium from 'radium'

import SortingSection from './controlsBar/SortingSection'
import SelectSection from './controlsBar/SelectSection'
import PageSection from './controlsBar/PageSection'
import { COLORS } from '../enums/colors'

const barStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(287px, 1fr))',
  gridColumnGap: '10px',
  gridRowGap: '0',
  justifyContent: 'center',
  alignItems: 'end',
  position: 'sticky',
  top: '0px',
  margin: ' 0 0 10px 0',
  zIndex: 5,
  backgroundColor: COLORS.LIGHTGREY,
  /* Tablet Styles */
  '@media only screen and (min-width: 780px) and (max-width: 896px)': {
    gridTemplateColumns: '290px 270px 200px'
  }
}

function ControlsBar () {
  return (
    <div className='controls-bar' style={barStyles}>
      <SortingSection />
      <SelectSection />
      <PageSection />
    </div>
  )
}

export default Radium(ControlsBar)
