import { forwardRef } from "react";

const ProfileCard = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="grid grid-rows-4 rounded-4xl min-h-[600px] w-[400px] bg-neutral-900 dark:bg-gray-100 text-white dark:text-black rotate-6 hover:rotate-0 transition-all duration-300 shadow-neutral-950 dark:shadow-white shadow-lg dark:shadow-lg"
    >
      <div className="row-span-1 p-8">
        <span className="font-[Modak] text-6xl">JH</span>
      </div>
      <div className="row-span-1 mx-4">
        <p className="flex items-center justify-center text-center text-lg md:text-xl lg:text-2xl">
          React와 GSAP을 활용하여 사용자 친화적이고 다이나믹한 웹 인터랙션을
          구현을 추구합니다.
        </p>
      </div>
      <div className="row-span-2 grid grid-rows-3 p-4 items-center bg-white dark:bg-black m-2 rounded-4xl text-black dark:text-white">
        <div className="row-span-1 grid grid-cols-3 items-center">
          <div className="col-span-1 flex text-center justify-center">
            <i className="bxl bx-motion-js text-7xl"></i>
          </div>
          <div className="col-span-2">
            <span className="font-bold">Framer-motion</span>
            <span>으로 다양한 인터랙션 경험을 쌓았습니다.</span>
          </div>
        </div>
        <div className="row-span-1 grid grid-cols-3 items-center">
          <div className="col-span-1 flex text-center justify-center">
            <i className="bxl bx-gsap text-7xl"></i>
          </div>
          <div className="col-span-2">
            <span className="font-bold">GSAP</span>
            <span>
              을 주력으로 사용하며, 퍼포먼스 높은 애니메이션을 구현합니다.
            </span>
          </div>
        </div>
        <div className="row-span-1 grid grid-cols-3 items-center">
          <div className="col-span-1 flex text-center justify-center">
            <i className="bxl bx-tailwind-css text-7xl"></i>
          </div>
          <div className="col-span-2">
            <span className="font-bold">Tailwind css</span>
            <span>를 주력으로 반응형 웹을 구현합니다.</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProfileCard;
