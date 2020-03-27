import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout';
import withLayout from '../hoc/withLayout';
import SingInComponent from '../components/sections/sing-in-page';
// //////////////////////////////////////////////////////////////////

const SingInPage = (props) => (
  <div>
    <Head>
      <title>Sing In</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <SingInComponent {...props} />
    </Layout>
  </div>
);

export default withLayout(SingInPage);
