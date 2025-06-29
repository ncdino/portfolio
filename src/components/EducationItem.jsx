const EducationItem = ({ iconClass, title, status }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="flex gap-2 items-center">
        <i
          className={`${iconClass} text-2xl text-black dark:text-gray-200`}
        ></i>
        <span className="font-base text-base md:text-lg lg:text-xl text-black dark:text-gray-200">
          {title}
        </span>
      </span>
      {status && (
        <span className="font-light text-base bg-amber-200 px-2 py-1 rounded-lg w-fit">
          {status}
        </span>
      )}
    </div>
  );
};

export default EducationItem;
