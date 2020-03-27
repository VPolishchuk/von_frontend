import React from 'react';
import Head from 'next/head';
import withLayout from '../hoc/withLayout';
import Layout from '../components/layout';
import IframeSection from '../components/sections/city-guide-page-coolcousin';
// ////////////////////////////////////////////////////////////////////////////////

const GuideMapPage = (props) => (
  <div>
    <Head>
      <title>Guide Page</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <IframeSection {...props} />
    </Layout>
  </div>
);

export default withLayout(GuideMapPage);