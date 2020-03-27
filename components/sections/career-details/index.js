import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
import * as R from 'ramda';
import Link from 'next/link';
import ComLogo from '../../../public/static/careers-page/2.png';
import useJobDetails from '../../../hook/useJobDetails';
import * as I from '../../../icon/index';
import endpointsMap from '../../../utils/endpoints-map';
import { sendRequest } from '../../../utils/api';
import { InputBox, InputFile } from '../../fieldset/index';
import {
  H3,
  H5,
  Button,
  Wrapper,
  InfoWrap,
  Paragraph,
} from '../../../ui';
import {
  ContainerSec
} from './ui';
/// ///////////////////////////////////////////
const fieldSettings = [
  {
    type: 'text',
    name: 'name',
    label: 'Your name'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email'
  },
  {
    type: 'file',
    id: 'file',
    name: 'attachment',
    label: 'Resume file'
  }
];

const JobForm = ({
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
}) => {
  return (
    <form id='job-form' onSubmit={handleSubmit}>
      <legend>Email this job</legend>
      <div>
        <div>
          {
            fieldSettings.map(
              (field, i) => {
                if (field.type === 'file') {
                  return (
                    <InputFile
                      {...field}
                      key={i} i={i}
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      setFieldValue={setFieldValue}
                    />
                  );
                }
                return (
                  <InputBox
                    i={i}
                    key={i}
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
        </div>
        <Button>Send</Button>
      </div>
    </form>
  );
};

export const CareerDetailSection = (props) => {
  const { query } = useRouter();
  const { data } = useJobDetails(query);
  return (
    <Wrapper>
      <ContainerSec className='container'>
        <div className='route-wrap'>
          <Link href='/careers-page'>
            <a>
              <div className='icon-wrap'>
                {I.arrowDownIcon(20, 20, '#D72066')}
              </div>
              Search all results
            </a>
          </Link>
        </div>
        <div className='career-wrap'>
          <img src={ComLogo} alt='company-logo' />
          <H3>{R.path(['title'], data)}</H3>
          <div>
            <span>Sales</span>
            <span><b>{R.path(['salary'], data)}$</b> / month</span>
          </div>
          <InfoWrap className='info-wrap'>
            <div className='icon-wrap'>
              {I.locationMarkerIcon(20, 20, '#333')}
            </div>
            {R.path(['location'], data)}
          </InfoWrap>
          <hr />
          <H5>Goals & Objectives</H5>
          <Paragraph>
            {R.path(['fullDescription'], data)}
          </Paragraph>
          <hr />
          {/* <Button>Apply Now</Button> */}
        </div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            attachment: {},
            jobId: R.path(['id'], query)
          }}
          onSubmit={(values, actions) => {

            const sedReqFunc = async () => {
              try {
                console.log('values', values);
                let formData = new FormData();
                formData.append('attachment', R.path(['attachment'], values));
                formData.append('name', R.path(['name'], values));
                formData.append('email', R.path(['email'], values));
                formData.append('jobId', R.path(['jobId'], values));
                // for (let [name, value] of formData) {
                //   console.log(`${name} = ${value}`);
                // }
                const options = {
                  headers: {
                    'Content-type': 'multipart/form-data'
                  },
                  data: formData
                };
                const res = await sendRequest('post', endpointsMap.jobRequest, options);
                const dataRes = await res;
                console.log(res);
                console.log(dataRes);
              } catch (err) {
                console.error(err);
              }
            };
            sedReqFunc();
          }}
        >
          {
            props => {
              return (
                <JobForm {...props} />
              );
            }
          }
        </Formik>
      </ContainerSec>
    </Wrapper>
  );
};

export default React.memo(CareerDetailSection);
