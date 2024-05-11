"use client";

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const ResourcesPage: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true); // Set the mounted state to true once the component mounts
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Ensure the router is used only after the component has mounted
      setTimeout(() => {
        router.replace('https://github.com/vasa-develop/awesome-synthetic-biology');
      }, 3000);
    }
  }, [isMounted, router]);

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
    </div>
  );
};

export default ResourcesPage;
