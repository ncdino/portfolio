import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroTwo() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const heroAni = gsap.fromTo(
        containerRef.current,
        { autoAlpha: 1 },
        {
          autoAlpha: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom 30%",
            scrub: 1,
            // markers: true,
          },
        }
      );
      return () => {
        heroAni.kill();
      };
    }
  }, []);

  return (
    <div
      id="home-section"
      ref={containerRef}
      className="relative flex h-screen bg-gradient-to-l dark:bg-gradient-to-r from-neutral-100 to-neutral-900 via-neutral-200 dark:via-neutral-800 dark:from-neutral-100 dark:to-neutral-900"
    >
      <div className="absolute inset-x-0 bottom-0 p-8 text-center text-black dark:text-white bg-transparent bg-opacity-50 backdrop-blur-sm">
        <h1 className="flex flex-col items-center justify-center h-full gap-1 md:gap-2">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light">
            프론트엔드 개발자
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            이지현
          </p>
          <p className="text-2xl md:text-2xl lg:text-3xl font-light">
            인사드립니다
          </p>
        </h1>
        <button className="mt-4 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
          Explore Further
        </button>
      </div>
    </div>
  );
}
