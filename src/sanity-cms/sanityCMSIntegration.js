import sanityClient from '@sanity/client';

const sanityCMSIntegration = sanityClient({
  projectId: 'd1isiif6',
  dataset: 'production',
  apiVersion: '2021-05-21', // Update to the latest API version
  useCdn: true, // Enable CDN caching
});

export default sanityCMSIntegration;