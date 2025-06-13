"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useTriggerStore from "../store/triggerStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const insightRef = useTriggerStore((state) => state.insightRef);
  const skillRef = useTriggerStore((state) => state.skillRef);
  const router = useRouter();

  const menuItems = [
    { text: "Home", dataId: "hero" },
    { text: "Profile", dataId: "profile" },
    { text: "Works", dataId: "works" },
    { text: "Contact", dataId: "contact" },
  ];

  useEffect(() => {
    console.log("insightRef:", insightRef?.current);
    console.log("skillRef:", skillRef?.current);
  }, [insightRef, skillRef]);

  useEffect(() => {
    if ((insightRef && insightRef.current) || (skillRef && skillRef.current)) {
      gsap.set(headerRef.current, {
        color: "black",
        backdropFilter: "blur(10px)",
        height: "15%",
        backgroundColor: "transparent",
        opacity: 0,
      });

      const insightTl = gsap.timeline({
        scrollTrigger: {
          trigger: insightRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
          markers: false,
        },
        defaults: { ease: "power2.out" },
      });

      insightTl.to(headerRef.current, {
        color: "white",
        height: "10%",
        backgroundColor: "transparent",
        opacity: 1,
      });

      const skillTl = gsap.timeline({
        scrollTrigger: {
          trigger: skillRef.current,
          start: "top center",
          end: "+=100",
          scrub: 1,
          // markers: false,
        },
        defaults: { ease: "power2.out" },
      });

      skillTl.to(headerRef.current, {
        color: "black",
        height: "10%",
        backgroundColor: "transparent",
        opacity: 1,
      });

      return () => {
        insightTl.scrollTrigger.kill();
        insightTl.kill();
        skillTl.scrollTrigger.kill();
        skillTl.kill();
      };
    }
  }, [insightRef, skillRef]);

  return (
    <header
      ref={headerRef}
      className="opacity-0 fixed top-0 left-0 w-full z-50"
    >
      <nav className="font-pretendard tracking-tighter flex justify-end items-center h-full px-6 py-4">
        <ul className="list-none flex">
          {" "}
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                className="mx-4 text-lg font-medium bg-transparent transition duration-1000 ease-in-out hover:font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(item.dataId);
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
