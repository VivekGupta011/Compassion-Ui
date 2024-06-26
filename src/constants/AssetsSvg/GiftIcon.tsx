import React from "react";

const GiftIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
    >
      <path
        fill="#FED100"
        d="M34.2 9.113h-5.04a5.122 5.122 0 001.44-3.645A5.337 5.337 0 0025.2 0c-1.8 0-5.04 1.64-7.2 3.827C15.84 1.64 12.6 0 10.8 0a5.337 5.337 0 00-5.4 5.468 5.122 5.122 0 001.44 3.645H1.8A1.711 1.711 0 000 10.935v5.1a.39.39 0 00.36.365h15.12a.779.779 0 00.72-.729V9.842a.779.779 0 01.72-.729h2.16a.779.779 0 01.72.729v5.832a.779.779 0 00.72.729h15.12a.39.39 0 00.36-.365v-5.1a1.711 1.711 0 00-1.8-1.825zM10.8 7.29A1.711 1.711 0 019 5.468a1.711 1.711 0 011.8-1.823c1.08 0 4.32 2.187 5.22 3.281-.54.182-5.22.364-5.22.364zm14.4 0s-4.68-.182-5.22-.365c1.08-1.276 4.14-3.281 5.22-3.281A1.711 1.711 0 0127 5.468a1.711 1.711 0 01-1.8 1.822z"
        data-name="Path 1"
      ></path>
      <path
        fill="#FED100"
        d="M19.81 55H5.39a.406.406 0 00-.39.365V69.58a1.784 1.784 0 001.949 1.82H19.81a.813.813 0 00.779-.729V55.729A.813.813 0 0019.81 55z"
        data-name="Path 2"
        transform="translate(-4.567 -35.403)"
      ></path>
      <path
        fill="#FED100"
        d="M70.2 55H55.779a.813.813 0 00-.779.729v14.945a.813.813 0 00.779.729h12.862a1.784 1.784 0 001.949-1.823V55.365A.406.406 0 0070.2 55z"
        data-name="Path 3"
        transform="translate(-34.598 -35.403)"
      ></path>
    </svg>
  );
};

export default React.memo(GiftIcon);
