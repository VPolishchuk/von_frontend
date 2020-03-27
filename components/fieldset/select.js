import React, { useEffect } from 'react';
import Select from 'react-select';
// import { borderRadius } from 'react-select/src/theme';
import { SelectWrap } from './ui';
import { boxShadow, zIndex } from 'styled-system';
/// /////////////////////////////////////////////////

const commonStyles = {
  container: () => ({
    display: 'flex',
    width: '100%',
    height: '50px'
  }),
  input: () => ({
    width: '100%',
    height: '50px'
  }),
  singleValue: () => ({
    left: '0',
    fontSize: '24px',
    lineHeight: '28px',
    fontFamily: 'RobotoRegular',
    position: 'absolute'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  placeholder: () => ({
    display: 'none'
  }),
  menuList: () => ({
    width: '100%',
    borderRadius: '10px',
    backgroundColor: 'white'
  }),
  menu: () => ({
    width: '95%',
    position: 'absolute',
    top: '70px',
    left: '0',
    borderRadius: '10px',
    boxShadow: '0px 10px 40px rgba(27, 0, 70, 0.15)',
    zIndex: 'unset'
  })
  // option: () => ({
  //   width: '100%',
  //   height: '50px',
  //   padding: '10px',
  //   borderRadius: '10px'
  // })
}
export const SelectInputComponent = ({
  name,
  label,
  touched,
  options,
  errors,
  zIndex,
  isSerchSt,
  labelDisplay,
  selectedOption,
  setFieldValue,
  handleCustomChange
}) => {
  const customStyles = {
    ...commonStyles,
    control: () => ({
      transition: 'all 100ms',
      position: 'relative',
      display: 'flex',
      borderWidth: '0',
      width: '100%',
      alignItems: 'center'
    })
  };

  const defaultStyles = {
    ...commonStyles,
    control: () => ({
      transition: 'all 100ms',
      position: 'relative',
      display: 'flex',
      borderWidth: '1px',
      width: '100%',
      alignItems: 'center',
      border: '1px solid #E6E5E5',
      borderRadius: '5px'
    })
  };
  useEffect(() => {
    setFieldValue && setFieldValue(name, selectedOption);
  }, [selectedOption]);
  return (
    <SelectWrap
      zIndex={zIndex}
      className='input-wrap select'
    >
      {
        label &&
        <label>{label}</label>
      }
      <Select
        options={options}
        value={selectedOption}
        styles={isSerchSt ? customStyles : defaultStyles}
        onChange={(newOpt) => handleCustomChange(newOpt, name)}
      />
    </SelectWrap>
  );
};

export default SelectInputComponent;
