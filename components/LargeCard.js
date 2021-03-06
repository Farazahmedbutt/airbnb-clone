import React from "react";
import Image from "next/image";
function LargeCard({ img, title, description, buttonText }) {
  const loader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality} || 75`;
  };
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px] ">
        <Image
          className="rounded-2xl"
          src={img}
          loader={loader}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl w-64 mb-3">{title}</h3>
        <p>{description}</p>
        <button className="rounded-lg text-sm text-white bg-gray-900 px-4 py-2 mt-4">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
