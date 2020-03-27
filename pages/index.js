import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import withLayout from '../hoc/withLayout';
import SectionComponent from '../components/sections/home-page';
// //////////////////////////////////////////////////////////////

const HomePage = (props) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <SectionComponent {...props} />
    </Layout>
  </div>
);

export default withLayout(HomePage);
