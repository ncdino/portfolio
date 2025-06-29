import { useParams } from "react-router-dom";
import { WorksProjects } from "../data/Works/WorksProjects";
import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { ShareButton } from "../components/ShareButton";
import { LinkButton } from "../components/ProjectLinkButton";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ProjectDetailPage() {
  const { projectId } = useParams();

  const project = useMemo(
    () => WorksProjects.find((p) => p.id === projectId),
    [projectId]
  );

  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);
  const animationContextRef = useRef(null);

  const projectSections = useMemo(
    () => project?.detailSections || [],
    [project]
  );

  // 메타 태그
  useEffect(() => {
    if (!project) return;

    const updateMetaTags = () => {
      document.title = `이지현 | ${project.title}`;

      const updateMetaTag = (property, content, isProperty = true) => {
        const selector = isProperty
          ? `meta[property="${property}"]`
          : `meta[name="${property}"]`;
        let meta = document.querySelector(selector);

        if (!meta) {
          meta = document.createElement("meta");
          if (isProperty) {
            meta.setAttribute("property", property);
          } else {
            meta.setAttribute("name", property);
          }
          document.head.appendChild(meta);
        }
        meta.setAttribute("content", content);
      };

      updateMetaTag(
        "description",
        project.description || "포트폴리오 프로젝트 상세 페이지",
        false
      );
      updateMetaTag(
        "keywords",
        `${project.title}, 포트폴리오, 프로젝트, 웹개발`,
        false
      );

      updateMetaTag("og:title", project.title);
      updateMetaTag(
        "og:description",
        project.description || "포트폴리오 프로젝트 상세 페이지"
      );
      updateMetaTag("og:type", "website");
      updateMetaTag("og:url", window.location.href);
      updateMetaTag("og:site_name", "이지현 | 프론트엔드 개발자");

      updateMetaTag("author", "이지현", false);
      updateMetaTag("viewport", "width=device-width, initial-scale=1.0", false);
    };

    updateMetaTags();

    return () => {
      document.title = "이지현 | 프론트엔드 개발자";

      const metaSelectors = [
        'meta[name="description"]',
        'meta[name="keywords"]',
        'meta[property="og:title"]',
        'meta[property="og:description"]',
        'meta[property="og:url"]',
      ];

      metaSelectors.forEach((selector) => {
        const meta = document.querySelector(selector);
        if (meta) {
          meta.remove();
        }
      });
    };
  }, [project]);

  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, false);
    } else {
      window.scrollTo(0, 0);
    }
  }, [projectId]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    gsap.set(videoElement, {
      autoAlpha: 0,
      scale: 1,
      transformOrigin: "center center",
    });

    let videoTimeline = null;
    let videoLoadHandler = null;

    const initVideoAnimation = () => {
      gsap.to(videoElement, {
        autoAlpha: 1,
        duration: 1.5,
        ease: "power2.out",
      });

      videoTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: videoElement,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      videoTimeline.to(videoElement, {
        scaleX: 0.5,
        ease: "none",
      });
    };

    videoLoadHandler = () => {
      requestAnimationFrame(initVideoAnimation);
    };

    if (videoElement.readyState >= 4) {
      videoLoadHandler();
    } else {
      videoElement.addEventListener("canplaythrough", videoLoadHandler, {
        once: true,
      });
    }

    return () => {
      if (videoLoadHandler) {
        videoElement.removeEventListener("canplaythrough", videoLoadHandler);
      }
      if (videoTimeline) {
        videoTimeline.kill();
      }
    };
  }, [projectId]);

  useEffect(() => {
    if (!projectSections.length) return;

    if (animationContextRef.current) {
      animationContextRef.current.forEach((trigger) => {
        if (typeof trigger.kill === "function") {
          trigger.kill();
        }
      });
    }
    animationContextRef.current = [];

    const initSectionAnimations = () => {
      sectionsRef.current = sectionsRef.current.slice(
        0,
        projectSections.length
      );

      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const elements = {
          media: section.querySelector(".section-media"),
          content: section.querySelector(".section-content"),
          title: section.querySelector(".section-title"),
          subtitle: section.querySelector(".section-subtitle"),
          description: section.querySelector(".section-description"),
          items: section.querySelectorAll(".section-item"),
        };

        const { media, content, title, subtitle, description, items } =
          elements;

        if (media && content) {
          gsap.set([media, content], {
            autoAlpha: 0,
            willChange: "transform, opacity",
          });
          gsap.set(media, { x: -50, scale: 0.95 });
          gsap.set(content, { x: 50 });
        }
        if (title || subtitle || description) {
          gsap.set([title, subtitle, description].filter(Boolean), {
            y: 20,
            autoAlpha: 0,
          });
        }
        if (items.length > 0) {
          gsap.set(items, { y: 15, autoAlpha: 0 });
        }

        const scrollTrigger = ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            const tl = gsap.timeline();

            if (media && content) {
              tl.to([media, content], {
                autoAlpha: 1,
                duration: 0.8,
                ease: "power2.out",
              })
                .to(
                  media,
                  { x: 0, scale: 1, duration: 1, ease: "power2.out" },
                  0
                )
                .to(content, { x: 0, duration: 1, ease: "power2.out" }, 0);
            }

            if (title || subtitle) {
              tl.to(
                [title, subtitle].filter(Boolean),
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.6,
                  stagger: 0.1,
                  ease: "power2.out",
                },
                0.2
              );
            }

            if (description) {
              tl.to(
                description,
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.6,
                  ease: "power2.out",
                },
                0.4
              );
            }

            if (items.length > 0) {
              tl.to(
                items,
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.5,
                  stagger: 0.05,
                  ease: "power2.out",
                },
                0.5
              );
            }
          },
        });
        animationContextRef.current.push(scrollTrigger);

        if (media) {
          const handleMouseEnter = () => {
            gsap.to(media, {
              scale: 1.03,
              duration: 0.3,
              ease: "power2.out",
            });
          };
          const handleMouseLeave = () => {
            gsap.to(media, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          };
          media.addEventListener("mouseenter", handleMouseEnter);
          media.addEventListener("mouseleave", handleMouseLeave);

          const cleanupHover = () => {
            media.removeEventListener("mouseenter", handleMouseEnter);
            media.removeEventListener("mouseleave", handleMouseLeave);
          };
          animationContextRef.current.push({ kill: cleanupHover });
        }
      });
    };

    requestAnimationFrame(initSectionAnimations);

    return () => {
      if (animationContextRef.current) {
        animationContextRef.current.forEach((item) => {
          if (typeof item.kill === "function") {
            item.kill();
          }
        });
        animationContextRef.current = [];
      }
    };
  }, [projectSections]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-4xl text-neutral-600 dark:text-neutral-300">
        프로젝트를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[240px] md:h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src={project.subVideo || `/${projectId}.webm`}
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div ref={contentRef} className="bg-neutral-400 dark:bg-neutral-900">
        {projectSections.map((section, index) => (
          <section
            key={`${section.id}-${index}`}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`min-h-screen flex items-center px-8 md:px-16 py-24 ${
              index % 2 === 0
                ? "bg-neutral-50 dark:bg-neutral-900"
                : "bg-neutral-100 dark:bg-neutral-800"
            }`}
          >
            <div className="max-w-[100rem] mx-auto w-full">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`section-media ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative w-full aspect-video rounded-3xl shadow-2xl overflow-hidden">
                    {section.media.type === "video" ? (
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        playsInline
                        loading="lazy"
                        preload="metadata"
                        controls
                      >
                        <source src={section.media.src} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center">
                        <img
                          src={section.media.src}
                          alt={section.media.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = `
                              <div className="text-neutral-500 dark:text-neutral-400 text-center">
                                <div className="text-6xl mb-4">🎨</div>
                                <div className="text-xl">${
                                  section.media.alt || "이미지 로드 실패"
                                }</div>
                              </div>
                            `;
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`section-content flex flex-col gap-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div>
                    <p className="section-subtitle font-[Paperlogy-8ExtraBold] text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-2">
                      {section.content.subtitle}
                    </p>
                    <h2 className="section-title text-4xl md:text-5xl font-light text-neutral-900 dark:text-white mb-6">
                      {section.content.title}
                    </h2>
                    <p className="section-description text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {section.content.description}
                    </p>
                  </div>

                  {section.content.tags && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                        기술 스택
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {section.content.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="section-item px-4 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.content.features && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                        주요 기능
                      </h3>
                      <ul className="space-y-3">
                        {section.content.features.map(
                          (feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="section-item flex items-center text-neutral-600 dark:text-neutral-300"
                            >
                              <span className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full mr-4"></span>
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {section.content.stats && (
                    <div className="grid grid-cols-3 gap-6">
                      {section.content.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="section-item text-center"
                        >
                          <div className="text-2xl font-light text-neutral-900 dark:text-white">
                            {stat.value}
                          </div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.content.ssoIcons && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                        아래의 소셜 로그인을 지원합니다
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        {section.content.ssoIcons.map((icon, iconIndex) => (
                          <img
                            key={iconIndex}
                            src={icon.src}
                            alt={icon.alt}
                            className="w-14 h-14 object-contain"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {section.content.designPrinciples && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                        디자인 원칙
                      </h3>
                      <ul className="space-y-3">
                        {section.content.designPrinciples.map(
                          (principle, principleIndex) => (
                            <li
                              key={principleIndex}
                              className="section-item flex items-center text-neutral-600 dark:text-neutral-300"
                            >
                              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></span>
                              {principle}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-neutral-900 dark:bg-black text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-8">
          <div className="flex justify-center gap-3 md:gap-6 lg:gap-9">
            <LinkButton href={project.link}>Live Site</LinkButton>
            <LinkButton href={project.githubLink}>Github</LinkButton>
            <ShareButton url={window.location.href} />
          </div>
        </div>
      </section>
    </div>
  );
}
