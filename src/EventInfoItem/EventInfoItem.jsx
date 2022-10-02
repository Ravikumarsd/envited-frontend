import React from "react";
import { BsChevronRight } from "react-icons/bs";
const EventInfoItem = ({ icon, primaryText, secondaryText }) => {
  return (
    <div className="flex ml-6 m-4">
      <div className="shadow-lg w-16 h-16 flex justify-center items-center rounded-lg ">
        {icon}
      </div>
      <div className="mt-3 ml-6">
        <div className="text-primary-purple-dark font-semibold">
          {primaryText}
        </div>
        <div className="font-light">{secondaryText}</div>
      </div>
      <div className="self-center absolute right-0 mr-6">
        <BsChevronRight color="#BDBDBD" />
      </div>
    </div>
  );
};

export default EventInfoItem;
