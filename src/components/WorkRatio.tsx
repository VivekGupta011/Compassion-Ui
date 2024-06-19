import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import WorkRatioIcon from "@/constants/AssetsSvg/WorkRatioIcon";

const WorkRatio = () => {
  return (
    <section className="bg-bg-sky-blue">
      <div className="flex justify-center">
        <div className="max-w-screen relative min-w-0 flex-grow px-4 md:px-[40px] lg:mx-10 lg:max-w-[1100px] lg:px-0">
          <div className="py-8 md:py-12">
            <h2 className="relative mb-11 text-center text-2xl font-bold text-work-ratio-text-color md:text-[33px]">
              <span className="yellow-underline">Give</span> with confidence
            </h2>

            <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 md:w-4/5 md:flex-row md:gap-10">
              <div className="text-center md:text-left">
                <p className="mb-4 text-base text-compassion-black md:text-lg">
                  At Compassion, we are committed to handling the finances
                  entrusted to us with the utmost integrity. Your donations are
                  used wisely and strategically, and always for the greatest
                  benefit of children in poverty.
                </p>
                <a
                  className="inline-block text-work-ratio-text-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  See exactly where your money goes{" "}
                  <IoIosArrowForward className="inline-block mb-[2px]" />
                </a>
              </div>
              <div className="flex items-center">
                <WorkRatioIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkRatio;
