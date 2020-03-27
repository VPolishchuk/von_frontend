import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import withLayout from '../hoc/withLayout';
import CityGuideSection from '../components/sections/city-guide';
// ///////////////////////////////////////////////////////////////

const CityGuidePage = (props) => (
  <div>
    <Head>
      <title>City Guide</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <CityGuideSection {...props} />
    </Layout>
  </div>
);

export default withLayout(CityGuidePage);
