import React, { useState } from 'react';
import Link from 'next/link';
import CheckboxInputComponent from '../../fieldset/checkbox';
import BgImage from '../../../public/static/form-page/bg-1.png';
import * as I  from '../../../icon/index.js';
import './style.scss';
//////////////////////////////////////////////
const fieldSettings = [
  {
    type: 'text',
    name: 'name',
    id: 'mane',
    label: 'Your name',
  },
  {
    type: 'email',
    name: 'email',
    id: 'email',
    placeholder: 'Email',
  },
  {
    type: 'checkbox',
    label: 'I’ve accept Terms of Use and Privacy Policy',
  },
];

const FormComponent = (props) => {
  return (
    <form id='sing-up' className='main-form'>
      <legend>Sign up</legend>
      {
        fieldSettings.map(
          (filed, i) => {
            if (filed.type === 'checkbox') {
              return (
                <CheckboxInputComponent {...props} {...filed} key={i} i={i} />
              )
            }
            return (
              <div key={i} className='input-wrap'>
                <input {...filed} />
                {
                  filed.label && 
                  <label for={filed.id}>{filed.label}</label>
                }
              </div>
            )
          }
        )
      }
      <button className='gradient'>Sign up</button>
      <p>
        Already have an account?
        <Link href='/sing-in'>
          <a>Log in</a>
        </Link>
      </p>
    </form>
  )
};
export const SingUpComponent = (props) => (
  <div className='wrapper'>
    <div className='container'>
      <div className='sing-up-wrap'>
        <img alt='logo' src={BgImage} className='left-box' />
        <FormComponent {...props} />
      </div>
    </div>
  </div>
)

export default React.memo(SingUpComponent);
