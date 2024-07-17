import Image from "next/image";

import React, { FC } from "react";

interface CardProps {
  image: string;
  title: string;
  desc: string;
  price: string;
}
const Card: FC<CardProps> = ({ image, title, desc, price }) => {
  return (
    <div className="mt-7 shadow-xl rounded-3xl">
      <figure>
        <Image
          className="rounded-xl h-[250px] lg:h-[290px]"
          src={image}
          alt="rumah 1"
          height={400}
          width={500}
          objectFit="cover"
        />
      </figure>
      <div className="flex-col flex items-center justify-center">
        <h2 className="font-bold text-2xl text-[#7d5d3f] mt-5">{title}</h2>
        <p className="text-[#515e70]">{desc}</p>
        <p className="my-5 px-3 py-1 text-white font-semibold text-xl lg:text-xl bg-[#d5904e] rounded-2xl">
          {price}
        </p>
      </div>
    </div>
  );
};

export default Card;
