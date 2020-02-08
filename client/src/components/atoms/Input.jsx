import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import Label from './Label'

const inputsStyles = {
  alignItems: 'center',
  width: 'fit-contnet',
  float: 'left',
  display: 'inline-flex',
  label: {
    fontSize: '1.2em',
    textAlign: 'center',
    margin: '0 2%'
  }
}

function Input ({
  classes,
  defaultValues,
  handleChange,
  labelName,
  options,
  styles,
  type
}) {
  return (
    <div className={classes} style={styles || inputsStyles}>
      <Label label={labelName} styles={inputsStyles.label} />
      {
        Object.entries(options)
          .map((entry, index) => {
            const [key, value] = entry
            const text = key.toLocaleLowerCase().replace('_', ' ')
            return (
              <label key={`${key}-${index}`} htmlFor={`${key}Choice`}>
                <input
                  type={type}
                  id={`${key}Choice`}
                  name={labelName}
                  defaultChecked={Array.isArray(defaultValues) ? defaultValues.find(item => item === value) : defaultValues === value}
                  value={value}
                  onChange={handleChange}
                />
                {text}
              </label>
            )
          })
      }
    </div>
  )
}

Input.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  defaultValues: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  handleChange: PropTypes.func.isRequired,
  labelName: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.string
}

Input.defaultProps = {
  classes: {},
  styles: null,
  type: 'radio'
}

export default Radium(Input)
