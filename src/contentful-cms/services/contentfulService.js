import client from "@/contentful-cms/contentfulClient";

async function getEntriesByContentType(contentType) {
  try {
    const response=await client.getEntries({content_type:contentType});
    return response.items;
  } catch (error) {
    console.error("Error fetching entries:", error);
    return [];
  }
}

export default getEntriesByContentType;
