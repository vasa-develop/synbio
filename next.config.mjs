/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['synbio.sh'], // Existing configuration
  },
  async redirects() {
    return [
      {
        source: '/resources', // Path to redirect from
        destination: 'https://vasa.bio/publications-talks/how-to-learn-synthetic-biology-as-a-programmer', // External URL to redirect to
        permanent: true, // Use true for a 308 permanent redirect
      },
    ];
  },
};

export default nextConfig;
