import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const CertCard = forwardRef(
  (
    {
      headerColor,
      topTitle,
      mainTitle,
      profileImgSrc,
      ciImgSrc,
      logoWidth,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          className,
          `font-pretendard tracking-tighter aspect-[3/4] rounded-4xl grid grid-rows-3
          col-span-1 w-72 z-10 text-white`
        )}
      >
        <div
          className={`relative ${headerColor} w-full h-full flex flex-col items-center justify-center rounded-t-4xl text-center`}
        >
          <span className="text-light text-base lg:text-lg">{topTitle}</span>
          <span className="text-light font-extrabold text-lg lg:text-xl mb-6">
            {mainTitle}
          </span>
          <div className="absolute top-32 lg:top-[6.8rem] w-32 h-32 md:w-30 md:h-30 lg:w-24 lg:h-24 overflow-hidden rounded-4xl">
            <img
              src={profileImgSrc}
              alt={`${mainTitle} 프로필 이미지`}
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative row-span-2 bg-light flex flex-col justify-center items-center gap-4 -z-10 rounded-b-4xl">
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <img
              src={ciImgSrc}
              alt={`${mainTitle} 발급기관 로고`}
              className={twMerge(`row-span-1`, logoWidth)}
            />
          </div>
          {children}
        </div>
      </div>
    );
  }
);

export default CertCard;
