import React from 'react'
import Radium from 'radium'

import { useAppContext } from '../../Context'
import IconButton from '../atoms/IconButton'
import Label from '../atoms/Label'
import { ICONS } from '../../enums/icon-svgs'
import { changePage } from '../../ducks/actions'

const pageStyles = {
  item: {
    display: 'inline-flex',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    '@media only screen and (max-width: 779px) and (min-width: 581px)': {
      gridColumn: '2 / 3'
    }
  }
}

function PageSection () {
  const [state, dispatch] = useAppContext()
  const { offsetSize, limit, total } = state

  const pageLabel = `${1 + offsetSize} - ${Math.min(offsetSize + limit, total)} of ${total}`

  return (
    <div className='control-section-page' style={pageStyles.item}>
      <IconButton
        icon={ICONS.BACK}
        onClick={() => dispatch(changePage(-1))}
        disabled={offsetSize === 0}
      />
      <Label classes='pages-label' label={pageLabel} />
      <IconButton
        icon={ICONS.FORWARD}
        onClick={() => dispatch(changePage(1))}
        disabled={Math.min(offsetSize + limit, total) === total}
      />
    </div>
  )
}

export default Radium(PageSection)
