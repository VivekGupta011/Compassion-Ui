// "use client";

// import { useEffect, useState } from 'react';
// import sanityCMSIntegration from "@/sanity-cms/sanityCMSIntegration";
// import groq from 'groq';

// const SanityCompoTest = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const query = groq`*[_type == 'modal'][0...2]`;
//         const result = await sanityCMSIntegration.fetch(query);
//         setData(result);
//       } catch (error:any) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//   console.log("data:;");
//   console.log(data);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <h1>Test here sanity!</h1>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data found.</p>}
//     </div>
//   );
// };

// export default SanityCompoTest;
// import { sanityClient, urlFor } from "@/lib/sanity";
import { sanityClient,urlFor } from "@/sanity-cms/sanityCMSIntegration";
import { GetStaticProps } from "next";

type ModalData = {
  _id: string;
  giftType: string;
  giftamount: string;
  bgimage: {
    asset: {
      _ref: string;
    };
  };
};

type HomePageProps = {
  data: ModalData[];
};

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <div>
      <h1>Sanity Modals</h1>
      {data.map((modal) => (
        <div key={modal._id}>
          <h2>{modal.giftType}</h2>
          <p>Amount: {modal.giftamount}</p>
          {modal.bgimage && (
            <img src={urlFor(modal.bgimage).url()} alt={modal.giftType} />
          )}
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "modal"] {
    _id,
    giftType,
    giftamount,
    bgimage
  }`;

  const data = await sanityClient.fetch(query);

  return {
    props: {
      data,
    },
  };
};

export default HomePage;
