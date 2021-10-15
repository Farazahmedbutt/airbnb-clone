import React from "react";
import Image from "next/image";
function MediumCard({ img, title }) {
  const loader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality} || 75`;
  };
  return (
    <div className="hover:scale-105 cursor-pointer transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image className="rounded-md" layout="fill" src={img} loader={loader} />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
