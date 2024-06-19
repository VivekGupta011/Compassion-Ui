import React from 'react';

const Help = () => {
  return (
    <section className="relative bg-help-bg text-center text-white">
      {/* SVG Icon */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-inherit p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"   
          viewBox="0 0 64 64"
        >
          <path
            fill="#fff"
            d="M32 5.12a26.879 26.879 0 11-19.007 7.873A26.885 26.885 0 0132 5.12M32 0a32 32 0 1022.627 9.373A32 32 0 0032 0z"
            data-name="Path 815"
          ></path>
          <path
            fill="#fff"
            d="M44.343 23.493l.69.065a13.426 13.426 0 014.935 1.28 8.2 8.2 0 013.4 2.91 7.509 7.509 0 011.158 3.315 7.3 7.3 0 01-.243 3.047 7.9 7.9 0 01-1.855 3.143 21.22 21.22 0 01-3.2 2.63c-.64.443-1.21.9-1.81 1.362a3.836 3.836 0 00-1.183 1.71c-.128.345-.275.69-.41 1.038a2.388 2.388 0 01-2.228 1.58 3.135 3.135 0 01-1.62-.255 2.643 2.643 0 01-1.452-1.977 4.54 4.54 0 01.767-3.393 9.328 9.328 0 012.01-2.125c.838-.685 1.7-1.337 2.56-2.023a6.727 6.727 0 001.753-2 3.752 3.752 0 00-.447-4.16 3.434 3.434 0 00-1.92-1.063 6.114 6.114 0 00-2.983.05 3.641 3.641 0 00-2.31 1.92c-.3.563-.562 1.14-.845 1.71a4.11 4.11 0 01-.825 1.158 2.863 2.863 0 01-2.17.7 3.017 3.017 0 01-1.37-.37 2.376 2.376 0 01-1.28-2.113 6.2 6.2 0 011.28-3.918 9.9 9.9 0 013.84-3.11 11.741 11.741 0 013.642-1.05l.718-.07z"
            data-name="Path 816"
            transform="translate(-12.048 -8.453)"
          ></path>
          <path
            fill="#fff"
            d="M46.66 72.508c-.193-.037-.385-.07-.57-.122a3.546 3.546 0 111.538.057l-.312.065z"
            data-name="Path 817"
            transform="translate(-15.64 -23.548)"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="flex justify-center">
        <div className="max-w-screen relative min-w-0 flex-grow px-4 md:px-[40px] lg:mx-10 lg:max-w-[1100px] lg:px-0">
          <div className="py-12">
            <p className="mb-3 text-[22px] font-medium md:text-[26px]">
              Need some help?
            </p>
            <div className="flex flex-col justify-center text-base font-light md:text-xl">
              <p>
                <b>01932 836490</b> – Lines are open from 10am-5pm Monday to
                Friday.
              </p>
              <p>
                Please leave a voicemail if you call outside these hours and
                we’ll get in touch as soon as we can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
