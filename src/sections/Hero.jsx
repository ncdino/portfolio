import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const HeroContainer = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    if (leftCardRef.current && rightCardRef) {
      const heroAnimation = gsap.to(
        [leftCardRef.current, rightCardRef.current],
        {
          autoAlpha: 1,
          duration: 1,
          stagger: 0.5,
          ease: "power2.out",
        }
      );

      return () => {
        heroAnimation.kill();
      };
    }
  }, []);

  return (
    <div
      id="home-section"
      ref={HeroContainer}
      className="min-h-screen flex flex-col gap-4 lg:gap-40 p-4"
    >
      <div className="grid md:grid-cols-4 gap-4 mt-16 md:mt-18">
        <div
          ref={leftCardRef}
          className="border-4 row-span-1 md:col-span-2 flex justify-center bg-gray-900 dark:bg-gray-700 items-center h-[500px] rounded-4xl font-medium p-4 opacity-0"
        >
          <span className="font-[Modak] text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-teal-500 to-sky-300 bg-clip-text text-transparent">
            LEE JIHYEON
          </span>
        </div>
        <div
          ref={rightCardRef}
          className="relative border-4 row-span-1 md:col-span-2 aspect grid grid-rows-3 h-[500px] bg-gradient-to-br from-[#1A1A1A] via-[#2F2F2F] to-[#474747] dark:from-[#F8F8F8] dark:via-[#E0E0E0] dark:to-[#C8C8C8] rounded-4xl p-4 overflow-clip opacity-0"
          onClick={() => window.open("https://github.com/ncdino", "_blank")}
        >
          <i className="absolute bxl bx-github text-[400px] lg:text-[500px] -bottom-20 -right-20 text-neutral-200 dark:text-neutral-700"></i>
          <div className="row-span-2" />
          <div className="row-span-1">
            <span className="absolute font-light text-8xl text-neutral-200 dark:text-gray-700 z-10 items-center">
              <span className="font-bold">G</span>
              <span>ithub</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
