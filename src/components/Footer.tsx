import React from 'react';
import MainLogo from '@/constants/AssetsSvg/MainLogo';
import Facebook from '@/constants/AssetsSvg/Facebook';
import Youtube from '@/constants/AssetsSvg/Youtube';
import Insta from '@/constants/AssetsSvg/Insta';
import PlayStore from '@/constants/AssetsSvg/PlayStore';
import AppStore from '@/constants/AssetsSvg/AppStore';

const Footer = () => {
  return (
    <footer className="w-full bg-custom-blue py-5">
      <div className="flex justify-center">
        <div className="max-w-screen relative min-w-0 flex-grow px-4 md:px-[40px] lg:mx-10 lg:max-w-[1100px] lg:px-0">
          <div className="grid grid-cols-1 justify-items-center gap-5 py-5">
            <div>
              <a href="/">
                <MainLogo />
              </a>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-5">
              <ul className="flex list-none items-center justify-center gap-5">
                <li className="before:hidden">
                  <a
                    href="https://www.facebook.com/compassionuk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook />
                  </a>
                </li>
                <li className="before:hidden">
                  <a
                    href="http://www.youtube.com/compassionuk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Youtube />
                  </a>
                </li>
                <li className="before:hidden">
                  <a
                    href="https://instagram.com/compassionuk/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Insta />
                  </a>
                </li>
              </ul>
              <ul className="flex list-none items-center justify-center gap-5">
                <li className="h-[50px] w-auto before:hidden">
                  <a
                    href="https://itunes.apple.com/gb/app/compassion-uk-org/id1436294092?mt=8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AppStore />
                  </a>
                </li>
                <li className="h-[50px] w-auto before:hidden">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.geecon.compassionuk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PlayStore />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Address and Contact Info */}
      <div className="flex flex-col items-center justify-center mt-5 text-center text-white">
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 384 512"
              className="fill-current"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
            </svg>
            <a
              href="https://www.google.com/maps/place/Compassion+UK/@51.2985039,-0.8310981,18z/data=!4m5!3m4!1s0x487675c4ba146ffd:0x2c889290e62fa19e!8m2!3d51.2984498!4d-0.8299914"
              target="_blank"
              rel="noreferrer"
              className="text-base"
            >
              Compassion House, Barley Way, Fleet, Hampshire, GU51 2UT
            </a>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 512 512"
              className="fill-current"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448 18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <a href="tel:01932 836490" target="_blank" rel="noreferrer" className="text-base">
              01932 836490
            </a>
          </div>
        </div>
        <hr className="my-4 w-full xl:w-[1400px] border-white" />
        <div>
          <p className="font-weight-500 font-sm text-center md:text-left">
            Copyright © 2005-{new Date().getFullYear()} Compassion UK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
