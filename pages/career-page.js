import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout';
import CareerSection from '../components/sections/career-page';
///////////////////////////////////////////////////////////////////

class CareerPage extends React.Component {
  static pageTransitionDelayEnter = true
 
  constructor (props) {
    super(props)
    this.state = { loaded: false };
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
          <title>Career Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <CareerSection {...this.props} />
        </Layout>
      </div>
    );
  }
}

export default CareerPage;
