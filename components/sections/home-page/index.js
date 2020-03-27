import React from 'react';
// sections
import { MainSection } from './sec-1';
import { AboutSection } from './sec-2';
import { LocationSection } from './sec-3';
import { ServicesSection } from './sec-4';
import { LifestyleSection } from './sec-6';
import { ContactUsSection } from './sec-7';
import { ExperienceMoreSection } from './sec-5';
// hook
import { useWindowsHeight } from '../../../hook/useWindowParams';
// style
import { Wrapper } from '../../../ui/common';
/// //////////////////////////////////////////////////
const SectionComponent = (props) => {
  const { lastYPos } = useWindowsHeight();
  return (
    <Wrapper className='wrapper'>
      <MainSection {...props} scrollPosY={lastYPos} />
      <AboutSection {...props} scrollPosY={lastYPos} />
      <LocationSection {...props} scrollPosY={lastYPos} />
      <ServicesSection {...props} scrollPosY={lastYPos} />
      <ExperienceMoreSection {...props} scrollPosY={lastYPos} />
      <LifestyleSection {...props} scrollPosY={lastYPos} />
      <ContactUsSection {...props} scrollPosY={lastYPos} />
    </Wrapper>
  );
};

export default React.memo(SectionComponent);
