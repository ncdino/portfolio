import { twMerge } from "tailwind-merge";

export default function SkillCard({
  children,
  className,
  width = "w-80",
  height = "h-52",
  hoverText,
}) {
  return (
    <div>
      <div
        className={`font-pretendard tracking-tighter text-[#FFF7E9] ${width} ${height} flex justify-center items-center border border-zinc-800 p-4 rounded-2xl relative overflow-hidden group`}
      >
        {/* 배경 블러 */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* 기본 내용 */}
        <div
          className={twMerge(`text-4xl font-extrabold text-center`, className)}
        >
          {children}
        </div>

        {/* hover 시 텍스트 */}
        <div className="absolute inset-0 p-4 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm font-light">{hoverText}</p>
        </div>
      </div>
    </div>
  );
}
