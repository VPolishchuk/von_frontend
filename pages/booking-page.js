import React from 'react'
import Head from 'next/head';
import withLayout from '../hoc/withLayout';
import Layout from '../components/layout';
import BookingComponent from '../components/sections/booking-page';
// ////////////////////////////////////////////

const BookingPage = (props) => (
  <div>
    <Head>
      <title>Booking Page</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <BookingComponent {...props} />
    </Layout>
  </div>
);

export default withLayout(BookingPage);
