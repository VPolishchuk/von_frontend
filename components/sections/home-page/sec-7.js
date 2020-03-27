import React from 'react';
import { Formik } from 'formik';
// utils
import { sendRequest } from '../../../utils/api';
import endpointsMap from '../../../utils/endpoints-map';
import Img from '../../../public/static/home-page/contact-us/1.png';
import {
  InputBox
} from '../../fieldset/index';
import { H2, H3, Paragraph, Button } from '../../../ui/common';
import { Section7 } from './ui';
/// ///////////////////////////////////////////

const fieldsSetting = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Name'
    // valid: require
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email'
    // valid: require
  },
  {
    type: 'textarea',
    placeholder: 'Message',
    name: 'messageText'
    // valid: require
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
    <form id='send' onSubmit={props.handleSubmit}>
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
      <Button className='gradient' type='submit'>
        Send
      </Button>
    </form>
  );
};

export const ContactUsSection = (props) => (
  <Section7 className='section-7 container'>
    <H2 className='gradient'>Contact Us</H2>
    <div className='contact-wrap'>
      <div className='form-wrap'>
        <H3>
          That's what's up!<br />
          <span>Say hello!</span>
        </H3>
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
          }}
        >
          {
            props => (
              <Form {...props} />
            )
          }
        </Formik>
      </div>
      <div className='social-wrap'>
        <img src={Img} alt='img' className='social-image' />
        <div className='social'>
          <span>Find Us</span>
          <div className='social-box'>
            <a><div className='facebook' /></a>
            <a><div className='instagram' /></a>
            <a><div className='linkedin' /></a>
          </div>
        </div>
      </div>
    </div>
  </Section7>
);

export default ContactUsSection;
