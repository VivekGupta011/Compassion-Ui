import React from 'react';

const MiddleBgImage = () => {
  return (
    <section className="relative h-[200px] w-full md:h-[350px]">
      <img
        alt="images"
        loading="lazy"
        className="object-cover object-center"
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          color: 'transparent',
        }}
        src="https://cuk.cukdev.co.uk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fducmkcdyu%2Fimage%2Fupload%2Fv1707987930%2Fgift-catalogue%2Fimage_strip_gift_catalogue_landing_xo9gku.webp&w=1920&q=75"
      />
    </section>
  );
};

export default MiddleBgImage;
