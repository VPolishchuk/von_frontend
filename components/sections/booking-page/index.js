import React, { useState } from 'react';
import Link from 'next/link';
import * as R from 'ramda';
import { Formik } from 'formik';
import classNames from 'classnames';
import {
  InputBox,
  InputFile
} from '../../fieldset/index';
import * as I from '../../../icon/index.js';
import ReviewSec from './review-sec';
import {
  Wrapper,
  Paragraph,
  InputWrap,
  Button } from '../../../ui';
import { BookingWrap } from './ui';
/// ///////////////////////////////////////////
const fieldSettings = {
  1: {
    title: 'Personal Details',
    fields: [
      {
        type: 'text',
        name: 'name',
        id: 'name',
        label: 'Name'
      },
      {
        type: 'text',
        name: 'surname',
        id: 'surname',
        label: 'Surname'
      },
      {
        type: 'text',
        name: 'phoneNumber',
        id: 'phoneNumber',
        label: 'Phone Number'
      },
      {
        type: 'text',
        // type: 'date',
        name: 'date',
        id: 'date',
        label: 'Date of birth'
      },
      {
        type: 'text',
        // type: 'select',
        name: 'country',
        id: 'country',
        label: 'Country'
      },
      {
        type: 'email',
        name: 'email',
        id: 'email',
        label: 'Email'
      },
      {
        type: 'text',
        name: 'nationality',
        id: 'nationality',
        label: 'Nationality'
      }
    ]
  },
  2: {
    title: 'Current Address',
    fields: [
      {
        type: 'text',
        name: 'street',
        id: 'street',
        label: 'Street'
      },
      {
        type: 'text',
        // type: 'autocomplate',
        name: 'city',
        id: 'city',
        label: 'City'
      },
      {
        type: 'text',
        name: 'number',
        id: 'Number',
        label: 'Number'
      },
      {
        type: 'text',
        // type: 'select',
        name: 'postCode',
        id: 'postCode',
        label: 'Post Code'
      },
      {
        type: 'text',
        name: 'addressSuffix',
        id: 'addressSuffix',
        label: 'Address suffix'
      }
    ]
  },
  3: {
    title: 'Document Upload',
    fields: [
      {
        type: 'file',
        name: 'idCard',
        label: 'Id Card'
      },
      {
        type: 'file',
        name: 'salaryStatements',
        label: 'Salary statements'
      },
      {
        type: 'file',
        name: 'certificateOfRentDebtFreeStatus',
        label: 'Certificate of rent debt-free status'
      },
      {
        type: 'file',
        name: 'selfAssesment',
        label: 'Self-assesment'
      }
    ]
  },
  4: {
    title: 'Review & confirm'
  }
}

const titleList = [
  'Personal Details',
  'Current Address',
  'Document Upload',
  'Review & confirm'
]

const FormComponent = (props) => {
  const {
    values,
    errors,
    touched,
    initialValues,
    initialErrors,
    initialTouched,
    handleBlur,
    handleChange,
    handleReset,
    resetForm,
    setErrors,
    setFieldValue,
    setValues
  } = props
  return (
    <form id='booking-form' className='booking-form' onSubmit={props.handleSubmit}>
      <legend>{fieldSettings[props.count].title}</legend>
      {
        props.count < 4
          ? fieldSettings[props.count].fields.map(
            (filed, i) => {
              if (filed.type === 'checkbox') {
                return (
                  <CheckboxInputComponent {...props} {...filed} key={i} i={i} />
                )
              }
              if (filed.type === 'file') {
                return (
                  <InputFile
                    {...filed}
                    key={i}
                    i={i}
                    values={values}
                    errors={errors}
                    touched={touched}
                    onBlur={handleBlur}
                    setFieldValue={setFieldValue}
                  // onChange={handleChange}
                  />
                )
              }
              return (
                <InputBox
                  i={i}
                  filed={filed}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              )
            }
          )
          : <ReviewSec {...props} />
      }
      <div className='bottom-wrap'>
        <Button
          type='button'
          className='blackL'
          disable={R.equals(props.count, 1) && true}
          onClick={() => props.handleSepPrevFormIndex()}
        >
          {props.count > 1 ? 'Back' : 'Cancel'}
        </Button>
        <Button
          type='submit'
          className='gradient'
        >
          Next
        </Button>
      </div>
      <div>
        {
          props.forms.map(
            (tit, i) => {
              const pointClass = classNames({'active': R.equals(R.add(i, 1), props.count)});
              return (
                <span key={i} className={pointClass} />
              )
            }
          )
        }
      </div>
    </form>
  )
}

const TitleBox = ({ i, tit, count }) => {
  const classWrap = classNames('title-wrap', { 'active': R.equals(count, i) });
  return (
    <div className={classWrap}>
      <div className='status-circle'>
        {i}
      </div>
      <Paragraph>
        {tit}
      </Paragraph>
    </div>
  )
}
const LeftBox = (props) => {
  return (
    <div className='left-box'>
      {
        props.titles.map(
          (tit, i) => (
            <TitleBox key={i} tit={tit} i={R.add(i, 1)} {...props} />
          )
        )
      }
    </div>
  )
}

export const BookingComponent = (props) => {
  const [count, setCount] = useState(1);
  const handleSepPrevFormIndex = () => {
    if (count != 1) {
      setCount(R.dec(count, 1));
    }
  }
  return (
    <Wrapper>
      <BookingWrap className='booking-wrap'>
        <LeftBox
          {...props}
          count={count}
          titles={titleList}
        />
        <Formik
          initialValues={{
            name: 'Alex',
            surname: 'Vance',
            phoneNumber: '+99 999 999 99',
            date: '22 April 1991',
            country: 'Germany',
            email: 'alexvancw34@mail.com',
            nationality: 'German',
            street: '',
            city: '',
            number: '+99 999 999 99',
            postCode: '10707',
            addressSuffix: '',
            idCard: {},
            salaryStatements: {},
            certificateOfRentDebtFreeStatus: {},
            selfAssesment: {},
            confirm: false
          }}
          onSubmit={(values, actions) => {
            console.log('values', values)
            console.log('actions', actions)
            // if (R.lt(count, R.length(R.values(fieldSettings)))) {
            setCount(R.add(count, 1))
            // }
            // if (R.equals(props.nextFields, R.length(R.values(singUpFieldsSetting)))) {
            //   props.sendSingUpRequest(values);
            // }
          }}
        >
          {
            props => (
              <FormComponent
                {...props}
                count={count}
                forms={titleList}
                handleSepPrevFormIndex={handleSepPrevFormIndex}
              />
            )
          }
        </Formik>
      </BookingWrap>
    </Wrapper>
  )
}

export default React.memo(BookingComponent)
