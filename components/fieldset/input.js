import React from 'react';
import { InputWrap } from './ui';
// //////////////////////////////////////////

export const InputBox = ({
  i,
  filed,
  handleBlur,
  handleChange,
  ...res
}) => {
  return (
    <InputWrap key={i} className='input-wrap'>
      <input
        {...filed}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {
        filed.label &&
        <label for={filed.id}>{filed.label}</label>
      }
    </InputWrap>
  )
};

export default InputBox;
