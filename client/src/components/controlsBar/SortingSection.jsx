import React from 'react'
import Radium from 'radium'

import { useAppContext } from '../../Context'
import { applySorting } from '../../ducks/actions'
import { SORTING_OPTIONS } from '../../utils/sortingFn'
import Input from '../atoms/Input'

function SortingSection () {
  const [state, dispatch] = useAppContext()

  return (
    <Input
      classes='controls-section-sorting'
      defaultValues={state.sortBy}
      handleChange={event => dispatch(applySorting(event.target.value))}
      labelName='Sort'
      options={SORTING_OPTIONS}
      type='radio'
    />
  )
}

export default Radium(SortingSection)
