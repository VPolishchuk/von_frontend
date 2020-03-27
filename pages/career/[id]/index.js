import React from 'react';
import Head from 'next/head';
// import useJobsDetail from '../../../hook/useJobDetails';
import Layout from '../../../components/layout';
import withLayout from '../../../hoc/withLayout';
import CareerDetailSection from '../../../components/sections/career-details';
// /////////////////////////////////////////////////////////////////////

const CareerDetailPage = (props) => (
  <div>
    <Head>
      <title>Career Details</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <CareerDetailSection {...props} />
    </Layout>
  </div>
);

export default withLayout(CareerDetailPage);
