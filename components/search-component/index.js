import React, { useEffect, useState, useContext } from 'react';
import * as R from 'ramda';
// context
import { LocationsOptions } from '../../hook/useContensGlobal';
// component
import {
  DatepickerComponent,
  SelectInputComponent} from '../fieldset/index';

import { SearchFormWrap } from './ui';
import { Button } from '../../ui/common';
/// //////////////////////////////////////////////////////////

export const SearchForm = (props) => {
  const { types, locations } = useContext(LocationsOptions);
  const [selectedLocOption, setSelectedLocOption] = useState();
  const [selectedTypeOption, setSelectedTypeOption] = useState();
  const [locationsOptions, setLocationsOptions] = useState();
  const [typesOptions, setTypesOptions] = useState();
  const handleCustomChange = (opt, name) => {

    if (name === 'locations') {
      return setSelectedLocOption(opt);
    }
    setSelectedTypeOption(opt);
  };
  useEffect(() => {
    const newLocOpt = locations.map((item) => ({value: item, label: item}));
    setLocationsOptions(newLocOpt);
    const newTypesOpt = types.map((item) => ({value: item, label: item}));
    setTypesOptions(newTypesOpt);
  }, [types, locations]);
  if (props.guidePage) {
    return (
      <SearchFormWrap id='search-form'>
        <SelectInputComponent
          {...props}
          zIndex={11}
          name='locations'
          isSerchSt={true}
          label='Choose Location'
          options={locationsOptions}
          selectedOption={selectedLocOption}
          handleCustomChange={handleCustomChange}
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
        zIndex={11}
        name='locations'
        isSerchSt={true}
        label='Choose Location'
        options={locationsOptions}
        selectedOption={selectedLocOption}
        handleCustomChange={handleCustomChange}
      />
      <SelectInputComponent
        {...props}
        zIndex={10}
        name='types'
        isSerchSt={true}
        options={typesOptions}
        label='Apartment Type'
        selectedOption={selectedTypeOption}
        handleCustomChange={handleCustomChange}
      />
      <DatepickerComponent {...props} label='Booking Time' />
      <Button className='gradient '>
        Search
      </Button>
    </SearchFormWrap>
  );
};

export default SearchForm;
