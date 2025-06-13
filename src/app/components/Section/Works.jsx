"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useTriggerStore from "@/app/store/triggerStore";
import {
  bigyohamyoImg,
  ulmangyoImg,
  coconutImg,
  hiddenImageSrc,
} from "../Data/WorksImage";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const worksRef = useRef(null);
  const setWorksRef = useTriggerStore((state) => state.setWorksRef);

  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);

  const bigyohamyo1Ref = useRef(null);
  const bigyohamyo2Ref = useRef(null);
  const bigyohamyo3Ref = useRef(null);
  const bigyohamyo4Ref = useRef(null);

  const ulmangyo1Ref = useRef(null);
  const ulmangyo2Ref = useRef(null);
  const ulmangyo3Ref = useRef(null);
  const ulmangyo4Ref = useRef(null);

  const coconut1Ref = useRef(null);
  const coconut2Ref = useRef(null);
  const coconut3Ref = useRef(null);
  const coconut4Ref = useRef(null);

  const withCulture1Ref = useRef(null);
  const withCulture2Ref = useRef(null);
  const withCulture3Ref = useRef(null);
  const withCulture4Ref = useRef(null);

  const bigyohamyoHoverArea = useRef(null);
  const ulmangyoHoverArea = useRef(null);
  const coconutHoverArea = useRef(null);
  const withCultureHoverArea = useRef(null);

  const bigyohamyoHiddenImage = useRef(null);
  const ulmangyoHiddenImage = useRef(null);
  const coconutHiddenImage = useRef(null);
  const withCultureHiddenImage = useRef(null);

  useEffect(() => {
    setWorksRef(worksRef);
  }, [setWorksRef]);

  useGSAP(() => {
    let sections = gsap.utils.toArray(".section");
    const tween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        pinSpacer: false,
        scrub: 1,
        end: () => "+=" + scrollRef.current.offsetWidth,
        // markers: true,
      },
    });

    if (box1Ref.current) {
      gsap.to(box1Ref.current, {
        x: "-=1000",
        y: "-=800",
        scale: 5,
        opacity: 1,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    }

    if (box2Ref.current) {
      gsap.to(box2Ref.current, {
        x: "-=700",
        y: "-=500",
        scale: 80,
        opacity: 1,
        scrollTrigger: {
          trigger: section2Ref.current,
          horizontal: true,
          start: "60% 60%",
          end: "right 80%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (box3Ref.current) {
      gsap.to(box3Ref.current, {
        x: "-=800",
        y: "+=500",
        scale: 7,
        scrollTrigger: {
          trigger: section3Ref.current,
          horizontal: true,
          start: "left 80%",
          end: "right 20%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (box4Ref.current) {
      gsap.to(box4Ref.current, {
        x: "-=1200",
        y: "-=500",
        scale: 7,
        scrollTrigger: {
          trigger: section4Ref.current,
          horizontal: true,
          start: "left 80%",
          end: "right 20%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (bigyohamyo1Ref.current) {
      gsap.to(bigyohamyo1Ref.current, {
        x: "-=800",
        y: "-=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: section2Ref.current,
          horizontal: true,
          start: "left 80%",
          end: "right 20%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (bigyohamyo2Ref.current) {
      gsap.to(bigyohamyo2Ref.current, {
        x: "+=800",
        y: "+=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: section2Ref.current,
          horizontal: true,
          start: "40% 80%",
          end: "right 60%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (bigyohamyo3Ref.current) {
      gsap.to(bigyohamyo3Ref.current, {
        x: "+=800",
        y: "-=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: section2Ref.current,
          horizontal: true,
          start: "40% 80%",
          end: "right 60%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (bigyohamyo4Ref.current) {
      gsap.to(bigyohamyo4Ref.current, {
        x: "-=800",
        y: "+=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: section2Ref.current,
          horizontal: true,
          start: "40% 80%",
          end: "right 60%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (ulmangyo1Ref.current) {
      gsap.to(ulmangyo1Ref.current, {
        x: "-=800",
        y: "-=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: section3Ref.current,
          horizontal: true,
          start: "left 80%",
          end: "right 20%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (ulmangyo2Ref.current) {
      gsap.to(ulmangyo2Ref.current, {
        x: "+=800",
        y: "+=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: section3Ref.current,
          horizontal: true,
          start: "40% 80%",
          end: "right 60%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (ulmangyo3Ref.current) {
      gsap.to(ulmangyo3Ref.current, {
        x: "+=800",
        y: "-=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: section3Ref.current,
          horizontal: true,
          start: "40% 80%",
          end: "right 60%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (ulmangyo4Ref.current) {
      gsap.to(ulmangyo4Ref.current, {
        x: "-=800",
        y: "+=700",
        rotation: 180,
        width: 400,
        height: 400,
        ease: "circ.inOut",
        opacity: 1,
        scrollTrigger: {
          trigger: section3Ref.current,
          horizontal: true,
          start: "40% 80%",
          end: "right 60%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (coconut1Ref.current) {
      gsap.to(coconut1Ref.current, {
        x: "-=800",
        y: "-=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: section4Ref.current,
          horizontal: true,
          start: "left 80%",
          end: "right 20%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (coconut2Ref.current) {
      gsap.to(coconut2Ref.current, {
        x: "+=800",
        y: "+=700",
        rotation: 180,
        ease: "circ.inOut",
        width: 400,
        height: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: section4Ref.current,
          horizontal: true,
          start: "40% 80%",
          end: "right 60%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (coconut3Ref.current) {
      gsap.to(coconut3Ref.current, {
        x: "+=800",
        y: "-=700",
        rotation: 180,
        width: 400,
        height: 400,
        ease: "sine.inOut",
        opacity: 1,
        scrollTrigger: {
          trigger: section4Ref.current,
          horizontal: true,
          start: "40% 80%",
          end: "right 60%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (coconut4Ref.current) {
      gsap.to(coconut4Ref.current, {
        x: "-=800",
        y: "+=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: section4Ref.current,
          horizontal: true,
          start: "40% 80%",
          end: "right 60%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (withCulture1Ref.current) {
      gsap.to(withCulture1Ref.current, {
        x: "-=800",
        y: "-=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: section5Ref.current,
          horizontal: true,
          start: "left 80%",
          end: "right 20%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (withCulture2Ref.current) {
      gsap.to(withCulture2Ref.current, {
        x: "+=800",
        y: "+=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: section5Ref.current,
          horizontal: true,
          start: "40% 80%",
          end: "right 60%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (withCulture3Ref.current) {
      gsap.to(withCulture3Ref.current, {
        x: "+=800",
        y: "-=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: section5Ref.current,
          horizontal: true,
          start: "40% 80%",
          end: "right 60%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    if (withCulture4Ref.current) {
      gsap.to(withCulture4Ref.current, {
        x: "-=800",
        y: "+=700",
        rotation: 180,
        width: 400,
        height: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: section5Ref.current,
          horizontal: true,
          start: "40% 80%",
          end: "right 60%",
          scrub: 1,
          containerAnimation: tween,
        },
      });
    }

    const setupHoverEffect = (
      hoverAreaRef,
      hiddenImageRef,
      offsetX = 10,
      offsetY = 10,
      scale = 0.8
    ) => {
      const hoverArea = hoverAreaRef.current;
      const hiddenImage = hiddenImageRef.current;

      if (!hoverArea || !hiddenImage) return;

      gsap.set(hiddenImage, { opacity: 0, scale: scale, display: "none" });

      const onMouseMove = (e) => {
        gsap.to(hiddenImage, {
          x: e.clientX + offsetX,
          y: e.clientY + offsetY,
          duration: 0.1,
          ease: "power2.out",
        });
      };

      const onMouseEnter = () => {
        gsap.to(hiddenImage, {
          opacity: 1,
          scale: 1,
          display: "block",
          duration: 0.4,
          ease: "back.out(1.7)",
          overwrite: "auto",
        });
        hoverArea.addEventListener("mousemove", onMouseMove);
      };

      const onMouseLeave = () => {
        gsap.to(hiddenImage, {
          opacity: 0,
          scale: scale,
          display: "none",
          duration: 0.3,
          ease: "power2.in",
          overwrite: "auto",
        });
        hoverArea.removeEventListener("mousemove", onMouseMove);
      };

      hoverArea.addEventListener("mouseenter", onMouseEnter);
      hoverArea.addEventListener("mouseleave", onMouseLeave);

      return () => {
        hoverArea.removeEventListener("mouseenter", onMouseEnter);
        hoverArea.removeEventListener("mouseleave", onMouseLeave);
        hoverArea.removeEventListener("mousemove", onMouseMove);
        gsap.killTweensOf(hiddenImage);
      };
    };

    const cleanupBigyohamyo = setupHoverEffect(
      bigyohamyoHoverArea,
      bigyohamyoHiddenImage,
      -500,
      -500,
      0.7
    );

    const cleanupUlmangyo = setupHoverEffect(
      ulmangyoHoverArea,
      ulmangyoHiddenImage,
      -500,
      -1000,
      0.7
    );

    const cleanupCoconut = setupHoverEffect(
      coconutHoverArea,
      coconutHiddenImage,
      -500,
      -500,
      0.7
    );

    const cleanupWithCulture = setupHoverEffect(
      withCultureHoverArea,
      withCultureHiddenImage,
      -500,
      -1000,
      0.7
    );

    return () => {
      cleanupBigyohamyo();
      cleanupUlmangyo();
      cleanupCoconut();
      cleanupWithCulture();
    };
  }, []);

  return (
    <div ref={worksRef} className="relative min-h-[100vh]">
      <div
        ref={containerRef}
        className="sticky top-0 flex h-screen overflow-hidden"
      >
        <div ref={scrollRef} className="flex w-[400vw]">
          <div
            ref={section1Ref}
            className="section w-screen h-screen flex items-center justify-center bg-transparent"
          >
            <div className="flex flex-col uppercase font-chab text-6xl md:text-8xl lg:text-10xl tracking-tighter bg-gradient-to-r from-[#000000] to-[#a4a5a5] text-transparent bg-clip-text z-50">
              <div
                ref={box1Ref}
                className="opacity-0 border-2 border-black rounded-md w-8 h-8"
              ></div>
              <span>개인</span>
              <span>프로젝트</span>
            </div>
          </div>

          <div
            ref={section2Ref}
            className="section w-screen h-screen flex items-center justify-center bg-transparent"
          >
            <div className="relative">
              <Image
                ref={bigyohamyo1Ref}
                src={bigyohamyoImg[0].ImgUrl}
                alt={bigyohamyoImg[0].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                ref={bigyohamyo2Ref}
                src={bigyohamyoImg[1].ImgUrl}
                alt={bigyohamyoImg[1].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                ref={bigyohamyo3Ref}
                src={bigyohamyoImg[2].ImgUrl}
                alt={bigyohamyoImg[2].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                ref={bigyohamyo4Ref}
                src={bigyohamyoImg[3].ImgUrl}
                alt={bigyohamyoImg[3].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />

              <a
                href="https://bigyohamyo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="z-50 relative"
              >
                <span
                  ref={bigyohamyoHoverArea}
                  className="text-6xl md:text-9xl lg:text-12xl tracking-tighter cursor-pointer"
                  style={{ fontFamily: "Paperlogy-8ExtraBold" }}
                >
                  비교하묘
                </span>
                <Image
                  ref={bigyohamyoHiddenImage}
                  src={hiddenImageSrc[0].src}
                  alt="비교하묘 로고"
                  width={700}
                  height={700}
                  className="fixed pointer-events-none z-[9999]"
                  unoptimized
                />
              </a>
            </div>
            <div
              ref={box2Ref}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 bg-yellow-300 rounded-none w-1 h-1"
            ></div>
          </div>

          <div
            ref={section3Ref}
            className="section w-screen h-screen flex items-center justify-center bg-transparent"
          >
            <div className="relative">
              <Image
                ref={ulmangyo1Ref}
                src={ulmangyoImg[0].ImgUrl}
                alt={ulmangyoImg[0].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                ref={ulmangyo2Ref}
                src={ulmangyoImg[1].ImgUrl}
                alt={ulmangyoImg[1].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                ref={ulmangyo3Ref}
                src={ulmangyoImg[2].ImgUrl}
                alt={ulmangyoImg[2].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                ref={ulmangyo4Ref}
                src={ulmangyoImg[3].ImgUrl}
                alt={ulmangyoImg[3].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />

              <a
                href="https://ulmangyo.site"
                target="_blank"
                rel="noopener noreferrer"
                className="z-50 relative"
              >
                <span
                  ref={ulmangyoHoverArea}
                  className="text-6xl md:text-9xl lg:text-12xl tracking-tighter cursor-pointer"
                  style={{ fontFamily: "PFStardust" }}
                >
                  얼만교
                </span>
                <Image
                  ref={ulmangyoHiddenImage}
                  src={hiddenImageSrc[2].src}
                  alt="ulmangyo logo"
                  width={500}
                  height={500}
                  className="fixed pointer-events-none z-[9999]"
                  unoptimized
                />
              </a>
            </div>

            <div
              ref={box3Ref}
              className="border-2 border-black rounded-sm w-4 h-4"
            ></div>
          </div>

          <div
            ref={section4Ref}
            className="section w-screen h-screen flex items-center justify-center bg-transparent"
          >
            <div className="relative">
              <Image
                ref={coconut1Ref}
                src={coconutImg[0].ImgUrl}
                alt={coconutImg[0].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                ref={coconut2Ref}
                src={coconutImg[1].ImgUrl}
                alt={coconutImg[1].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                ref={coconut3Ref}
                src={coconutImg[2].ImgUrl}
                alt={coconutImg[2].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                ref={coconut4Ref}
                src={coconutImg[3].ImgUrl}
                alt={coconutImg[3].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />

              <div
                ref={box4Ref}
                className="border-2 border-black rounded-sm w-4 h-4"
              ></div>
              <a
                href="https://coconut-leejihyeons-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="z-50 relative"
              >
                <span
                  ref={coconutHoverArea}
                  className="font-leagueSpartan font-bold text-6xl md:text-9xl lg:text-12xl tracking-tighter cursor-pointer"
                >
                  COCONUT.
                </span>
                <Image
                  ref={coconutHiddenImage}
                  src={hiddenImageSrc[1].src}
                  alt="코코넛 로고"
                  width={800}
                  height={800}
                  className="fixed pointer-events-none z-[9999]"
                  unoptimized
                />
              </a>
            </div>
          </div>

          <div
            ref={section5Ref}
            className="section w-screen h-screen flex items-center justify-center bg-transparent"
          >
            <div className="relative">
              <Image
                ref={withCulture1Ref}
                src={coconutImg[0].ImgUrl}
                alt={coconutImg[0].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                ref={withCulture2Ref}
                src={coconutImg[1].ImgUrl}
                alt={coconutImg[1].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                ref={withCulture3Ref}
                src={coconutImg[2].ImgUrl}
                alt={coconutImg[2].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                ref={withCulture4Ref}
                src={coconutImg[3].ImgUrl}
                alt={coconutImg[3].alt}
                width={1}
                height={1}
                className="opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />

              <div
                ref={box5Ref}
                className="border-2 border-black rounded-sm w-4 h-4"
              ></div>
              <a
                href="https://github.com/ncdino/WithCulture"
                target="_blank"
                rel="noopener noreferrer"
                className="z-50 relative"
              >
                <Image
                  ref={withCultureHoverArea}
                  src="/WithCulture.svg"
                  alt="with culture"
                  width={1000}
                  height={1000}
                  className="cursor-pointer"
                  unoptimized
                />
                <Image
                  ref={withCultureHiddenImage}
                  src={hiddenImageSrc[3].src}
                  alt="위드컬쳐 프리뷰"
                  width={400}
                  height={400}
                  className="fixed pointer-events-none z-[9999]"
                  unoptimized
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
