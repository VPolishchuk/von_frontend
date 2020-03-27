import React from 'react';
import * as R from 'ramda';
import classNames from 'classnames';
import { InputWrap } from './ui';
// //////////////////////////////////////////

export const InputBox = ({
  i,
  field,
  classN,
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  setFieldValue,
  ...res
}) => {
  const customClass = classNames('input-wrap', field.type);
  if (R.equals(field.type, 'textarea')) {
    return (
      <InputWrap
        key={i}
        className={customClass}
        textAreaHeight={field.textAreaHeight}
      >
        <textarea
          {...field}
          rows='30'
          values={values}
          errors={errors}
          touched={touched}
          className={classN}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {
          field.label &&
          <label htmlFor={field.id}>{field.label}</label>
        }
      </InputWrap>
    );
  }
  return (
    <InputWrap key={i} className='input-wrap'>
      <input
        {...field}
        values={values}
        errors={errors}
        touched={touched}
        className={classN}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {
        field.label &&
        <label htmlFor={field.id}>{field.label}</label>
      }
    </InputWrap>
  );
};

export default InputBox;
