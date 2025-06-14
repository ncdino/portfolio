"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CertCard from "../Card/CertCard";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const certificatesData = [
  {
    id: "infoEngineer",
    topTitle: "국가기술자격증",
    mainTitle: "정보처리기사",
    logoWidth: "w-20 h-10 lg:w-20 lg:h-10",
    ciImgSrc: `https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/storage/v1/object/public/portfolio/CertLogo/HRDK.png`,
    headerColor: "bg-blue-500",
    className:
      "absolute bg-white left-36 -top-10 opacity-0 shadow-2xl transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-3xl",
  },
  {
    id: "compCert",
    topTitle: "국가기술자격증",
    mainTitle: "컴퓨터활용능력 1급",
    logoWidth: "w-36 h-8 lg:w-36 lg:h-8",
    ciImgSrc: `https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/storage/v1/object/public/portfolio/CertLogo/KCCI.png`,
    headerColor: "bg-blue-500",
    className:
      "absolute bg-white right-60 -top-1 opacity-0 shadow-2xl transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-3xl",
  },
  {
    id: "linuxMaster",
    topTitle: "공인민간자격증",
    mainTitle: "리눅스마스터 2급",
    logoWidth: "w-36 h-10 lg:w-36 lg:h-10",
    ciImgSrc: `https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/storage/v1/object/public/portfolio/CertLogo/KAIT.png`,
    headerColor: "bg-green-700",
    className:
      "absolute bg-white right-24 -bottom-10 opacity-0 shadow-2xl transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-3xl",
  },
  {
    id: "az900",
    topTitle: "국제 자격증",
    mainTitle: "AZ-900",
    ciImgSrc: `https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/storage/v1/object/public/portfolio/CertLogo/MS.png`,
    headerColor: "bg-black",
    className:
      "absolute bg-white left-20 -bottom-10 opacity-0 shadow-2xl transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-3xl",
  },
  {
    id: "ociAIFoundations",
    topTitle: "국제 자격증",
    mainTitle: "OCI 2024 Certified AI Foundations Associate",
    ciImgSrc: `https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/storage/v1/object/public/portfolio/CertLogo/ORACLE.png`,
    headerColor: "bg-black",
    className:
      "absolute bg-white left-96 -bottom-24 opacity-0 shadow-2xl transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-3xl",
  },
];

