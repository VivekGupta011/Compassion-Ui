// import sanityClient from '@sanity/client';

// const sanityCMSIntegration = sanityClient({
//   projectId: 'd1isiif6',
//   dataset: 'production',
//   apiVersion: '2021-05-21', // Update to the latest API version
//   useCdn: true, // Enable CDN caching
// });

// export default sanityCMSIntegration;
// lib/sanity.js
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: "d1isiif6",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}
