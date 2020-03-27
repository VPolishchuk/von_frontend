import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout';
import withLayout from '../hoc/withLayout';
import GuideDetailSection from '../components/sections/details-guide';
// ////////////////////////////////////////////

const GuideDetailPage = (props) => (
  <div>
    <Head>
      <title>Guide Details</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <GuideDetailSection {...props} />
    </Layout>
  </div>
);

export default withLayout(GuideDetailPage);
