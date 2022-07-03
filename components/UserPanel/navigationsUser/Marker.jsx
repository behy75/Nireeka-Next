import React from "react";
import { useSelector } from "react-redux";

export default function Marker() {
  const state = useSelector((state) => state);
  let { getLocByMacData } = state.nsd;

  return (
    <div className="w-full h-1100 bg-white rounded-3xl my-5 shadow-sm border border-gray-200 flex flex-col justify-center items-center">
      <iframe
        src={
          getLocByMacData
            ? `https://maps.google.com/maps?q=${getLocByMacData.lat}, ${getLocByMacData.long}&z=15&output=embed`
            : "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.294420466!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1644997455926!5m2!1sen!2s"
        }
        className="w-full h-full rounded-3xl"
        style={{ border: 0 }}
        // allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
