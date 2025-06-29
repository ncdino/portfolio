import React, { useEffect, useState } from "react";

const LogoMarquee = () => {
  const skills = [
    { name: "React", icon: "bxl bx-react" },
    { name: "JavaScript", icon: "bxl bx-javascript" },
    { name: "GSAP", icon: "bxl bx-gsap" },
    { name: "NEXT", icon: "bxl bx-next-js" },
    { name: "TypeScript", icon: "bxl bx-typescript" },
    { name: "Redux", icon: "bxl bx-redux" },
    { name: "Framer Motion", icon: "bxl bx-motion-js" },
    { name: "Tailwind CSS", icon: "bxl bx-tailwind-css" },
    { name: "Expo", icon: "bxl bx-expo" },
    { name: "React Query", icon: "bxl bx-react-query" },
    { name: "Figma", icon: "bxl bx-figma" },
    { name: "Supabase", icon: "bxl bx-supabase" },
  ];

  const duplicatedSkills = [...skills, ...skills, ...skills];

  const [animationDuration, setAnimationDuration] = useState("10s");

  useEffect(() => {
    const updateAnimationDuration = () => {
      if (window.innerWidth >= 1024) {
        setAnimationDuration("15s");
      } else if (window.innerWidth >= 768) {
        setAnimationDuration("20s");
      } else {
        setAnimationDuration("25s");
      }
    };
    updateAnimationDuration();
    window.addEventListener("resize", updateAnimationDuration);

    return () => {
      window.removeEventListener("resize", updateAnimationDuration);
    };
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`skill-${index}`}
              className="mx-8 flex-none w-2 flex items-center justify-center group cursor-pointer"
            >
              <i
                className={`${skill.icon} text-6xl dark:text-white text-black group-hover:scale-125 transition-transform duration-300`}
                title={skill.name}
              ></i>
            </div>
          ))}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-200%);
            }
          }
          
          .animate-marquee {
            animation: marquee ${animationDuration} linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `,
        }}
      />
    </>
  );
};

export default LogoMarquee;
