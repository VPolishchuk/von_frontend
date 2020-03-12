import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout';
import SingUpComponent from '../components/sections/sing-up-page';
//////////////////////////////////////////////////////////////////////

class SingUpPage extends React.Component {
  static pageTransitionDelayEnter = true
 
  constructor (props) {
    super(props);
    this.state = { loaded: false };
  }
 
  // componentDidMount() {
  //   this.timeoutId = setTimeout(() => {
  //     this.props.pageTransitionReadyToEnter()
  //     this.setState({ loaded: true })
  //   }, 2000)
  // }
 
  // componentWillUnmount() {
  //   if (this.timeoutId) clearTimeout(this.timeoutId)
  // }
 
  render () {
    // if (!this.state.loaded) return null
    return (
      <div>
        <Head>
          <title>Sing Up</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <SingUpComponent {...this.props} />
        </Layout>
      </div>
    )
  }
}

export default SingUpPage;
