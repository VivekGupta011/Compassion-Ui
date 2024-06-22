import sanityClient from '@sanity/client';

const sanityCMSIntegration = sanityClient({
  projectId: process.env.NEXT_PUBLIC_CONTENTFUL_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_CONTENTFUL_DATASET,
  apiVersion: '2021-05-21', // Update to the latest API version
  useCdn: true, // Enable CDN caching
});

export default sanityCMSIntegration;
