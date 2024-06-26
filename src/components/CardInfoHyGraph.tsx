"use client";

import BlueGiftIcon from "@/constants/AssetsSvg/BlueGiftIcon";
import React, { useEffect, useState } from "react";
import CardCategory from "./CardCategory";
import sanityCMSIntegration from "@/sanity-cms/sanityCMSIntegration";
import groq from 'groq';
import CardCategorySanity from "./CardCategorySanity";
import CardCategoryHyGraph from "./CardCategoryHyGraph";
import {CardsFetching} from "@/hygraph-cms/ContentFetching";

const CardInfoHyGraph = () => {
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result=await CardsFetching();
        setModalData(result?.compassionUis);
      } catch (error:any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Modal Graphql CMS Data:---", modalData);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }



  return (
    <section className="px-0 py-8 pb-20 md:py-12 md:pb-36">
      <div className="flex justify-center">
        <div className="max-w-screen relative min-w-0 flex-grow px-4 md:px-[40px] lg:mx-10 lg:max-w-[1100px] lg:px-0">
          <div className="flex flex-row gap-3">
            <div>
              <BlueGiftIcon />
            </div>
            <div>
              <h2 className="text-3xl text-footer-info font-bold">
                How it works
              </h2>
            </div>
          </div>
          <div>
            <div className="py-4">
              <p className="text-lg">
                When you choose to donate on behalf of someone as a gift, you
                bless them with knowing they’re helping transform lives for
                children in poverty. Your thoughtful gift will mean better
                access to healthcare and education. Check out our virtual gifts
                now.
              </p>
            </div>
          </div>
          <div>
             <CardCategoryHyGraph CardData={modalData}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardInfoHyGraph;
