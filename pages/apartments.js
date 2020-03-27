import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import withLayout from '../hoc/withLayout';
import ApartmentsSection from '../components/sections/apartments-page';
// ////////////////////////////////////////////////////////////////////////////

const ApartmentsPage = (props) => (
  <div>
    <Head>
      <title>Apartments Page</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <ApartmentsSection {...props} />
    </Layout>
  </div>
);

export default withLayout(ApartmentsPage);
