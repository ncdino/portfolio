import ProfileCard from "./ProfileCard";
import HeroText from "./HeroText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProfileIntro() {
  const sectionRef = useRef(null);
  const heroTextRef = useRef(null);
  const profileCardRef = useRef(null);

  useEffect(() => {
    if (heroTextRef.current && profileCardRef.current) {
      const heroTextAni = gsap.fromTo(
        heroTextRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroTextRef.current,
            start: "top 80%",
            end: "bottom 80%",
            scrub: 1,
            // markers: true,
          },
        }
      );

      const profileCardAni = gsap.fromTo(
        profileCardRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: profileCardRef.current,
            start: "top 80%",
            end: "center 80%",
            scrub: 1,
            // markers: true,
          },
        }
      );

      return () => {
        heroTextAni.kill();
        profileCardAni.kill();
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen">
      <HeroText ref={heroTextRef} miniTitle={"Profile"}>
        <p className="text-[#757575]">안녕하세요.</p>
        <span className="font-bold">Frontend 개발자 이지현</span>
        <span>입니다.</span>
      </HeroText>
      <div className="flex justify-center mt-34 mx-4">
        <ProfileCard ref={profileCardRef} />
      </div>
    </section>
  );
}
