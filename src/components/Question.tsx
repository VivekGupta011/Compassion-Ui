"use client";
import React, { useState } from "react";
import { FAQs } from "@/constants";
import FAQRotate from "@/constants/AssetsSvg/FAQRotate";

const Question = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);


    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
      

  return (
    <section className="bg-bg-sky-blue py-12.5 pb-24">
      <div className="flex justify-center">
        <div className="max-w-screen relative min-w-0 flex-grow px-4 md:px-[40px] lg:mx-10 lg:max-w-[1100px] lg:px-0">
          <div className="max-w-screen flex justify-center py-5 min-w-0 lg:max-w-full lg:px-0">
            <div className="max-w-[500px] pt-8">
              <h2 className="relative mb-8 text-center text-[26px] font-bold leading-10 pb-3 text-work-ratio-text-color md:text-[33px] border-b-2 border-yellow-500">
                <span className="text-black">Your</span> Giving FAQs
              </h2>
            </div>
          </div>

          <div className="mx-auto w-full border-t-2 border-[#0C5EB8] md:w-4/5">
            {FAQs.map((faq, index) => (
              <div
                key={index}
                className="select-none border-b border-[#D2D5D9] py-4 md:py-6"
                role="button"
                tabIndex={0}
                onClick={() => toggle(index)}
              >
                <div className="flex cursor-pointer items-center justify-between">
                  <h3 className="text-xl  font-semibold text-work-ratio-text-color md:text-2xl">
                    {faq.question}
                  </h3>
                  <div
                    className={`transform transition-transform ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <FAQRotate/>
                  </div>
                </div>
                <div
                  className={`overflow-hidden pt-3 transition-all duration-300 ease-in-out md:pt-5  ${
                    activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-base font-normal text-compassion-black">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
