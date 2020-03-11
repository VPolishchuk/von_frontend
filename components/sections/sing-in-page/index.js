import React, { useState } from 'react'
import * as R from 'ramda'
import * as I from '../../../icon/index.js'
import BgImage from '../../../public/static/form-page/bg-1.png'
import './style.scss'
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
]

const FormComponent = (props) => {
  return (
    <form id='sing-in' className='main-form'>
      <legend>Sign In</legend>
      {
        fieldSettings.map(
          (filed, i) => {
            // if (filed.type === 'checkbox') {
            //   return (
            //     // <InputFile filed={filed} key={i} i={i} />
            //   )
            // }
            return (
              <div key={i} className='input-wrap'>
                {
                  filed.label &&
                    <label>{filed.label}</label>
                }
                <input {...filed} />
              </div>
            )
          }
        )
      }
      <button className='gradient'>Sign In</button>
    </form>
  )
}

export const SingInComponent = (props) => (
  <div className='wrapper'>
    <div className='container'>
      <div className='sing-in-wrap'>
        <img alt='logo' src={BgImage} className='left-box' />
        <FormComponent {...props} />
      </div>
    </div>
  </div>
)

export default React.memo(SingInComponent)
