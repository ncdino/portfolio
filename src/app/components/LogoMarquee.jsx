"use client";

import React from "react";

const LogoMarquee = () => {
  const skills = [
    { name: "React", icon: "bxl bx-react" },
    { name: "JavaScript", icon: "bxl bx-javascript" },
    { name: "GSAP", icon: "bxl bx-gsap" },
    { name: "NEXT", icon: "bxl bx-next-js" },
    { name: "TypeScript", icon: "bxl bx-typescript" },
    { name: "redux", icon: "bxl bx-redux" },
    { name: "motion", icon: "bxl bx-motion-js" },
    { name: "tailwindcss", icon: "bxl bx-tailwind-css" },
    { name: "expo", icon: "bxl bx-expo" },
    { name: "react-query", icon: "bxl bx-react-query" },
    { name: "figma", icon: "bxl bx-figma" },
    { name: "supabase", icon: "bxl bx-supabase" },
  ];
  const mid = Math.ceil(skills.length / 2);
  const skillsTopRow = skills.slice(0, mid);
  const skillsBottomRow = skills.slice(mid);

  return (
    <>
      <div className="relative overflow-hidden w-full h-full flex flex-col justify-center items-center">
        <div className="flex animate-marquee-rtl whitespace-nowrap mb-4">
          {skillsTopRow.map((skill, index) => (
            <div
              key={`top-first-${index}`}
              className="mx-8 flex items-center justify-center group cursor-pointer"
            >
              <i
                className={`${skill.icon} text-6xl text-white group-hover:scale-200 transition-transform duration-300`}
                title={skill.name}
              ></i>
            </div>
          ))}
          {skillsTopRow.map((skill, index) => (
            <div
              key={`top-second-${index}`}
              className="mx-8 flex items-center justify-center group cursor-pointer"
            >
              <i
                className={`${skill.icon} text-6xl text-white group-hover:scale-200 transition-transform duration-300`}
                title={skill.name}
              ></i>
            </div>
          ))}
        </div>

        <div className="flex animate-marquee-ltr whitespace-nowrap">
          {skillsBottomRow.map((skill, index) => (
            <div
              key={`bottom-first-${index}`}
              className="mx-8 flex items-center justify-center group cursor-pointer"
            >
              <i
                className={`${skill.icon} text-6xl ${skill.color} group-hover:scale-200 transition-transform duration-300`}
                title={skill.name}
              ></i>
            </div>
          ))}
          {skillsBottomRow.map((skill, index) => (
            <div
              key={`bottom-second-${index}`}
              className="mx-8 flex items-center justify-center group cursor-pointer"
            >
              <i
                className={`${skill.icon} text-6xl ${skill.color} group-hover:scale-200 transition-transform duration-300`}
                title={skill.name}
              ></i>
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee-rtl {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes marquee-ltr {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          
          .animate-marquee-rtl {
            animation: marquee-rtl 25s linear infinite;
          }
          .animate-marquee-rtl:hover {
            animation-play-state: paused;
          }

          .animate-marquee-ltr {
            animation: marquee-ltr 25s linear infinite;
          }
          .animate-marquee-ltr:hover {
            animation-play-state: paused;
          }
        `,
        }}
      />
    </>
  );
};

export default LogoMarquee;
