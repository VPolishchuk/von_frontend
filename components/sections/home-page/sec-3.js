import React, { useContext } from 'react';
// context
import { GlobalContext } from '../../../hook/useContextGlobal';
import { Section3 } from './ui';
import { H2 } from '../../../ui/common';
// ///////////////////////////////////////////

export const LocationSection = (props) => {
  const { locations } = useContext(GlobalContext);
  return (
    <Section3 className='section-3'>
      <H2>OUR LOCATIONS</H2>
      <div className='location-wrap'>
        <ul>
          {
            locations && locations.map(
              (location, i) => (
                <li key={i}>
                  {location}
                </li>
              )
            )
          }
        </ul>
      </div>
    </Section3>
  );
};

export default LocationSection;
