import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import withLayout from '../hoc/withLayout';
import CareerSection from '../components/sections/careers-page';
// /////////////////////////////////////////////////////////////////

const CareerPage = (props) => (
  <div>
    <Head>
      <title>Career Page</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <CareerSection {...props} />
    </Layout>
  </div>
);

export default withLayout(CareerPage);
