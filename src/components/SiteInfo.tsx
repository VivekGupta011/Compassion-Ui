import HeaderSvgA from '@/constants/AssetsSvg/HeaderSvgA';
import HeaderSvgB from '@/constants/AssetsSvg/HeaderSvgB';
import HeaderSvgC from '@/constants/AssetsSvg/HeaderSvgC';
import React from 'react';

const SiteInfo = () => {
  return (
    <section className="overflow-hidden bg-custom-blue">
      <div className="flex justify-center">
        <div className="max-w-screen relative min-w-0 flex-grow px-4 md:px-[40px] lg:mx-10 lg:max-w-[1100px] lg:px-0">
          <div className="w-full pb-12 pt-7 md:gap-14 lg:py-8">
            {/* Cards Container */}
            <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-5">
              {/* First Card */}
              <div className="giftProcess relative flex items-center justify-center gap-4 px-0 text-white lg:pr-5">
                <div>
                  <HeaderSvgA />
                </div>
                <div>
                  <h2 className="mb-2 text-xl font-bold">Choose</h2>
                  <p className="text-base font-normal">Every gift meets a need for someone living in poverty.</p>
                </div>
                <div className="lg:absolute lg:right-[-2%] lg:h-full lg:w-full lg:bg-[url('https://res.cloudinary.com/ducmkcdyu/image/upload/v1707987965/gift-catalogue/steps_arrow_right_4087ca_kg52br.png')] lg:bg-contain lg:bg-right lg:bg-no-repeat"></div>
              </div>

              {/* Second Card */}
              <div className="giftProcess relative flex items-center justify-center gap-4 px-0 text-white lg:pr-5 lg:pl-5">
                <div>
                  <HeaderSvgB />
                </div>
                <div>
                  <h2 className="mb-2 text-xl font-bold">Personalise</h2>
                  <p className="text-base font-normal">Send a message to loved ones with our beautiful e-card.</p>
                </div>
                <div className="lg:absolute lg:right-[-2%] lg:h-full lg:w-full lg:bg-[url('https://res.cloudinary.com/ducmkcdyu/image/upload/v1707987965/gift-catalogue/steps_arrow_right_4087ca_kg52br.png')] lg:bg-contain lg:bg-right lg:bg-no-repeat"></div>
              </div>

              {/* Third Card */}
              <div className="giftProcess relative flex items-center justify-center gap-4 px-0 text-white lg:pl-5">
                <div>
                  <HeaderSvgC />
                </div>
                <div>
                  <h2 className="mb-2 text-xl font-bold">Empower</h2>
                  <p className="text-base font-normal">Enable children and families to overcome poverty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteInfo;
