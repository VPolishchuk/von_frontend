import App from 'next/app'
// import { register, unregister } from 'next-offline/runtime';
import React from 'react';
import { sendRequest } from '../utils/api';
import { Loader } from '../components/layout';
import endpointsMap from '../utils/endpoints-map';
import { PageTransition } from 'next-page-transitions';
import { LocationsOptions } from '../hook/useContensGlobal';
// ////////////////////////////////////////////////////////////////d

class MyApp extends App {
  // componentDidMount () {
  //   register()
  // }
  // componentWillUnmount () {
  //   unregister()
  // }

  render () {
    const { Component, pageProps, router, locations, types } = this.props;
    return (
      <div>
        <LocationsOptions.Provider value={{locations, types}} >
          <PageTransition
            timeout={300}
            classNames="page-transition"
            loadingComponent={<Loader />}
            loadingDelay={400}
            loadingTimeout={{
              enter: 400,
              exit: 0
            }}
            loadingClassNames="lds-hourglass"
          >
            <Component {...pageProps} key={router.route} />
          </PageTransition>
          <style jsx global>{`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
            `}</style>
        </LocationsOptions.Provider>
      </div>
    );
  }
}

MyApp.getInitialProps = async function () {
  try {
    const resLocations = await sendRequest('get', endpointsMap.locations);
    const resApartmens = await sendRequest('get', endpointsMap.apartmens);
    const { locations } = await resLocations.data;
    const { types } = await resApartmens.data;
    return { locations, types };
  } catch (err) {
    console.error(err);
  }
};

export default MyApp;
