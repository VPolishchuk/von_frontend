import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import withLayout from '../hoc/withLayout';
import ComplexesSection from '../components/sections/complexes-page';
// ////////////////////////////////////////////;

const ComplexesPage = (props) => (
  <div>
    <Head>
      <title>Location</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <ComplexesSection {...props} />
    </Layout>
  </div>
);

export default withLayout(ComplexesPage);
