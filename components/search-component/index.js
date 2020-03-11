import React, { useEffect, useState }from 'react';
import * as R from 'ramda';
import SelectInputComponent from '../fieldset/select';
import DatepickerComponent from '../fieldset/datepiker';
import './style.scss';
/////////////////////////////////////////////////////////////

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const SearchForm = (props) => {
  const [selectedOption, setSelectedOption] = useState();
  const handelCastomChange = (opt) => {
    setSelectedOption(opt);
  }
  if(props.guidePage) {
    return (
      <form id='search-form'>
      <SelectInputComponent 
        {...props}
        options={options}
        label='Choose Location'
        selectedOption={selectedOption}
        handelCastomChange={handelCastomChange}
      />
      <DatepickerComponent {...props} label='Booking Time' />
      <button className='gradient '>
        Search
      </button>
    </form>
    )
  }
  return (
    <form id='search-form'>
      <SelectInputComponent 
        {...props}
        options={options}
        label='Choose Location'
        selectedOption={selectedOption}
        handelCastomChange={handelCastomChange}
      />
      <SelectInputComponent 
        {...props}
        options={options}
        label='Choose Location'
        selectedOption={selectedOption}
        handelCastomChange={handelCastomChange}
      />
      <DatepickerComponent {...props} label='Booking Time' />
      <button className='gradient '>
        Search
      </button>
    </form>
)}

export default SearchForm;