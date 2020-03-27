import React from 'react';
import * as R from 'ramda';
import Link from 'next/link';
import { Formik } from 'formik';
import BgImage from '../../../public/static/form-page/bg-1.png';
// utils
import { sendRequest } from '../../../utils/api';
import endpointsMap from '../../../utils/endpoints-map';
// ui
import {
  Wrapper,
  Button,
  Paragraph,
} from '../../../ui';
import {
  InputBox,
  CheckboxInputComponent
} from '../../fieldset/index';
import {
  Login,
  SingUpWrap,
  FormContainer
} from './ui';
/// ///////////////////////////////////////////

const fieldSettings = [
  // {
  //   type: 'text',
  //   name: 'name',
  //   id: 'mane',
  //   label: 'Your name'
  // },
  {
    type: 'email',
    name: 'identifier',
    id: 'email',
    placeholder: 'Email'
  },
  // {
  //   type: 'checkbox',
  //   label: 'I’ve accept Terms of Use and Privacy Policy'
  // }
];

const FormComponent = ({
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
  ...res}) => {
  return (
    <form id='sing-up' className='main-form' onSubmit={handleSubmit}>
      {/* <legend>Sign up</legend> */}
      {/* <legend>Login</legend>
      {console.log('values', values)}
      {
        fieldSettings.map(
          (field, i) => {
            if (field.type === 'checkbox') {
              return (
                <CheckboxInputComponent {...res} {...field} key={i} i={i} />
              );
            }
            return (
              <InputBox
                i={i}
                field={field}
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            );
          }
        )
      }
      <Button type='submit' width={'100%'} className='gradient'>Sign up</Button>
      <Paragraph>
        Already have an account?
        <Link href='/sing-in'>
          <a>Log in</a>
        </Link>
      </Paragraph> */}
      <legend>Login</legend>
      <Login>
        <fast-button></fast-button>
      </Login>
    </form>
  );
};

export const LoginComponent = (props) => {
  return (
    <Wrapper>
      <FormContainer>
        <SingUpWrap className='sing-up-wrap'>
          <img alt='logo' src={BgImage} className='left-box' />
          <FormComponent {...props} />
        </SingUpWrap>
      </FormContainer>
    </Wrapper>
  );
};

export default React.memo(LoginComponent);
