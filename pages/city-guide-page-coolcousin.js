import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout';
import IframeSection from '../components/sections/city-guide-page-coolcousin';
//////////////////////////////////////////////

class GuideMapPage extends React.Component {
  static pageTransitionDelayEnter = true
 
  constructor (props) {
    super(props)
    this.state = { loaded: false }
  }
 
  componentDidMount () {
    this.timeoutId = setTimeout(() => {
      this.props.pageTransitionReadyToEnter()
      this.setState({ loaded: true })
    }, 2000)
  }
 
  componentWillUnmount () {
    if (this.timeoutId) clearTimeout(this.timeoutId)
  }
 
  render () {
    if (!this.state.loaded) return null
    return (
      <div>
        <Head>
          <title>Guide Map</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <IframeSection {...this.props} />
        </Layout>
      </div>
    )
  }
}

export default GuideMapPage;
