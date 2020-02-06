import React from 'react'
import Radium from 'radium'

import { useAppContext } from '../../Context'
import Label from '../atoms/Label'
import { applySorting } from '../../ducks/actions'
import { SORTING_OPTIONS } from '../../utils/sortingFn'

const componentStyles = {
  display: 'flex',
  alignItems: 'center',
  borderRight: '1px solid grey',
  width: 'fit-contnet'
}

function SortingSection () {
  const [state, dispatch] = useAppContext()
  function handleChange (event) {
    dispatch(applySorting(event.target.value))
  }

  return (
    <div className='controls-section-sorting' style={componentStyles}>
      <Label label='Sort by' />
      {
        Object.entries(SORTING_OPTIONS)
          .map((entry, index) => {
            const [key, value] = entry
            return (
              <label key={`${key}-${index}`} htmlFor={`${key}Choice`}>
                <input
                  type='radio'
                  id={`${key}Choice`}
                  name='stringSort'
                  defaultChecked={state.sortBy === value}
                  value={value}
                  onChange={(evt) => handleChange(evt)}
                />
                {entry[1]}
              </label>

            )
          })
      }
    </div>
  )
}

export default Radium(SortingSection)
