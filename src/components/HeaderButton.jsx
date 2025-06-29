import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const HeaderButton = forwardRef(
  ({ title, isLogo, containerBackgroundColor, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        aria-label={`${title} 디테일 페이지 버튼`}
      >
        <div
          className={`flex justify-center items-center ${containerBackgroundColor} transition-all duration-150 ease-in rounded-2xl py-2 px-4`}
        >
          <span
            className={twMerge(
              `text-center text-amber-100`,
              isLogo
                ? "font-[Modak] text-2xl md:text-3xl lg:text-4xl uppercase tracking-normal"
                : "font-[Modak] text-sm md:text-base lg:text-lg tracking-wider"
            )}
          >
            {title}
          </span>
        </div>
      </button>
    );
  }
);

export default HeaderButton;
