import React from 'react';

import { Layout } from '../styles/pages/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import CardViewer from '../components/contents/cardViewer';

export default function Home(props) {
  return (
    <Layout>
      <Header />
      <pre>{JSON.stringify(props, null, 4)}</pre>
      <Main>
        <CardViewer />
      </Main>
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      PRIVATE_KEY: process.env.PRIVATE_KEY,
    },
  };
}
