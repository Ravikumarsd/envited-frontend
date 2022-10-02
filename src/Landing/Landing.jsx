import React from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../EventCard/EventCard";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-center text-4xl font-semibold mt-12">
        <div>Imagine if</div>
        <div
          style={{
            background:
              "linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Snapchat
        </div>
        <div className="bg ">had events.</div>
      </div>
      <div className="text-center font-light opacity-75 pl-8 pr-8 mt-4 text-xl">
        <div>Easily host and share events with your friends</div>
        <div>across any social media.</div>
      </div>
      <div className="flex justify-center items-center flex-col mt-10 mb-10">
        <EventCard />
        <button
          onClick={() => navigate("/event")}
          className="text-white pl-6 pr-6 pt-2 pb-2 mt-6 mb-6 rounded-lg"
          style={{
            background:
              "linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)",
          }}
        >
          🎉 Create my event
        </button>
      </div>
    </div>
  );
};

export default Landing;
