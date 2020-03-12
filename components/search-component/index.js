import React, { useEffect, useState } from 'react'
import * as R from 'ramda'
import {
  DatepickerComponent,
  SelectInputComponent} from '../fieldset/index';
import { SearchFormWrap } from './ui';
import { Button } from '../../ui/common';
/// //////////////////////////////////////////////////////////

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const SearchForm = (props) => {
  const [selectedOption, setSelectedOption] = useState();
  const handelCastomChange = (opt) => {
    setSelectedOption(opt);
  };
  if (props.guidePage) {
    return (
      <SearchFormWrap id='search-form'>
        <SelectInputComponent
          {...props}
          options={options}
          label='Choose Location'
          selectedOption={selectedOption}
          handelCastomChange={handelCastomChange}
        />
        <DatepickerComponent {...props} label='Booking Time' />
        <Button className='gradient '>
        Search
        </Button>
      </SearchFormWrap>
    );
  }
  return (
    <SearchFormWrap id='search-form'>
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
      <Button className='gradient '>
        Search
      </Button>
    </SearchFormWrap>
  )
}

export default SearchForm;
