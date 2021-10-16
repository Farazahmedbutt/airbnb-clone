import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCards({ img, location, title, desc, star, price, total }) {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-100 first:border-top">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover
        "
        ></Image>
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between ">
          <p className="text-sm">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="font-semibold">{title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="pt-2 text-sm text-gray-500 flex-grow">{desc}d</p>
        <div className="flex items-center justify-between">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" /> {star}
          </p>

          <div>
            <p className="text-lg lg:2xl font-semibold pb-2">{price}</p>
            <p className="text-sm font-extralight text-right">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoCards;
