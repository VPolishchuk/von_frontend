import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout';
import withLayout from '../hoc/withLayout';
import LoginComponent from '../components/sections/login';
// ////////////////////////////////////////////////////////////////////

const LoginPage = (props) => (
  <div>
    <Head>
      <title>Sing Up</title>
      <link rel='icon' href='/favicon.ico' />
      <script src="https://js.fast.co/button.js?key=Gyk57Olj8LrdVpOznWoMR4QnXDPYe1JA"></script>
    </Head>
    <Layout>
      <LoginComponent {...props} />
    </Layout>
  </div>
);

export default withLayout(LoginPage);
