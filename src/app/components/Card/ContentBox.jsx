"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContentBox({ content, detail, image, id }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex border justify-start items-end bg-white border-none w-72 h-72 p-4 rounded-6xl hover:rounded-lg transition-all duration-[2000ms]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image}
        alt=""
        className="absolute top-8 left-6"
        width={52}
        height={52}
      />
      <div className="flex flex-col gap-0 px-3 py-4">
        <span className="font-normal text-sm text-[#1b2b5c]">{id % 5}.</span>
        <h3 className="tracking-tighter text-half-xl font-extrabold font-pretendard text-[#1b2b5c] whitespace-nowrap">
          {content || ""}
        </h3>
      </div>
      {isHovered && detail && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 text-white backdrop-blur-sm flex justify-center items-center p-4 rounded-6xl hover:rounded-lg transition-all duration-[2000ms]">
          <p className="text-lg">{detail}</p>
        </div>
      )}
    </div>
  );
}
