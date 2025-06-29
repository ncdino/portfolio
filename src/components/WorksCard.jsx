import { forwardRef } from "react";

const PortfolioCard = forwardRef(
  (
    {
      title,
      skills,
      imageUrl,
      description,
      industry,
      link,
      containerClassName = "",
      titleClassName = "",
      skillsContainerClassName = "",
    },
    ref
  ) => {
    // const [currentBgImage, setCurrentBgImage] = useState("none");

    const handleLiveSiteClick = (e) => {
      e.stopPropagation();
      window.open(link, "_blank");
    };

    return (
      <div className="group">
        <div
          ref={ref}
          className={`col-span-1 grid grid-rows-2 gap-72 md:gap-64 lg:gap-60 border-8 border-neutral-950 dark:border-neutral-100 p-6 md:p-8 lg:p-10 h-[350px] lg:h-[512px] rounded-3xl lg:rounded-4xl transition-all duration-200 relative overflow-hidden ${containerClassName}`}
        >
          <div
            className={`row-span-1 font-[Paperlogy-8ExtraBold] text-4xl md:text-6xl lg:text-8xl tracking-normal text-neutral-950 group-hover:uppercase dark:text-neutral-100 relative z-10 ${titleClassName}`}
          >
            {title}
          </div>

          {/* 스킬 */}
          <div
            className={`relative row-span-1 font-[Paperlogy-8ExtraBold] text-xl tracking-normal text-neutral-950 dark:text-neutral-100 text-end justify-end items-end transition-all duration-1000 z-10 ${skillsContainerClassName}`}
          >
            <span className="absolute bottom-0 end-0 group-hover:scale-110">
              {skills &&
                skills.map((skill, index) => (
                  <i
                    key={index}
                    className={`${skill.icon} text-3xl md:text-4xl lg:text-5xl`}
                    title={skill.name || ""}
                  ></i>
                ))}
            </span>
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
          <div className="grid sm:grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 mt-4 font-[Paperlogy-8ExtraBold] px-4">
            <div className="row-span-1 lg:col-span-1 grid grid-rows-2 gap-1">
              <div className="row-span-1">
                <span className="text-[#B8B8B8] text-[13px] uppercase">
                  industry
                </span>
              </div>
              <div className="row-span-1 text-neutral-900 dark:text-neutral-100 text-[13px] uppercase">
                <span>{industry}</span>
              </div>
            </div>
            <div className="row-span-1 lg:col-span-1 grid grid-rows-2 gap-1">
              <div className="row-span-1">
                <span className="text-[#B8B8B8] text-[13px] uppercase">
                  Live Site
                </span>
              </div>
              <div className="row-span-1 text-neutral-900 dark:text-neutral-100 text-[13px]">
                <span
                  onClick={handleLiveSiteClick}
                  className="cursor-pointer hover:underline"
                >
                  {link}
                </span>
              </div>
            </div>
            <div className="row-span-1 lg:row-span-2 lg:col-span-2">
              <div className="col-span-1 grid grid-rows-2 gap-1">
                <div className="row-span-1">
                  <span className="text-[#B8B8B8] text-[13px] uppercase">
                    Description
                  </span>
                </div>
                <div className="row-span-1 text-[13px] uppercase">
                  <span className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PortfolioCard.displayName = "PortfolioCard";

export default PortfolioCard;
