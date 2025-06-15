"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useTriggerStore from "@/app/store/triggerStore";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Insight = () => {
  const insightRef = useRef(null);
  const setInsightRef = useTriggerStore((state) => state.setInsightRef);
  const setActiveSectionId = useTriggerStore(
    (state) => state.setActiveSectionId
  );

  const headerFirstRef = useRef(null);
  const headerSecondRef = useRef(null);
  const headerThirdRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    setInsightRef(insightRef);
  }, [setInsightRef]);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    let commonTriggerInstance = null;
    if (insightRef.current) {
      commonTriggerInstance = ScrollTrigger.create({
        trigger: insightRef.current,
        start: "top top",
        scrub: true,
        pin: true,
        onEnter: () => setActiveSectionId("insight"),
        onLeaveBack: () => setActiveSectionId(null),
        // markers: true
      });
    }

    mm.add("(max-width: 767px)", () => {
      console.log("Mobile Animations Applied");

      if (headerFirstRef.current) {
        gsap.from(headerFirstRef.current, {
          y: -100,
          scrollTrigger: {
            trigger: insightRef.current,
            start: "top center",
            end: "+=1000",
            scrub: true,
            // markers: true
          },
        });
      }

      if (headerThirdRef.current) {
        gsap.from(headerThirdRef.current, {
          y: 100,
          scrollTrigger: {
            trigger: insightRef.current,
            start: "top center",
            end: "+=1000",
            scrub: true,
            // markers: true
          },
        });
      }

      if (h1Ref.current) {
        gsap.to(h1Ref.current, {
          fontSize: "2.5rem",
          scrollTrigger: {
            trigger: insightRef.current,
            start: "top top",
            end: "+=400",
            scrub: true,
            // markers: true
          },
        });
      }

      if (h2Ref.current) {
        gsap.to(h2Ref.current, {
          opacity: 1,
          scrollTrigger: {
            trigger: h2Ref.current,
            start: "top top",
            end: "+=100",
            scrub: true,
            // markers: true
          },
        });
      }

      if (headerSecondRef.current) {
        gsap.to(headerSecondRef.current, {
          fontSize: "2.5rem",
          opacity: 1,
          scrollTrigger: {
            trigger: insightRef.current,
            start: "top top",
            end: "+=400",
            scrub: true,
            // markers: true
          },
        });
      }
    });

    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      console.log("Tablet Animations Applied");

      if (headerFirstRef.current) {
        gsap.from(headerFirstRef.current, {
          y: -150,
          scrollTrigger: {
            trigger: insightRef.current,
            start: "top center",
            end: "+=1500",
            scrub: true,
            // markers: true
          },
        });
      }

      if (headerThirdRef.current) {
        gsap.from(headerThirdRef.current, {
          y: 150,
          scrollTrigger: {
            trigger: insightRef.current,
            start: "top center",
            end: "+=1500",
            scrub: true,
            // markers: true
          },
        });
      }

      if (h1Ref.current) {
        gsap.to(h1Ref.current, {
          fontSize: "4rem",
          scrollTrigger: {
            trigger: insightRef.current,
            start: "top top",
            end: "+=600",
            scrub: true,
            // markers: true
          },
        });
      }

      if (h2Ref.current) {
        gsap.to(h2Ref.current, {
          opacity: 1,
          scrollTrigger: {
            trigger: h2Ref.current,
            start: "top top",
            end: "+=150",
            scrub: true,
            // markers: true
          },
        });
      }

      if (headerSecondRef.current) {
        gsap.to(headerSecondRef.current, {
          fontSize: "4rem",
          opacity: 1,
          scrollTrigger: {
            trigger: insightRef.current,
            start: "top top",
            end: "+=600",
            scrub: true,
            // markers: true
          },
        });
      }
    });

    mm.add("(min-width: 1024px)", () => {
      console.log("Desktop Animations Applied");

      if (headerFirstRef.current) {
        gsap.from(headerFirstRef.current, {
          y: -200,
          scrollTrigger: {
            trigger: insightRef.current,
            start: "top center",
            end: "+=2000",
            scrub: true,
            // markers: true
          },
        });
      }

      if (headerThirdRef.current) {
        gsap.from(headerThirdRef.current, {
          y: 200,
          scrollTrigger: {
            trigger: insightRef.current,
            start: "top center",
            end: "+=2000",
            scrub: true,
            // markers: true
          },
        });
      }

      if (h1Ref.current) {
        gsap.to(h1Ref.current, {
          fontSize: "7rem",
          scrollTrigger: {
            trigger: insightRef.current,
            start: "top top",
            end: "+=800",
            scrub: true,
            // markers: true
          },
        });
      }

      if (h2Ref.current) {
        gsap.to(h2Ref.current, {
          opacity: 1,
          scrollTrigger: {
            trigger: h2Ref.current,
            start: "top top",
            end: "+=200",
            scrub: true,
            // markers: true
          },
        });
      }

      if (headerSecondRef.current) {
        gsap.to(headerSecondRef.current, {
          fontSize: "7rem",
          opacity: 1,
          scrollTrigger: {
            trigger: insightRef.current,
            start: "top top",
            end: "+=800",
            scrub: true,
            // markers: true
          },
        });
      }
    });

    return () => {
      mm.revert();
      if (commonTriggerInstance) {
        commonTriggerInstance.kill();
      }
    };
  }, [setActiveSectionId]);

  return (
    <section
      id="profile"
      ref={insightRef}
      className="font-pretendard font-extralight tracking-tighter bg-[#161616] text-[#FFF7E9]"
    >
      <div className="min-h-screen flex flex-col gap-20 justify-center items-center transition-all duration-500">
        <span className="flex flex-col gap-2">
          <h1 ref={h1Ref} className="text-6xl md:text-10xl lg:text-12xl flex">
            <span ref={headerFirstRef} className="mr-2 lg:mr-6">
              LEE
            </span>
            <span className="mr-2 lg:mr-6">JI</span>
            <span ref={headerThirdRef} className="mr-2 lg:mr-6">
              HYEON
            </span>
          </h1>
          <span
            ref={headerSecondRef}
            className="opacity-0 text-xs font-bold mt-4 md:mt-7 lg:mt-10"
          >
            INSIGHT
          </span>
        </span>
        <h2
          ref={h2Ref}
          className="opacity-0 text-lg lg:text-3xl text-center justify-center items-center mx-8 md:mx-4 lg:mx-2"
        >
          협업을 통해 <span className="font-extrabold">즐거움</span>을 느끼고,
          안정적인 환경에서 <span className="font-extrabold">꾸준한 성장</span>
          을 꿈꾸는 신입 개발자입니다.
        </h2>
      </div>
    </section>
  );
};

export default Insight;
