import React from 'react';
// icon
import * as I from '../../../icon/index';
import {
  H6,
  Button,
  Paragraph,
  ModalBox,
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
      <Button type='submit'>
        Send
      </Button>
    </form>
  );
};

export const ModalComponent = (props) => {
  return (
    <ModalBox>
      <H6>
        Thank you for booking!
      </H6>
      <Paragraph>
        We will verify your uploaded documents and notify you by app and email.
        The process will take on average 48 hours during business week. Please be patient.
      </Paragraph>
      <Button className='gradient'>See the city guides</Button>
    </ModalBox>
  );
};
