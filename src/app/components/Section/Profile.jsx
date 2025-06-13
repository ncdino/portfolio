"use client";

import { useEffect, useRef } from "react";
import useTriggerStore from "@/app/store/triggerStore";
import CardScrollAnimation from "@/app/components/Card/CardScrollAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Profile({ id }) {
  const profileRef = useRef(null);
  const setProfileRef = useTriggerStore((state) => state.setProfileRef);
  const sectionRef = useRef(null);
  const setActiveSectionId = useTriggerStore(
    (state) => state.setActiveSectionId
  );

  useEffect(() => {
    setProfileRef(profileRef);

    return () => {
      setProfileRef(null);
    };
  }, [setProfileRef]);

  useGSAP(() => {
    let triggerInstance = null;
    if (sectionRef.current) {
      triggerInstance = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: true,
        // markers: true,
        scrub: true,
        onEnter: () => setActiveSectionId(id),
        onLeaveBack: () => setActiveSectionId(null),
      });
    }
  }, [id, setActiveSectionId]);

  return (
    <div id="works" ref={profileRef}>
      <div
        ref={sectionRef}
        className="font-pretendard tracking-tighter grid h-[100dvh] min-h-[100dvh]"
      >
        <div>
          <CardScrollAnimation />
        </div>
      </div>
    </div>
  );
}
