
import Image from "next/image";
import Button from "./Button";
import CompassionText from "@/constants/AssetsSvg/CompassionText";
import GiftIcon from "@/constants/AssetsSvg/GiftIcon";
import client from "@/contentful-cms/contentfulClient";
 
const Hero = async () => {
  return (
    <section className="relative flex min-h-[565px] w-full items-end justify-center bg-[url('https://res.cloudinary.com/ducmkcdyu/image/upload/v1707987930/gift-catalogue/hero_gift_catalogue_landing_mobile_2x_szi30j.webp')] bg-cover bg-center bg-no-repeat md:items-center md:bg-[url('https://res.cloudinary.com/ducmkcdyu/image/upload/v1707987930/gift-catalogue/hero_gift_catalogue_landing_desktop_2x_cpinxg.webp')]">
      <div className="h-full w-full">
        <div className="flex justify-center">
          <div className="max-w-screen relative min-w-0 flex-grow px-4 md:px-[40px] lg:mx-10 lg:max-w-[1100px] lg:px-0">
            <div className="flex w-full flex-col items-center justify-center py-12 md:w-[600px] md:items-start">
              {/* SVG content here */}
              <div className="mb-4 hidden sm:block md:mb-8">
                <CompassionText />
              </div>
              <p className="text-white text-xl md:text-2xl text-center md:text-left mb-4">
                Our charity gifts meet real needs for children and families
                living in poverty. From clean water to chickens, you’ll find
                lots of thoughtful gifts that help transform lives.
              </p>
              <div className="flex flex-row">
                <div className="px-3">
                  {" "}
                  <GiftIcon />
                </div>
                <p className="text-white text-lg md:text-xl text-center md:text-left leading-[2.75]">
                  Find the perfect gift
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
