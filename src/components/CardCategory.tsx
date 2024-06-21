"use client";
import SaveChildIcon from "@/constants/AssetsSvg/SaveChildIcon";
import StarIcon from "@/constants/AssetsSvg/StarIcon";
import React from "react";

const CardCategory = ({ CardData }: any) => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <button className="bg-custom-blue text-white px-4 py-2 rounded">
            All Gifts ({CardData.length})
          </button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
            Filters (4)
          </button>
        </div>
        <div>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded flex items-center">
            Sort by
            <svg
              className="w-8 h-7 ml-2 text-custom-blue"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CardData.map((item: any) => {
          const isNewGiftType = item.fields.giftType.includes("New");
          const giftType = item.fields.giftType.replace("New", "").trim();

          return isNewGiftType ? (
            <div
              key={item.sys.id}
              className="bg-bg-sky-blue shadow-md rounded-lg overflow-hidden relative"
            >
              <div className="absolute z-10 top-0 bg-bg-sky-blue left-0 text-custom-blue font-bold px-6 py-3 text-lg rounded-br flex items-center space-x-2">
                <SaveChildIcon />
                <span>{giftType}</span>
              </div>

              <div className="relative z-0">
                <img
                  className="w-full object-cover rounded-lg p-2 lg:p-4 min-h-[280px] md:min-h-[350px]"
                  src={`https:${item.fields.giftBgImage.fields.file.url}`}
                  alt="School Textbooks"
                />
                <div className="absolute bottom-0 left-0 bg-yellow-300 text-black text-sm font-bold px-4 uppercase py-3 rounded-tr-lg m-2 overflow-hidden lg:m-4">
                  New
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-Card-text-color text-2xl ">
                  {item.fields.giftType}
                </h3>
              </div>

              <div className="flex justify-between items-center mt-4 mx-3 border-t-2 border-add-top-border z-50 py-3 px-3">
                <p className="mt-2 text-Card-text-color font-bold text-2xl">
                  £{item.fields.giftAmount}
                </p>
                <button className="text-add-btn-bg font-semibold">
                  Learn More
                </button>
                <button className="bg-add-btn-bg max-w-[200px] text-white px-5 py-2 rounded font-semibold">
                  Add
                </button>
              </div>
            </div>
          ) : (
            <div
              key={item.sys.id}
              className="bg-white overflow-hidden relative flex min-h-[386px] items-end rounded-md bg-cover bg-center bg-no-repeat p-4 shadow-lg md:min-h-[500px]"
              style={{
                backgroundImage: `url(${item.fields.giftBgImage.fields.file.url})`,
              }}
            >
              <div className="p-4 w-full">
                <h3 className="text-white text-2xl font-bold">
                  {item.fields.giftType}
                </h3>

                <div className="flex justify-between items-center mt-4 border-t-2 border-yellow-500 z-50">
                  <p className="mt-2 text-white text-base font-bold">
                    From{" "}
                    <span className="block text-2xl">
                      £{item.fields.giftAmount}{" "}
                      <span className="text-sm">/PM</span>
                    </span>
                  </p>

                  <button className="text-white font-semibold">
                    Learn <span className="block">More</span>
                  </button>
                  <button className="bg-[#facc15] max-w-[200px] text-black px-5 py-2 rounded font-semibold">
                    Add
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-20"></div>
              </div>
            </div>
          );
        })}

        {/* last E-cards */}
        <div className="bg-custom-blue relative flex min-h-[386px] p-4 shadow-lg md:min-h-[500px] rounded-lg">
          <div className="flex justify-center items-center py-12 px-4 flex-col">
            <div className="pb-1 lg:pb-4">
              <StarIcon />
            </div>
            <h2 className="text-2xl text-white py-3 lg:py-4 font-bold">
              Personalised e-cards
            </h2>
            <p className="text-center text-white text-lg">
              Your loved one will receive a virtual e-card, which you can
              personalise, telling them about the impact their gift will make.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button className="text-gray-400">&lt; Previous</button>
        <div className="text-gray-700 px-4 py-2 rounded-lg">
          Page{" "}
          <span className="border border-blue-600 py-3 px-4 rounded-md">1</span>
        </div>
        <button className="text-gray-400">Next &gt;</button>
      </div>
    </div>
  );
};

export default CardCategory;
