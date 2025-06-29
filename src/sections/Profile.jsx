import ProfileHeader from "../components/ProfileHeader";
import ProfileItemList from "../components/ProfileItemTitle";
import EducationItem from "../components/EducationItem";
import CertificationItem from "../components/CertificationItem";
import ProfileIntro from "../components/ProfileIntro";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import LogoMarquee from "../components/LogoMarquee";
import { certifications } from "../data/Profile/ProfileCerts";

gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
  const educationRef = useRef(null);
  const certificationRef = useRef(null);
  const skillRef = useRef(null);

  useEffect(() => {
    if (educationRef.current && certificationRef.current && skillRef.current) {
      const educationAni = gsap.fromTo(
        educationRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 80%",
            end: "bottom 80%",
            scrub: 1,
            // markers: true,
          },
        }
      );

      const certificationAni = gsap.fromTo(
        certificationRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: certificationRef.current,
            start: "top 80%",
            end: "bottom 80%",
            scrub: 1,
            // markers: true,
          },
        }
      );

      const skillRefAni = gsap.fromTo(
        skillRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillRef.current,
            start: "top 80%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      return () => {
        educationAni.kill();
        certificationAni.kill();
        skillRefAni.kill();
      };
    }
  }, []);

  return (
    <section id="profile-section">
      <ProfileIntro>
        <p className="text-[#757575]">안녕하세요.</p>
        <span className="font-bold">Frontend 개발자 이지현</span>
        <span>입니다.</span>
      </ProfileIntro>
      <div className="min-h-screen flex flex-col mx-6 md:mx-7 lg:mx-8">
        <ProfileHeader />
        {/* 아래 섹션 */}
        <div className="mt-20">
          <div className="lg:grid grid-cols-1 lg:grid-cols-6 sm:flex sm:flex-col">
            <div className="lg:col-span-3 flex flex-col sm:order-1 md:order-1 lg:order-2">
              <img
                src="/me.jpg"
                alt="my pic"
                className="flex w-full h-full rounded-4xl"
                style={{
                  filter: "grayscale(0.5)",
                }}
              />
            </div>
            <div className="lg:col-span-3 lg:flex lg:flex-col mx-2 md:mx-18 lg:mx-20 lg:gap-18 sm:order-2 md:order-2 lg:order-1">
              <div ref={educationRef}>
                <ProfileItemList title={"Education"} />
                <div className="flex flex-col gap-1 mt-20">
                  <EducationItem
                    iconClass="bxr bx-education"
                    title="금오공과대학교 컴퓨터공학과 학사"
                  />
                  <EducationItem
                    iconClass="bxr bx-school"
                    title="제 1회 K-Digital Training 빅데이터 분석가 양성과정 수료 (경북대학교)"
                  />
                  <EducationItem
                    iconClass="bxr bx-school"
                    title="대학연계 공공데이터 활용 교육 수료 (한국정보화진흥원)"
                  />
                </div>
              </div>
              <div ref={certificationRef}>
                <ProfileItemList title={"Certification"} />
                <div className="flex flex-col gap-0 mt-20">
                  {certifications.map((cert, index) => (
                    <CertificationItem
                      key={index}
                      date={cert.date}
                      title={cert.title}
                      organization={cert.organization}
                      isFirstItem={index === 0}
                    />
                  ))}
                </div>
              </div>
              <div ref={skillRef}>
                <ProfileItemList title={"Skills"} />
                <div className="flex justify-center items-center border-4 border-black dark:border-white h-full mt-5 rounded-2xl">
                  <LogoMarquee />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
