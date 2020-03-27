import React from 'react';
import { Formik } from 'formik';
// utils
import { sendRequest } from '../../../utils/api';
import endpointsMap from '../../../utils/endpoints-map';
import {
  InputBox
} from '../../fieldset/index';
import Img1 from '../../../public/static/apartments-type-page/1.png';
import Img2 from '../../../public/static/apartments-type-page/2.png';
import Img3 from '../../../public/static/apartments-type-page/3.png';
import Img4 from '../../../public/static/apartments-type-page/4.png';
import SearchForm from '../../search-component/index';
import * as H from '../../../helpers';

// icon
import * as I from '../../../icon/index';
import {
  H5,
  Wrapper,
  Container,
  Button,
  Paragraph,
  ModalBox
} from '../../../ui';
/// ///////////////////////////////////////////

const fieldsSetting = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Name'
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Email'
  },
  {
    type: 'textarea',
    name: 'desired',
    textAreaHeight: '150px',
    placeholder: 'Desired Search result'
  }
];

const Form = (props) => {
  const {
    values,
    errors,
    touched,
    loader,
    initialValues,
    initialErrors,
    initialTouched,
    handleBlur,
    handleChange,
    handleReset,
    resetForm,
    setErrors,
    setFieldValue,
    setValues,
    handleSubmit,
    ...res
  } = props;
  return (
    <form id='send' onSubmit={handleSubmit}>
      {
        fieldsSetting.map((field, i) => (
          <InputBox
            key={i}
            field={field}
            classN='shadow'
            values={values}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        ))
      }
      <Button type='submit'>
        Send
      </Button>
    </form>
  );
};

export const ModalComponent = (props) => {
  return (
    <ModalBox>
      <div className='svg-wrap'>
        {I.noResultsIcon()}
      </div>
      <H5>
        no results were found for your request
      </H5>
      <Paragraph className='grey'>
        Please send us the data so that we can fix the problem in the near future.
      </Paragraph>
      <Formik
        initialValues={{
          name: '',
          email: '',
          messageText: ''
        }}
        onSubmit={(values, actions) => {
          const options = {
            data: values
          };
          sendRequest('post', endpointsMap.contactAs, options);
          props.closeModal();
        }}
      >
        {
          props => (
            <Form {...props} />
          )
        }
      </Formik>
    </ModalBox>
  );
};
