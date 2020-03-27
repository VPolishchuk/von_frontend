import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import withLayout from '../hoc/withLayout';
import SupportSection from '../components/sections/support-page';
// ////////////////////////////////////////////

const SupportPage = (props) => (
  <div>
    <Head>
      <title>FAQ</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <SupportSection {...props} />
    </Layout>
  </div>
);

export default withLayout(SupportPage);
