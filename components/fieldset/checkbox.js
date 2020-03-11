import React from 'react'
import './style.scss'
/// //////////////////////////////////////////////////////////

export const CheckboxInputComponent = (props) => {
  const {
    type,
    values,
    name,
    label,
    checked,
    handleBlur,
    handelCastomChange,
    ...rest } = props
  console.log('CheckboxInputComponent', props)
  return (
    <div className='input-wrap'>
      <label>
        <div className={`checkbox-container ${checked ? 'checked' : ''}`}>
          <input
            type={type}
            name={name}
            checked={checked}
            onBlur={handleBlur}
            onChange={() => handelCastomChange(name, !checked)}
          />
          <div className='styled-container'>
            <svg
              fill='none'
              stroke='white'
              strokeWidth='2px'
              viewBox='0 0 24 24'
              className={checked && 'checked'}
            >
              <polyline points='20 6 9 17 4 12' />
            </svg>
          </div>
        </div>
        {
          label && <span>{label}</span>
        }
      </label>
    </div>
  )
}

export default CheckboxInputComponent
