import React, { useState, useEffect } from 'react';
import * as R from 'ramda';
import * as I from '../../icon/index';

import './style.scss';
/////////////////////////////////////////////////

const InputFile = (props) => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState(null);
  const handelChange = (e) => {
    const fileName = R.path(['name'] , e.currentTarget.files[0]);
    setName(fileName);
    setFile(e.currentTarget.files[0])
  }
  useEffect(() => {
    // props.setFieldValue(props.name, file)
  }, [file])
  return (
    <div key={props.i} className='input-wrap file'>
      {
        props.label && 
        <label for="file">{props.label}</label>
      }
      <div className='custom-file-wrap'>
        {
          name ? 
          <div>
            {name}
          </div> : 
          <div>
            <span>{I.uploadIcon(20, 20)}</span>
            Upload
          </div>
        }
        <input
          {...props}
          id="file"
          className='inputfile'
          onChange={(e) => handelChange(e)}
        />
      </div>
    </div>
  )
};

export default InputFile;
