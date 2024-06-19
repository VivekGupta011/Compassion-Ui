import React from "react";
import Image from "next/image";
import playStore from "../../../public/App-Store-Badge.png";

const AppStore = () => {
  return (
    <ul className="flex list-none items-center justify-center gap-5">
      <li className="h-[50px] w-auto before:hidden">
        <a
          href="https://play.google.com/store/apps/details?id=com.geecon.compassionuk"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="Play-Store-Badge"
            loading="lazy"
            width={168}
            height={50}
            className="Play-Store-Badge h-full w-full object-contain"
            style={{ color: "transparent" }}
            src={playStore}
          />
        </a>
      </li>
    </ul>
  );
};

export default React.memo(AppStore);
