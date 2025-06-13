"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loading = ({ onComplete }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
        gsap.to(counterRef.current, {
          duration: 0.5,
          opacity: 0,
          scale: 0.5,
          ease: "power1.inOut",
        });
        document.body.style.overflow = "auto";
      },
    });

    gsap.set(counterRef.current, { opacity: 1, scale: 0.8 });

    tl.to(counterRef.current, {
      duration: 3,
      innerText: 100,
      snap: "innerText",
      ease: "power1.inOut",
      scale: 1.2,
    }).to(counterRef.current, {
      duration: 1,
      scale: 1,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="font-chab text-black text-6xl font-bold">
        <span ref={counterRef}>0</span>%
      </div>
    </div>
  );
};

export default Loading;
