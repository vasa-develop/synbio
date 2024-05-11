import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Image from 'next/image';

const RedirectPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to GitHub repository after a slight delay for the Twitter crawler
    setTimeout(() => {
      // Using router.replace to avoid pushing a new entry into the history stack
      router.replace('https://github.com/vasa-develop/awesome-synthetic-biology');
    }, 3000);  // 3000 milliseconds delay
  }, [router]);

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

export default RedirectPage;
