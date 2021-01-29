import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

const Bio = () => {
  return (
    <Layout>
      <Head>
        <title>Bio | {siteTitle}</title>
      </Head>
    </Layout>
  );
};

export default Bio;
