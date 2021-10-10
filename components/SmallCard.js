import React from "react";
import Image from "next/image";
function SmallCard({ img, location, distance }) {
  const myLoader = ({}) => {
    return `${img}`;
  };
  return (
    <div className="flex items-center m-2 rounded-xl space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="left relative h-16 w-16  ">
        <Image
          loader={myLoader}
          src={img}
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div className="right pl-3">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
