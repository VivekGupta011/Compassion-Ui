"use client";
import BlueGiftIcon from "@/constants/AssetsSvg/BlueGiftIcon";
import React, { useEffect, useState } from "react";
import CardCategory from "./CardCategory";
import client from "@/contentful-cms/contentfulClient";
import { Entry } from "contentful";


const CardInfo = () => {
  const [modalData, setModalData] = useState<Entry<any>[]>([]);

  async function getEntriesByContentType(contentType: string) {
    try {
      const response = await client.getEntries<any>({ content_type: contentType });
      return response.items;
    } catch (error) {
      console.error("Error fetching entries:", error);
      return [];
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEntriesByContentType("modal");
      setModalData(data);
    };

    fetchData();
  }, []);

  console.log("Modal Data:", modalData);

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
            <CardCategory CardData={modalData}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardInfo;
