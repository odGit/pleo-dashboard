import React from 'react'
import Radium from 'radium'

import { useAppContext } from '../../Context'
import Input from '../atoms/Input'
import { applySelect } from '../../ducks/actions'
import { SELECT_OPTIONS } from '../../utils/sortingFn'

function SelectSection () {
  const [state, dispatch] = useAppContext()

  return (
    <Input
      classes='controls-select-filter'
      defaultValues={state.select}
      handleChange={(event) => dispatch(applySelect(event.target.value, event.target.checked))}
      labelName='Filter'
      options={SELECT_OPTIONS}
      type='checkbox'
    />
  )
}

export default Radium(SelectSection)
