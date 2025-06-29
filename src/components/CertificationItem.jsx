export default function CertificationItem({
  date,
  title,
  organization,
  isFirstItem = false,
}) {
  const borderClasses = isFirstItem ? "border-t-4 border-b-4" : "border-b-4";

  return (
    <div
      className={`grid grid-cols-4 text-black dark:text-gray-200 font-semibold  p-2 ${borderClasses} border-black dark:border-gray-200 hover:bg-black dark:hover:bg-gray-200 hover:text-white dark:hover:text-black transition-all duration-300 ease-in`}
    >
      <div className="col-span-1">{date}</div>
      <div className="col-span-2 flex mx-2">{title}</div>
      <div className="col-span-1">{organization}</div>
    </div>
  );
}