export default function TiltCard() {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const boxRefs = useRef([]);
  const subContainerRef = useRef(null);
  const profileTitleRef = useRef(null);
  const cardInsideRef = useRef(null);
  const cardInsideNewBgRef = useRef(null);
  const profileContentRef = useRef(null);
  const profileContainerRef = useRef(null);
  const cardText1Ref = useRef(null);
  const cardText2Ref = useRef(null);

  const [isSwabswabHovered, setIsSwabswabHovered] = useState(false);

  boxRefs.current = certificatesData.map(
    (_, i) => boxRefs.current[i] ?? React.createRef()
  );

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardDims, setCardDims] = useState({ width: 0, height: 0 });

  const hoverEasing = "cubic-bezier(0.23, 1, 0.32, 1)";
  const returnEasing = "cubic-bezier(0.445, 0.05, 0.55, 0.95)";

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const certCardsContainer = subContainerRef.current;
    const profileTitle = profileTitleRef.current;
    const originalCardBg = cardInsideRef.current;
    const newCardBg = cardInsideNewBgRef.current;
    const profileContent = profileContentRef.current;
    const profileContainer = profileContainerRef.current;

    if (
      !card ||
      !container ||
      !certCardsContainer ||
      !profileTitle ||
      !profileContent ||
      !originalCardBg ||
      !newCardBg
    ) {
      return;
    }

    setCardDims({ width: card.offsetWidth, height: card.offsetHeight });

    let mouseLeaveTimeout;

    const handleMouseMove = (e) => {
      clearTimeout(mouseLeaveTimeout);
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x: mouseX, y: mouseY });
    };

    const handleMouseLeave = () => {
      mouseLeaveTimeout = setTimeout(() => {
        setMousePosition({ x: 0, y: 0 });
      }, 1000);
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mouseenter", () => clearTimeout(mouseLeaveTimeout));

    const cleanupEventListeners = () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("mouseenter", () =>
        clearTimeout(mouseLeaveTimeout)
      );
      clearTimeout(mouseLeaveTimeout);
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "center center",
        end: "+=6000",
        pin: true,
        pinSpacing: true,
        scrub: true,
      },
    });

    tl.fromTo(
      card,
      { autoAlpha: 0, y: 100, scale: 0.8, xPercent: -50, yPercent: -50 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1,
        xPercent: -50,
        yPercent: -50,
      }
    ).to(cardText1Ref.current, { opacity: 1 });

    tl.fromTo(
      profileTitle,
      { autoAlpha: 0, y: -50 },
      { autoAlpha: 1, y: 0 },
      ">"
    )
      .fromTo(
        profileContent,
        { autoAlpha: 0, y: -50 },
        { autoAlpha: 1, y: 0 },
        ">"
      )
      .fromTo(
        profileTitle,
        { filter: "blur(0px)", opacity: 1 },
        { opacity: 0, filter: "blur(10px)", duration: 1 },
        ">"
      )
      .to(
        profileContent,
        { opacity: 0, filter: "blur(10px)", duration: 1 },
        ">"
      )
      .to(
        [originalCardBg, cardText1Ref.current, profileTitle, profileContent],
        { opacity: 0, duration: 1, filter: "blur(10px)" },
        "-=0.5"
      )
      .fromTo(
        [newCardBg, cardText2Ref.current],
        { opacity: 0, autoAlpha: 0 },
        { opacity: 1, autoAlpha: 1, duration: 1 },
        "<"
      );

    certificatesData.forEach((cert, index) => {
      const currentCertCard = boxRefs.current[index]?.current;

      if (currentCertCard) {
        tl.fromTo(
          currentCertCard,
          { autoAlpha: 0, y: 100, scale: 0.8 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1 },
          ">"
        );
      }
    });

    tl.fromTo(
      certCardsContainer,
      { filter: "blur(0px)", opacity: 1 },
      { opacity: 0, filter: "blur(10px)", duration: 1 },
      ">"
    );
    return () => {
      cleanupEventListeners();
      tl.kill();
    };
  }, []);

  const getCardTransformStyle = () => {
    if (cardDims.width === 0 || cardDims.height === 0) return {};

    const mousePX = mousePosition.x / (cardDims.width / 2);
    const mousePY = mousePosition.y / (cardDims.height / 2);

    const rX = mousePX * 30;
    const rY = mousePY * -30;

    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      transition:
        mousePosition.x === 0 && mousePosition.y === 0
          ? `all 1s ${returnEasing}`
          : `all 0.6s ${hoverEasing}`,
    };
  };

  const getCardBgTransformStyle = () => {
    if (cardDims.width === 0 || cardDims.height === 0) return {};

    const mousePX = mousePosition.x / (cardDims.width / 2);
    const mousePY = mousePosition.y / (cardDims.height / 2);

    const tX = mousePX * -40;
    const tY = mousePY * -40;

    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`,
      transition:
        mousePosition.x === 0 && mousePosition.y === 0
          ? `all 1s ${returnEasing}`
          : `all 0.6s ${hoverEasing}`,
    };
  };

  return (
    <div
      ref={containerRef}
      className="font-pretendard tracking-tighter flex flex-col justify-center items-center min-h-[150vh] p-10 relative"
    >
      <div
        className="card bg-gray-700 rounded-lg shadow-xl overflow-hidden absolute"
        ref={cardRef}
        style={{
          width: `380px`,
          height: `540px`,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%) ${
            getCardTransformStyle().transform
          }`,
          transition: getCardTransformStyle().transition,
          zIndex: 20,
        }}
      >
        <div
          ref={cardInsideRef}
          className="card-bg absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url(${
              process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF
                ? `https://ewqfysoxkdbxiitjyrgr.supabase.co/storage/v1/object/public/portfolio/CardImage/ProfileCard.png`
                : undefined
            })`,
            top: `-20px`,
            left: `-20px`,
            width: `calc(100% + 40px)`,
            height: `calc(100% + 40px)`,
            pointerEvents: `none`,
            ...getCardBgTransformStyle(),
            opacity: 1,
          }}
        ></div>
        <div
          ref={cardInsideNewBgRef}
          className="card-bg-new absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url('https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/storage/v1/object/public/portfolio/CardImage/certcard.png')`,
            top: `-20px`,
            left: `-20px`,
            width: `calc(100% + 40px)`,
            height: `calc(100% + 40px)`,
            pointerEvents: `none`,
            ...getCardBgTransformStyle(),
            opacity: 0,
          }}
        ></div>
        <div
          className="card-info absolute bottom-0 w-full p-5 text-white"
          style={{
            transform:
              mousePosition.x === 0 && mousePosition.y === 0
                ? "translateY(40%)"
                : "translateY(0%)",
            transition:
              mousePosition.x === 0 && mousePosition.y === 0
                ? `0.6s ${returnEasing} 1.6s`
                : `0.6s ${hoverEasing}`,
          }}
        >
          <h1
            ref={cardText1Ref}
            className="text-3xl font-bold text-white relative z-10"
          >
            <div className="font-pretendard font-light">
              <span className="text-6xl font-extrabold">A</span>
              <span className="text-6xl">BOUT ME</span>
            </div>
          </h1>
          <h1
            ref={cardText2Ref}
            className="text-3xl font-bold text-white mb-20 relative z-10 opacity-0"
          >
            <div className="font-pretendard font-light">
              <span className="text-6xl font-extrabold">C</span>
              <span className="text-6xl">ERTIFICATE</span>
            </div>
          </h1>
          <p
            className="font-leagueSpartan opacity-0 relative z-10 italic text-lg"
            style={{
              opacity:
                mousePosition.x === 0 && mousePosition.y === 0 ? "0" : "1",
              transition:
                mousePosition.x === 0 && mousePosition.y === 0
                  ? `0.6s ${returnEasing} 1.6s`
                  : `0.6s ${hoverEasing}`,
            }}
          >
            ❝Don't just stop at dreaming. Keep working until it becomes real.❞
          </p>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%)`,
              backgroundBlendMode: `overlay`,
              opacity:
                mousePosition.x === 0 && mousePosition.y === 0 ? "0" : "1",
              transform:
                mousePosition.x === 0 && mousePosition.y === 0
                  ? "translateY(100%)"
                  : "translateY(0%)",
              transition:
                mousePosition.x === 0 && mousePosition.y === 0
                  ? `5s ${returnEasing} 1s`
                  : `5s ${hoverEasing}`,
            }}
          ></div>
        </div>
      </div>

      <div
        ref={subContainerRef}
        className="card-wrap relative flex flex-wrap justify-center items-center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "600px",
          transformStyle: `preserve-3d`,
        }}
      >
        {certificatesData.map((cert, index) => (
          <CertCard
            key={cert.id}
            ref={boxRefs.current[index]}
            topTitle={cert.topTitle}
            mainTitle={cert.mainTitle}
            profileImgSrc={`https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/storage/v1/object/public/portfolio/me/Profile.jpg`}
            ciImgSrc={cert.ciImgSrc}
            logoWidth={cert.logoWidth}
            headerColor={cert.headerColor}
            className={cert.className}
            style={{
              zIndex: 10 + index,
            }}
          />
        ))}
      </div>

      <div ref={profileContainerRef}>
        <div
          ref={profileTitleRef}
          className="absolute text-gray-600 grid grid-rows-4 gap-8"
          style={{
            opacity: 0,
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)",
            zIndex: 30,
            width: "300px",
          }}
        >
          <div className="relative row-span-2 transition duration-1000 text-white aspect-video bg-[#3C0B5F] rounded-4xl h-72 overflow-clip group">
            <div className="h-full grid grid-rows-3 p-8">
              <div className="row-span-1 font-leagueSpartan font-extralight">
                <span className="text-5xl font-bold">E</span>
                <span className="text-5xl">ducation</span>
              </div>
              <div className="font-pretendard font-bold text-base row-span-2">
                <div className="flex flex-col gap-1">
                  <span className="flex gap-2 items-center">
                    <i className="bx bx-education text-2xl"></i>
                    <span>대구구암고등학교 졸업</span>
                  </span>
                  <span className="flex gap-2 items-center">
                    <i className="bx bx-education text-2xl"></i>
                    <span>금오공과대학교 컴퓨터공학 학사</span>
                  </span>
                </div>
              </div>
            </div>
            <Image
              src={`https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/storage/v1/object/public/portfolio/me/gradCut.png`}
              alt="grad Image"
              width={200}
              height={200}
              className="absolute -bottom-4 -rotate-12 right-0 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
            />
          </div>

          <div
            className={`row-span-2 aspect-video bg-[#E5FFC3] rounded-4xl transition-all duration-500 ease-in-out h-72`}
          >
            <div className="h-full grid grid-rows-3 p-8">
              <div className="row-span-1 font-leagueSpartan font-extralight">
                <span className="text-5xl font-extrabold">E</span>
                <span className="text-5xl">xperience</span>
              </div>
              <div className="row-span-2 font-pretendard font-bold">
                <div>
                  <div className="flex flex-col gap-1">
                    <span className="flex gap-2 items-center">
                      <i className="bx bx-school text-2xl"></i>
                      <span>
                        제 1회 K-Digital Training 빅데이터 분석가 양성과정 수료
                        (경북대학교)
                      </span>
                    </span>
                    <span className="flex gap-2 items-center">
                      <i className="bx bx-school text-2xl"></i>
                      <span>
                        대학연계 공공데이터 활용 교육 수료 (한국정보화진흥원)
                      </span>
                    </span>
                    <span className="flex gap-2 items-center">
                      <i className="bx bx-plane-alt text-2xl"></i>
                      <span>
                        MK Education International Language School 어학연수
                        (필리핀)
                      </span>
                    </span>
                    <span className="flex gap-2 items-center">
                      <i className="bx bx-donate-heart text-2xl"></i>
                      <span>
                        소외계층 초등학생 대상 멘토역할 수행
                        (굿네이버스/경북서부지부)
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={profileContentRef}
          className="absolute text-gray-600 grid grid-rows-2 gap-8"
          style={{
            opacity: 0,
            top: "50%",
            right: "21%",
            transform: "translateY(-50%)",
            zIndex: 30,
            width: "300px",
          }}
        >
          <div
            className={`row-span-1 bg-[#43B5C0] text-white rounded-4xl transition-all duration-500 ease-in-out w-[512px] ${
              isSwabswabHovered ? "h-96" : "h-72"
            }`}
            onMouseEnter={() => setIsSwabswabHovered(true)}
            onMouseLeave={() => setIsSwabswabHovered(false)}
          >
            <div className="grid grid-cols-3 p-8 h-full">
              <div className="col-span-1 font-leagueSpartan font-light">
                <span className="text-5xl font-extrabold">S</span>
                <span className="text-5xl">kills</span>
              </div>
            </div>
          </div>
          <div
            id="swabswab"
            className={`group row-span-1 bg-blue-200 rounded-4xl transition-all duration-500 ease-in-out cursor-pointer w-[512px] ${
              isSwabswabHovered ? "h-72" : "h-72"
            }`}
          >
            <a
              href="https://github.com/ncdino"
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 relative"
            >
              <div className="grid grid-cols-3 p-8 h-full overflow-clip">
                <div className="col-span-1 font-leagueSpartan font-extralight">
                  <span className="text-5xl font-extrabold">G</span>
                  <span className="text-5xl">ithub</span>
                </div>
                <div className="col-span-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="386px"
                    height="386px"
                    className="transition-all duration-300 ease-in-out group-hover:scale-125"
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
