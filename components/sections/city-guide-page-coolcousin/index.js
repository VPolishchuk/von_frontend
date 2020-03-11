import React from 'react';
import './style.scss';
/////////////////////////////////////

export const IframeSection = (props) => (
    <div className='wrapper'>
      <iframe
        src='https://p.coolcousin.com/vonder/grenzallee/?widget=map'
      >
      </iframe>
    </div>
  )
  
export default React.memo(IframeSection);
