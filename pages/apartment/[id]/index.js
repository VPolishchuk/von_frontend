import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout';
import withLayout from '../../../hoc/withLayout';
import ApartmentDetailSection from '../../../components/sections/apartment-details';
// ///////////////////////////////////////////////////////////////////////////////////

const ApartmentDetailPage = (props) => (
  <div>
    <Head>
      <title>Apartment Detail</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <ApartmentDetailSection {...props} />
    </Layout>
  </div>
);

export default withLayout(ApartmentDetailPage);
