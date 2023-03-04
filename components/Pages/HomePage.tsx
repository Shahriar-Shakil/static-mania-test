import React from 'react';
import Articles from '../Articles';
import CTA from '../CTA';
import Features from '../Features';
import Layout from '../Layout/Layout';

import RecentEpisodes from '../RecentEpisodes';

type Props = {};

export default function HomePage({}: Props) {
  return (
    <Layout>
      <CTA />
      <Features />
      <RecentEpisodes />
      <Articles />
    </Layout>
  );
}
