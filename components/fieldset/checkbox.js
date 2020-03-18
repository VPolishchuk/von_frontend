import React from 'react';
import {
  CheckboxWrap,
  CheckboxContainer
} from './ui';
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
    ...rest } = props;
  return (
    <CheckboxWrap>
      <label>
        <CheckboxContainer className={`checkbox-container ${checked ? 'checked' : ''}`}>
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
        </CheckboxContainer>
        {
          label && <span>{label}</span>
        }
      </label>
    </CheckboxWrap>
  )
}

export default CheckboxInputComponent;

