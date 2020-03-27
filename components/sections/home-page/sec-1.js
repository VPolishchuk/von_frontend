import React from 'react';
import SearchForm from '../../search-component/index';
import { Section1 } from './ui';
// ///////////////////////////////////////////////////

export const MainSection = (props) => {
  return (
    <Section1 className='section-1'>
      <div>
        <div className='form-wrap'>
          <SearchForm {...props} guidePage={false} />
        </div>
      </div>
    </Section1>
  );
};

export default MainSection;
