import React, { useState, useEffect } from 'react';
import * as R from 'ramda';
import * as I from '../../icon/index';
import { InputWrap, CustomFileWrap } from './ui';
/// //////////////////////////////////////////////

export const InputFile = (props) => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState(null);
  const handelChange = (e) => {
    const fileName = R.path(['name'], e.currentTarget.files[0]);
    setName(fileName);
    setFile(e.currentTarget.files[0]);
  };
  useEffect(() => {
    props.setFieldValue && props.setFieldValue(props.name, file);
  }, [file]);
  return (
    <InputWrap key={props.i} className='file'>
      {
        props.label &&
        <label htmlFor='file'>{props.label}</label>
      }
      <CustomFileWrap className='custom-file-wrap'>
        {
          name
            ? <div>
              {name}
            </div>
            : <div>
              <span>{I.uploadIcon(20, 20)}</span>
            Upload
            </div>
        }
        <input
          {...props}
          id='file'
          className='inputfile'
          onChange={(e) => handelChange(e)}
        />
      </CustomFileWrap>
    </InputWrap>
  );
};

export default InputFile;
