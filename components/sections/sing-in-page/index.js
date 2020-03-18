import React from 'react';
import BgImage from '../../../public/static/form-page/bg-1.png';
// ui
import {
  Button,
  Wrapper
} from '../../../ui';
import {
  InputBox
} from '../../fieldset/index';
import {
  SingInWrap,
  FormContainer
} from './ui';
/// ///////////////////////////////////////////

const fieldSettings = [
  {
    type: 'text',
    placeholder: 'Your name'
  },
  {
    type: 'email',
    placeholder: 'Email'
  }
];

const FormComponent = (props) => {
  return (
    <form id='sing-in' className='main-form'>
      <legend>Sign In</legend>
      {
        fieldSettings.map(
          (field, i) => {
            return (
              <InputBox i={i} field={field} />
            );
          }
        )
      }
      <Button width={'100%'} className='gradient'>Sign In</Button>
    </form>
  )
}

export const SingInComponent = (props) => (
  <Wrapper>
    <FormContainer>
      <SingInWrap className='sing-in-wrap'>
        <img alt='logo' src={BgImage} className='left-box' />
        <FormComponent {...props} />
      </SingInWrap>
    </FormContainer>
  </Wrapper>
)

export default React.memo(SingInComponent)
