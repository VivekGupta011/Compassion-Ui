import React from "react";

const WorkRatioIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="240"
      height="240"
      viewBox="0 0 240 240"
    >
      <circle cx="120" cy="120" r="110" fill="transparent"></circle>
      <circle
        cx="120"
        cy="120"
        r="110"
        fill="transparent"
        stroke-dasharray="690.8"
        stroke-dashoffset="138"
        stroke="#0086bf"
        stroke-width="5"
        // style="animation: 5s linear 0s 1 normal forwards running progress; transform-origin: center center; transform: rotate(-90deg);"
        style={{
          animation: "progress 5s linear forwards",
          transformOrigin: "center center",
          transform: "rotate(-90deg)",
        }}
      ></circle>
      <text x="92" y="80" fill="#0086bf" font-size="30" font-weight="bold">
        80%
      </text>
      <text
        x="120"
        y="100"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="16"
        fill="#425563"
      >
        A minimum of 80%
      </text>
      <text
        x="120"
        y="120"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="16"
        fill="#425563"
      >
        is used to directly
      </text>
      <text
        x="120"
        y="140"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="16"
        fill="#425563"
      >
        benefit children in
      </text>
      <text
        x="120"
        y="160"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="16"
        fill="#425563"
      >
        poverty
      </text>
    </svg>
  );
};

export default React.memo(WorkRatioIcon);
