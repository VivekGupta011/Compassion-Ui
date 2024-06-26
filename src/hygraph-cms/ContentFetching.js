import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_BASE_URL
);

export const CardsFetching = async () => {
  const query = gql`
    query CompassionUis {
      compassionUis {
        createdAt
        giftAmount
        giftDescription
        id
        publishedAt
        updatedAt
        giftType
        giftBgImage {
          url
        }
      }
    }
  `;
  const response=await graphQLClient.request(query);
  return response;
};
