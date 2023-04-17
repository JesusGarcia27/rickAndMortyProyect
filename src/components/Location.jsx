import React from "react";

const Location = ({ location }) => {
  return (
    <section className="p-2 mb-8 grid gap-2 auto-rows-auto  max-w-[1000px] mx-auto border-solid border-2 border-[#8EFF8B] rounded-md bg-gray-600 shadow-lg shadow-[#8EFF8B]/70 
    hover:bg-gray-800 ">
      <h2 className="text-center text-2xl text-[#8EFF8B] sm:text-center">
        {location?.name}{" "}
      </h2>
      <ul className="flex justify-between px-3 sm:flex sm:justify-between">
        <li className="text-white">
          Type: <span className="text-[#8EFF8B]">{location?.type}</span>{" "}
        </li>
        <li className="text-white">
          Dimension:{" "}
          <span className="text-[#8EFF8B]">{location?.dimension}</span>{" "}
        </li>
        <li className="text-white">
          Population:{" "}
          <span className="text-[#8EFF8B]">{location?.residents.length}</span>{" "}
        </li>
      </ul>
    </section>
  );
};

export default Location;
