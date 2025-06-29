export default function ProfileItemList({ title }) {
  return (
    <div>
      <div className="flex flex-col gap-2 mt-10">
        <span className="text-black dark:text-gray-200 font-bold text-2xl md:text-3xl lg:text-4xl text-end">
          {title}.
        </span>
        <div className="border-b-2 border-[#757575] w-full" />
      </div>
    </div>
  );
}
