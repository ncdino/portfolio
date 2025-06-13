"use client";

import { useState, useEffect, useRef } from "react";
import Loading from "../LoadingScreen";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { supabase } from "@/app/lib/supabaseClient";
import { heroImages } from "../Data/WorksImage";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const boxRef = useRef(null);
  const heroRef = useRef(null);
  const divTopRef = useRef(null);
  const bubbleImgRef = useRef(null);
  const meImgRef = useRef(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("portfolio")
          .getPublicUrl("hero-row.mp4");

        if (error) {
          console.error("Error fetching video URL:", error);
        } else {
          setVideoUrl(data.publicUrl);
        }
      } catch (error) {
        console.error("Unexpected error fetching video URL:", error);
      }
    };

    fetchVideoUrl();
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 등록

    gsap.to(divTopRef.current, {
      backgroundColor: "#161616",
      scrollTrigger: {
        trigger: divTopRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });

    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", delay: 3 }
    );

    gsap.fromTo(
      pRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.3, ease: "bounce", delay: 3 }
    );

    gsap.fromTo(
      bubbleImgRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.3, ease: "bounce", delay: 2 }
    );

    gsap.fromTo(
      meImgRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.3, ease: "bounce", delay: 2 }
    );
  }, []);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    if (!isLoading) {
      mm.add("(min-width: 768px)", () => {
        let boxAnim = gsap.to(boxRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            // markers: true,
            scrub: 1,
          },
          width: "95vw",
          height: "90vh",
          borderRadius: 0,
          rotate: 0,
          xPercent: -35,
          yPercent: 100,
          ease: "none",
          // pin: true,
        });

        return () => {
          mm.revert();
        };
      });
    }
  }, [isLoading]);

  return (
    <div id="hero" ref={divTopRef} className="font-pretendard text-black">
      <div ref={heroRef} className="relative h-screen backdrop-blur-3xl">
        <Image
          ref={bubbleImgRef}
          src={heroImages[0].ImgUrl}
          alt={heroImages[0].alt}
          width={heroImages[0].width}
          height={heroImages[0].height}
          className="opacity-0 lg:absolute lg:left-96 lg:top-3 lg:block sm:hidden z-0"
        />
        {isLoading && <Loading onComplete={() => setIsLoading(false)} />}
        <h1 className="flex flex-col font-chab font-light tracking-tighter sm:text-5xl lg:text-9xl sm:px-6 md:px-7 lg:px-8 overflow-hidden">
          <span className="text-center">
            <div className="flex flex-col gap-1">
              <span
                ref={h1Ref}
                className="opacity-0 py-20 bg-gradient-to-r from-[#5053ff] to-[#071217] text-transparent bg-clip-text"
              >
                <span>
                  JIHYEON'S
                  <br />
                </span>
              </span>
              <span
                ref={pRef}
                className="opacity-0 bg-gradient-to-r from-[#5053ff] to-[#071217] text-transparent bg-clip-text"
              >
                P<span className="mr-[1.5em]">(</span>
                <span className="ml-[1em]">&nbsp;)</span>
                <span>RTFOLIO</span>
              </span>
              <div className="md:grid md:grid-cols-2">
                <div className="sm:hidden md:block"></div>
                <div className="sm:hidden md:block">
                  <Image
                    ref={meImgRef}
                    src={heroImages[1].ImgUrl}
                    alt={heroImages[1].alt}
                    width={heroImages[1].width}
                    height={heroImages[1].height}
                    className="z-10 opacity-0"
                  />
                </div>
              </div>
            </div>
          </span>{" "}
          {/* <Image src='/leejh.png' alt='he' width={500} height={500} /> */}
          {/* <span ref={pRef} className="opacity-0 text-end text-transparent bg-clip-text">JIHYEON</span> */}
        </h1>
        {!isLoading && videoUrl && (
          <video
            ref={boxRef}
            className="absolute rounded-xl lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-[40%] lg:left-[37%] lg:rotate-12"
            autoPlay
            loop
            muted
            playsInline
            // preload="none"
            // controls
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="h-[130dvh]"></div>
    </div>
  );
}
