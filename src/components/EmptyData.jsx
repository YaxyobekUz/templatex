import React from "react";

// Components
import Icon from "./Icon";

// images
import emptyDataImg from "../assets/images/others/empty-data.png";

const EmptyData = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3.5 ${className}`}
    >
      <Icon src={emptyDataImg} alt="empty data" className="size-24" />

      {/* title */}
      <strong className="font-medium text-dark-800/70 text-sm xs:text-base">
        Data not available
      </strong>
    </div>
  );
};

export default EmptyData;
