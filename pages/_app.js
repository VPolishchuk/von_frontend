// import App from 'next/app'
// import { register, unregister } from 'next-offline/runtime';
import React from 'react';
import { Loader } from '../components/layout';
import { PageTransition } from 'next-page-transitions';
// ////////////////////////////////////////////////////////////////d

class App extends React.Component {
  // componentDidMount () {
  //   register()
  // }
  // componentWillUnmount () {
  //   unregister()
  // }

  render () {
    const { Component, pageProps, router } = this.props;
    console.log('router', router);
    console.log('props', this.props);
    return (
      <div>
        <PageTransition
          timeout={100}
          classNames="page-transition"
          loadingComponent={<Loader />}
          loadingDelay={300}
          loadingTimeout={{
            enter: 200,
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
      </div>
    )
  }
}

export default App;

