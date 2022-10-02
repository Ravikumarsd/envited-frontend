import React from "react";
import EventInfoItem from "../EventInfoItem/EventInfoItem";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Event = () => {
  return (
    <div>
      <div>
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221002T064103Z&X-Amz-Expires=86400&X-Amz-Signature=656ecdb2bc84991904dc45dc84e46138bcd4326088d72da5d27289e3357922ff&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
          alt="birthday"
        />
      </div>
      <div className="mt-4 ml-6">
        <div className="text-3xl font-semibold text-primary-purple-dark">
          Birthday Bash
        </div>
        <div className="text-grey-100 mt-2">
          Hosted by <span className="font-semibold">Elysia</span>
        </div>
      </div>
      <div>
        <EventInfoItem
          icon={<IoCalendarOutline size={28} color="#8456EC" />}
          primaryText="18 August 6:00PM"
          secondaryText="to 19 August 1:00PM UTC +10"
        />
        <EventInfoItem
          icon={<HiOutlineLocationMarker size={28} color="#8456EC" />}
          primaryText="Street Name"
          secondaryText="Suburb, State, Postcode"
        />
      </div>
    </div>
  );
};

export default Event;
