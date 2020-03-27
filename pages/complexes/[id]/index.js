import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout';
import withLayout from '../../../hoc/withLayout';
import ComplexesDetailSection from '../../../components/sections/complexes-detail';
// ////////////////////////////////////////////////////////////////////////////////

const LocationDetailPage = (props) => (
  <div>
    <Head>
      <title>Location Details</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <ComplexesDetailSection {...props} />
    </Layout>
  </div>
);

export default withLayout(LocationDetailPage);
