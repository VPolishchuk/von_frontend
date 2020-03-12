import React, { useState } from 'react'
import * as R from 'ramda'
import classNames from 'classnames'
import * as I from '../../../icon'
import CheckboxInputComponent from '../../fieldset/checkbox';
import { Paragraph } from '../../../ui';
/// ////////////////////////////////////////////////////////////////

const Document = ({
  docs
}) => {
  const keys = R.keys(docs);
  return (
    <div className='docs-wrap'>
      <Paragraph>Uploaded documents</Paragraph>
      {
        keys.map(
          (doc, i) => (
            <div key={i}>
              <span>{I.bracketIcon()}</span>
              {R.path([doc, 'name'], docs)}
            </div>
          )
        )
      }
    </div>
  )
}
const ReviewSec = (props) => {
  const values = R.path(['values'], props);
  const labels = R.keys(R.omit([
    'idCard',
    'confirm',
    'selfAssesment',
    'salaryStatements',
    'certificateOfRentDebtFreeStatus'
  ], values))
  const docs = R.pick([
    'idCard',
    'selfAssesment',
    'salaryStatements',
    'certificateOfRentDebtFreeStatus'
  ], values)
  return (
    <div className='review-wrap'>
      <div className='left-wrap'>
        {
          labels.map(
            (key, i) => (
              <div key={i}>
                <span>{key}</span>
                <Paragraph>{values[key]}</Paragraph>
              </div>
            )
          )
        }
        <CheckboxInputComponent
          {...props}
          type='checkbox'
          label='Confirm and send to verify'
        />
        <hr />
      </div>
      <Document docs={docs} />
    </div>
  );
};

export default ReviewSec;
