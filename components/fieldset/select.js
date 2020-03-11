import React, { useEffect, useState } from 'react';
import * as R from 'ramda';
import Select from 'react-select';
import './style.scss';
////////////////////////////////////////////////////

const SelectInputComponent = ({
  name,
  label,
  touched,
  options,
  errors,
  labelDisplay,
  selectedOption,
  handelCastomChange
}) => {
  const customStyles = {
    container: () => ({
      display: 'flex',
      width: '100%',
      height: '50px'
    }),
    control: () => ({
      transition: 'all 100ms',
      position: 'relative',
      display: 'flex',
      borderWidth: '0',
      width: '100%',
      alignItems: 'center',
    }),
    input: () => ({
      width: '100%',
      height: '50px',
    }),
    singleValue: () => ({
      left: '0',
      fontSize: '24px',
      lineHeight: '28px',
      fontFamily: 'Roboto',
      position: 'absolute',
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    placeholder: () => ({
      display: 'none',
    })
  }
  return (
    <div className='input-wrap select'>
      {
        label &&
        <label>{label}</label>
      }
      <Select
        options={options}
        value={selectedOption}
        styles={customStyles}
        onChange={(newOpt) => handelCastomChange(name, newOpt)}
      />
    {/* {R.or(R.has(name.value, touched), R.has(name.value, errors)) ? (
        <div
        className="error"
        style={{
            color: 'red',
            fontSize: '12px',
            marginTop: '5px',
            textAlign: 'center',
        }}
        >
        {errors[name.value]}</div>
    ) : null} */}
    </div>
  )
};

export default SelectInputComponent;
