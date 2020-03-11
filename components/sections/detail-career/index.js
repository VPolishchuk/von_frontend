import React, { useState } from 'react';
import * as R from 'ramda';
import Link from 'next/link';
import ComLogo from '../../../public/static/career-page/2.png'
import { arrowDownIcon, locationMarkerIcon, uploadIcon }  from '../../../icon/index.js';
import InputFile from '../../fieldset/input-file';

import './style.scss';
//////////////////////////////////////////////
const fieldSettings = [
  {
    type: 'text',
    placeholder: 'Your name',
  },
  {
    type: 'email',
    placeholder: 'Email',
  },
  {
    type: 'file',
    id: "file",
    label: 'Resume file',
  },
];

const JobForm = (props) => {
  return (
    <form id='job-form'>
      <legend>Email this job</legend>
      <div>
        <div>
          {
            fieldSettings.map(
              (filed, i) => {
                if (filed.type === 'file') {
                  return (
                    <InputFile {...filed} key={i} i={i} />
                  )
                }
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
        </div>
        <button>Send</button>
      </div>
    </form>
  )
};

export const CareerDetailSection = (props) => (
  <div className='wrapper'>
    <div className='container career-detail'>
      <div className='route-wrap'>
        <Link href='/career-page'>
          <a>
            <div className='icon-wrap'>
              {arrowDownIcon(20, 20, '#D72066')}
            </div>
            Search all results
          </a>
        </Link>
      </div>
      <div className='career-wrap'>
        <img src={ComLogo} alt='company-logo' />
        <h3>Community Manager</h3>
        <div>
          <span>Sales</span>
          <span><b>340€</b> / month</span>
        </div>
        <div className='info-wrap'>
          <div className='icon-wrap'>
            {locationMarkerIcon(20, 20, '#333')}
          </div>
          London, United Kingdom
        </div>
        <hr/>
        <h5>Goals & Objectives</h5>
        <p>
          Creation of a collaborative environment 
          amongst our members through events 
          and personal introductions<br/>
          Maintenance of 100% occupancy by 
          achieving sales goals, and managing 
          churn<br/>

          Ensuring that building is fully operational
          and processes are running smoothly<br/>

          Driving growth and promotion of 
          WeWork-provided service offerings<br/>

          Maintaining company standards and 
          expectations<br/>

          Managing building KPI’s<br/>
        </p>
        <hr/>
        <h5>Duties & Responsibilities</h5>
        <p>
          Recommend best practices, including 
          but not limited to: community 
          management, sales, events, training, 
          and member experience on a 
          company-wide level<br/>

          Exercise discretion in guiding prospective
          members, including possibly gatekeeping 
          where business may not be in the 
          interests of greater community<br/>

          Resolve member complaints regarding 
          other members through neutral fact 
          investigation and process termination of
          membership when warranted<br/>

          Explain WeWork policies and procedures
          to members, including but not limited 
          to: membership agreement and billing 
          procedures<br/>
        </p>
        <button>Apply Now</button>
      </div>
      <JobForm {...props}/>
    </div>
  </div>
)

export default React.memo(CareerDetailSection);

