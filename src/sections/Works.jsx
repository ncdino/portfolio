import { useEffect, useRef } from "react";
import HeroText from "../components/HeroText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import PortfolioCard from "../components/WorksCard";
import { WorksProjects } from "../data/Works/WorksProjects";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const heroTextRef = useRef(null);
  const cardRefs = useRef({});

  useEffect(() => {
    const anims = [];

    if (heroTextRef.current) {
      const heroAnim = gsap.fromTo(
        heroTextRef.current,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroTextRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
      anims.push(heroAnim);
    }

    Object.values(cardRefs.current).forEach((cardElement, index) => {
      if (cardElement) {
        const cardAnim = gsap.fromTo(
          cardElement,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardElement,
              start: "top 85%",
              end: "bottom 70%",
              scrub: 1,
              // markers: true,
            },
          }
        );
        anims.push(cardAnim);
      }
    });
    return () => {
      anims.forEach((anim) => anim.kill());
    };
  }, []);

  return (
    <section className="min-h-screen py-32 md:py-36 lg:py-40">
      <div id="works-section">
        <HeroText ref={heroTextRef} miniTitle={"Works"}>
          <span className="text-[#757575] dark:text-neutral-100">
            일상에서{" "}
          </span>
          <span className="font-bold">
            필요를 느끼는 웹 서비스나 앱은 직접 개발하여 사용
          </span>
          <span>합니다.</span>
        </HeroText>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20 mx-2 md:mx-4 lg:mx-6 gap-2 md:gap-4 lg:gap-6 mb-40">
        {WorksProjects.map((project) => (
          <Link key={project.id} to={`/${project.id}`}>
            <PortfolioCard
              title={project.title}
              imageUrl={project.imageUrl}
              skills={project.skills}
              industry={project.industry}
              link={project.link}
              description={project.description}
              ref={(el) => {
                if (el) {
                  cardRefs.current[project.id] = el;
                } else {
                  delete cardRefs.current[project.id];
                }
              }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
