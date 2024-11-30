"use client";
import Head from 'next/head';
import type { NextPage } from 'next';
import RedirectLink from './components/RedirectLink';

const ResourcesPage: NextPage = () => {
 
  return (
    <div>
      <Head>
        <title>Your Custom Title</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vasa_develop" />
        <meta name="twitter:title" content="Awesome Synthetic Biology - vasa" />
        <meta name="twitter:description" content="A curated list of resources dedicated to Synthetic Biology" />
        <meta name="twitter:image" content="/awesome_syn_bio.png" />
        <meta property="og:url" content="https://synbio.sh/redirect" />
        <meta property="og:title" content="Awesome Synthetic Biology - vasa" />
        <meta property="og:description" content="A curated list of resources dedicated to Synthetic Biology" />
        <meta property="og:image" content="/awesome_syn_bio.png" />
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img src="/genomics.gif" alt="Loading..." width={100} height={100} />
      </div>
      <RedirectLink link='https://vasa.bio/publications-talks/how-to-learn-synthetic-biology-as-a-programmer' />
    </div>
  );
};

export default ResourcesPage;
