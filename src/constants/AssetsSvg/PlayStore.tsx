import React from "react";
import Image from "next/image";
import playStoreIcon from "../../../public/Play-Store-Badge.png";

const PlayStore = () => {
  return (
    <ul className="flex list-none items-center justify-center gap-5">
      <li className="h-[50px] w-auto before:hidden">
        <a
          href="https://itunes.apple.com/gb/app/compassion-uk-org/id1436294092?mt=8"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="App-Store-Badge"
            loading="lazy"
            width={150}
            height={50}
            className="App-Store-Badge h-full w-full object-contain"
            style={{ color: "transparent" }}
            src={playStoreIcon}
          />
        </a>
      </li>
    </ul>
  );
};

export default React.memo(PlayStore);
