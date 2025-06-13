"use client";

import { MorphSVGPlugin, ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { LEEJIHYEON } from "../Data/MorphText";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

export default function MyProfile() {
  const pathRef = useRef(null);

  const containerRef = useRef(null);
  const section1Ref = useRef(null);

  const shape1 =
    "M 0 66 L 0 0 L 36.4 0 L 36.4 3.2 L 3.05 3.2 L 3.05 31.3 L 35.45 31.3 L 35.45 34.5 L 3.05 34.5 L 3.05 62.8 L 36.4 62.8 L 36.4 66 L 0 66 Z M 85.3 39.9 L 85.3 66 L 82 66 L 82 40.95 Q 82 33.4 78.5 30.175 Q 75 26.95 69.6 26.95 Q 66 26.95 62.65 29.05 Q 59.3 31.15 57.125 34.75 Q 54.95 38.35 54.95 42.8 L 54.95 66 L 51.75 66 L 51.75 24.95 L 54.95 24.95 L 54.95 33.35 Q 55.25 31.55 57.3 29.3 Q 59.35 27.05 62.6 25.4 Q 65.85 23.75 69.7 23.75 Q 73.45 23.75 77.05 25.4 Q 80.65 27.05 82.975 30.625 Q 85.3 34.2 85.3 39.9 Z M 164.1 45.2 L 129.45 45.2 Q 129.45 50.05 131.25 54.375 Q 133.05 58.7 136.75 61.4 Q 140.45 64.1 146.1 64.1 Q 150.65 64.1 153.575 62.55 Q 156.5 61 158.175 58.925 Q 159.85 56.85 160.5 55.3 L 163.45 57.3 Q 161.45 60.55 159 62.775 Q 156.55 65 153.375 66.1 Q 150.2 67.2 145.95 67.2 Q 139.5 67.2 135.05 64.175 Q 130.6 61.15 128.325 56.075 Q 126.05 51 126.05 44.95 Q 126.05 38.95 128.375 34.15 Q 130.7 29.35 135.125 26.55 Q 139.55 23.75 145.8 23.75 Q 151.35 23.75 155.475 26.325 Q 159.6 28.9 161.9 33.35 Q 164.2 37.8 164.2 43.5 Q 164.2 43.95 164.15 44.375 Q 164.1 44.8 164.1 45.2 Z M 95.4 28.15 L 95.4 24.95 L 104.35 24.95 L 104.35 8.1 L 107.55 8.1 L 107.55 24.95 L 119.25 24.95 L 119.25 28.15 L 107.55 28.15 L 107.55 55.9 Q 107.55 60.45 109.25 62.225 Q 110.95 64 113.25 64 Q 115.6 64 116.75 63.2 Q 117.9 62.4 118.1 62.15 L 120.05 64.8 Q 119.8 65.05 118.95 65.65 Q 118.1 66.25 116.675 66.725 Q 115.25 67.2 113.15 67.2 Q 109.5 67.2 106.925 64.725 Q 104.35 62.25 104.35 56.7 L 104.35 28.15 L 95.4 28.15 Z M 179.25 41.7 L 179.25 66 L 176.15 66 L 176.15 24.95 L 179.25 24.95 L 179.25 32.65 L 179 32.65 Q 179.15 31.3 180.775 29.2 Q 182.4 27.1 185.225 25.425 Q 188.05 23.75 191.75 23.75 Q 194.65 23.75 196.65 24.45 Q 198.65 25.15 199.35 25.85 L 197.8 28.7 Q 197.1 28.15 195.35 27.55 Q 193.6 26.95 191.1 26.95 Q 187.6 26.95 184.925 29.45 Q 182.25 31.95 180.75 35.4 Q 179.25 38.85 179.25 41.7 Z M 129.7 42 L 160.65 42 Q 160.55 38.75 159.175 35.25 Q 157.8 31.75 154.6 29.325 Q 151.4 26.9 145.8 26.9 Q 139.9 26.9 136.475 29.25 Q 133.05 31.6 131.525 35.1 Q 130 38.6 129.7 42 Z";

  const shape2 =
    "M50,5 L58,35 L90,35 L65,55 L73,85 L50,70 L27,85 L35,55 L10,35 L42,35 Z";

  useEffect(() => {
    if (pathRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      gsap.to(section1Ref.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: true,
          scrub: true,
        },
      });
      tl.to(pathRef.current, {
        duration: 5,
        morphSVG: {
          shape: LEEJIHYEON,
          type: "rotational",
          origin: "center center",
        },
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <section ref={containerRef}>
      <div className="min-h-screen flex flex-col items-center justify-center mb-40">
        <section></section>
        <svg width="300" height="300" viewBox="0 0 120 300">
          <path ref={pathRef} d={shape1} fill="#3b82f6" />
        </svg>
      </div>
      <div ref={section1Ref} className="bg-black min-h-screen"></div>
    </section>
  );
}
