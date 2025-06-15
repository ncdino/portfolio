"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useTriggerStore from "@/app/store/triggerStore";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CardScrollAnimation() {
  const profileRef = useTriggerStore((state) => state.profileRef);
  const cardsRef = useRef(null);
  const card1Ref = useRef(null);
  const card3Ref = useRef(null);

  useGSAP(() => {
    if (!profileRef || !profileRef.current) {
      return;
    }
    // console.log("현재 profileRef:", profileRef.current);

    // console.log("profileRef:", profileRef.current);

    gsap.context(() => {
      gsap.to(cardsRef.current, {
        scale: 1.75,
        scrollTrigger: {
          trigger: profileRef.current,
          start: "11% center",
          end: "center center",
          pin: true,
          pinSpacing: false,
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(card1Ref.current, {
        rotate: -20,
        scale: 0.75,
        x: -200,
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top center",
          end: "center top",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(card3Ref.current, {
        rotate: 20,
        scale: 0.75,
        x: 200,
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top center",
          end: "center top",
          scrub: true,
          // markers: true,
        },
      });
    }, profileRef.current);
  }, [profileRef]);

  return (
    <div className="flex justify-center items-center min-h-[100dvh]">
      <div
        ref={cardsRef}
        className="relative sm:w-[200px] sm:h-[200px] md:w-[350px] md:h-[350px]"
      >
        <a
          href="https://unsplash.com/photos/IuF6G4b4XSI"
          ref={card1Ref}
          className="absolute top-0 left-0 sm:w-[200px] sm:h-[200px] md:w-[350px] md:h-[350px] rounded-lg bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589828994425-cee7c6e8dbf8?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></a>

        <a
          href="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute top-0 left-0 sm:w-[200px] sm:h-[200px] md:w-[350px] md:h-[350px] rounded-lg bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1597754255094-6f952470f88a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></a>

        <a
          href="https://unsplash.com/photos/IJyXoyGmiZY"
          ref={card3Ref}
          className="absolute top-0 left-0 sm:w-[200px] sm:h-[200px] md:w-[350px] md:h-[350px] rounded-lg bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605640194493-44894a08b57d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></a>
      </div>
      {/* <div className="h-screen">

      </div> */}
    </div>
  );
}
