import React, { useEffect, useState, useContext } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
// context
import { GlobalContext } from '../../hook/useContextGlobal';
import * as H from '../../helpers/index';
// component
import {
  DatepickerComponent,
  SelectInputComponent} from '../fieldset/index';
import { SearchFormWrap } from './ui';
import { Button } from '../../ui/common';
/// //////////////////////////////////////////////////////////

const fieldsSetting = {
  form1: [
    {
      name: 'location',
      type: 'select',
      label: 'Choose Location',
      zIndex: 11,
      options: 'locationsOptions',
      selectedOption: 'selectedLocOption',
      handleCustomChange: 'handleCustomChange'
    },
    {
      name: 'type',
      type: 'select',
      label: 'Apartment Type',
      zIndex: 10,
      options: 'typesOptions',
      selectedOption: 'selectedLocOption'
    },
    {
      name: 'date',
      type: 'date',
      label: 'Booking Time'
    }
  ],
  form2: [
    {
      name: 'location',
      type: 'select',
      label: 'Choose Location',
      zIndex: 11
    },
    {
      name: 'date',
      type: 'date',
      label: 'Booking Time'
    }
  ]
};

const SearchFormComponent = ({
  values,
  errors,
  loader,
  touched,
  resetForm,
  setErrors,
  setValues,
  guidePage,
  handleBlur,
  handleReset,
  handleChange,
  handleSubmit,
  typesOptions,
  initialValues,
  initialErrors,
  setFieldValue,
  initialTouched,
  locationsOptions,
  selectedLocOption,
  handleCustomChange,
  selectedTypeOption,
  ...res
}) => {
  if (guidePage) {
    return (
      <SearchFormWrap id='search-form'>
        {
          R.path(['form2'], fieldsSetting).map((field, i) => {
            if (R.equals(field.type, 'date')) {
              return (
                <DatepickerComponent {...field} label='Booking Time' />
              );
            }
            return (
              <SelectInputComponent
                {...res}
                zIndex={11}
                name='location'
                isSerchSt={true}
                label='Choose Location'
                options={locationsOptions}
                setFieldValue={setFieldValue}
                selectedOption={selectedLocOption}
                handleCustomChange={handleCustomChange}
              />
            );
          })
        }
        <Button className='gradient'>
          Search
        </Button>
      </SearchFormWrap>
    );
  }
  return (
    <SearchFormWrap id='search-form' onSubmit={handleSubmit}>
      <SelectInputComponent
        {...res}
        zIndex={11}
        name='location'
        isSerchSt={true}
        label='Choose Location'
        options={locationsOptions}
        setFieldValue={setFieldValue}
        selectedOption={selectedLocOption}
        handleCustomChange={handleCustomChange}
      />
      <SelectInputComponent
        {...res}
        zIndex={10}
        name='type'
        isSerchSt={true}
        options={typesOptions}
        label='Apartment Type'
        setFieldValue={setFieldValue}
        selectedOption={selectedTypeOption}
        handleCustomChange={handleCustomChange}
      />
      <DatepickerComponent
        {...res}
        name='date'
        label='Booking Time'
        setFieldValue={setFieldValue} />
      {/* {
        R.path(['form1'], fieldsSetting).map((field, i) => {
          if (R.equals(field.type, 'date')) {
            return (
              <DatepickerComponent {...field} label='Booking Time' />
            );
          }
          return (
            <SelectInputComponent
              {...field}
              zIndex={11}
              isSerchSt={true}
              // options={locationsOptions}
              // selectedOption={selectedLocOption}
              // handleCustomChange={handleCustomChange}
            />
          );
        })
      } */}
      <Button type='submit' className='gradient'>
        Search
      </Button>
    </SearchFormWrap>
  );
};

export const SearchForm = (props) => {
  const router = useRouter();
  const { optionsTypes, optionsLocations } = useContext(GlobalContext);
  const [selectedLocOption, setSelectedLocOption] = useState();
  const [selectedTypeOption, setSelectedTypeOption] = useState();
  const [locationsOptions, setLocationsOptions] = useState();
  const [typesOptions, setTypesOptions] = useState();
  const handleCustomChange = (opt, name) => {
    if (name === 'location') {
      return setSelectedLocOption(opt);
    }
    setSelectedTypeOption(opt);
  };
  useEffect(() => {
    setLocationsOptions(optionsLocations);
    setTypesOptions(optionsTypes);
  }, [optionsLocations, optionsTypes]);
  let initialValues = props.guidePage
    ? {
      location: {},
      date: {}
    }
    : {
      location: {},
      type: {},
      date: {}
    };
  return (
    <Formik
      initialValues={{
        ...initialValues
      }}
      onSubmit={(values, actions) => {
        props.getData(values, props.renderModalWindow, router, props.setData);
      }}
    >
      {
        props => (
          <SearchFormComponent
            {...props}
            guidePage={props.guidePage}
            typesOptions={typesOptions}
            locationsOptions={locationsOptions}
            selectedLocOption={selectedLocOption}
            handleCustomChange={handleCustomChange}
            selectedTypeOption={selectedTypeOption}
          />
        )
      }
    </Formik>
  );
};

export default SearchForm;
