"use client";

import { useState, useEffect, useRef } from "react";
import Loading from "../LoadingScreen";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { supabase } from "@/app/lib/supabaseClient";
import { heroImages } from "../Data/WorksImage";
import { useQuery } from "@tanstack/react-query";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const boxRef = useRef(null);
  const heroRef = useRef(null);
  const divTopRef = useRef(null);
  const bubbleImgRef = useRef(null);
  const meImgRef = useRef(null);

  const {
    data: videoUrl,
    isLoading: isVideoUrlLoading,
    error: videoUrlError,
  } = useQuery({
    queryKey: ["heroVideoUrl"],
    queryFn: async () => {
      const { data, error } = await supabase.storage
        .from("portfolio")
        .getPublicUrl("hero-row.mp4");

      if (error) {
        throw new Error(`Error fetch video: ${error.message}`);
      }
      return data.publicUrl;
    },
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60 * 24,
  });

  useEffect(() => {
    if (!isVideoUrlLoading && !videoUrlError) {
      setIsLoading(false);
    }
  }, [isVideoUrlLoading, videoUrlError]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(divTopRef.current, {
      backgroundColor: "#161616",
      scrollTrigger: {
        trigger: divTopRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });

    if (!isLoading && videoUrl) {
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
    }
  }, [isLoading, videoUrl]);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    if (!isLoading && videoUrl) {
      mm.add("(min-width: 768px)", () => {
        let boxAnim = gsap.to(boxRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          width: "95vw",
          height: "90vh",
          borderRadius: 0,
          rotate: 0,
          xPercent: -35,
          yPercent: 100,
          ease: "none",
        });

        return () => {
          mm.revert();
        };
      });
    }
  }, [isLoading, videoUrl]);

  return (
    <div
      id="hero"
      ref={divTopRef}
      className="font-pretendard text-black min-h-[300vh]"
    >
      <div ref={heroRef} className="relative h-screen backdrop-blur-3xl">
        {(isLoading || isVideoUrlLoading) && (
          <Loading onComplete={() => setIsLoading(false)} />
        )}

        {videoUrlError && (
          <div className="absolute inset-0 flex items-center justify-center text-red-500 z-50">
            {videoUrlError.message}
          </div>
        )}

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
                P<span className="mr-2 sm:mr-4 md:mr-6">(</span>
                <span className="ml-2 sm:ml-4 md:ml-6">&nbsp;)</span>
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
                    className="z-10 opacity-0 max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </span>{" "}
        </h1>
        {!isLoading && videoUrl && (
          <video
            ref={boxRef}
            className="absolute rounded-xl 
                       lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-[40%] lg:left-[37%] lg:rotate-12
                       top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-[90vw] h-auto max-w-full rotate-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}
