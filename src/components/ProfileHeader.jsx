export default function ProfileHeader() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-28 md:mt-20 lg:mt-18">
      <div className="col-span-1">
        <span className="text-black dark:text-white tracking-tighter font-semibold text-4xl md:text-5xl lg:text-6xl">
          <span>My </span>
          <span className="text-[#757575]">Profile</span>
        </span>
      </div>
      <div className="text-base md:text-lg lg:text-xl lg:col-span-1 flex justify-between items-center text-black dark:text-white mt-0 md:mt-1 lg:mt-2">
        {/* 공백 삭제 금함 */}
        <span className="text-neutral-600 dark:text-neutral-300">
          저의 다채로운 경험들을 녹여내어{" "}
          <span className="font-extrabold text-black dark:text-white">
            디지털 소외가 없는 세상
          </span>
          을 만들고자 하는{" "}
          <span className="font-extrabold text-black dark:text-white">
            개발자
          </span>
          를 꿈꿉니다.
        </span>

        <div>
          {/* <button
            className="border-2 rounded-2xl p-2 mx-2 w-18 md:w-20 lg:w-24 text-base lg:text-lg hover:bg-black hover:text-white transition-all duration-150 ease-in"
            onClick={() => {
              alert("이력서 클릭");
            }}
          >
            이력서
          </button> */}
        </div>
      </div>
    </div>
  );
}
