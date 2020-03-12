import React from 'react';
/// //////////////////////////////////

export const IframeSection = (props) => (
  <div className='wrapper'>
    <iframe
      style={{
        width: '100%',
        height: '100vh',
        marginTop: '60px'
      }}
      src='https://p.coolcousin.com/vonder/grenzallee/?widget=map'
    />
  </div>
);

export default React.memo(IframeSection);
