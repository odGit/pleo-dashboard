import React from 'react'
import PropTypes from 'prop-types'

import IconLabel from '../atoms/IconLabel'
import { DATEOPTIIONS } from '../../enums/date-options'
import { ICONS } from '../../enums/icon-svgs'

interface Props {
  date: string
}
function TimeStamp ({ date }: Props) : JSX.Element {
  const dateFormated: string = new Date(date).toLocaleDateString('en-gb', DATEOPTIIONS)
  const [ddMyyyy, hhMM]: Array<string> = dateFormated.split(',')

  return (
    <div className='purchase-date'>
      <IconLabel
        classes='date-of-purchase'
        icon={ICONS.CALENDAR}
        label={ddMyyyy}
      />
      <IconLabel
        classes='time-of-purchase'
        icon={ICONS.CLOCK}
        label={hhMM}
      />
    </div>
  )
}

TimeStamp.propTypes = {
  date: PropTypes.string.isRequired
}

TimeStamp.defaultProps = {
  date: '1900-01-01T00:00:00.000Z'
}

export default TimeStamp
