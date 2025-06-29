import { forwardRef } from "react";

const HeroText = forwardRef(({ children, miniTitle }, ref) => {
  return (
    <div
      ref={ref}
      className="grid grid-cols-6 mx-8 py-20 gap-4 text-neutral-900 dark:text-neutral-100"
    >
      <div className="col-span-1 rounded-full bg-neutral-900 dark:bg-neutral-100 flex justify-center items-center text-neutral-100 dark:text-neutral-900">
        <span className="font-extralight text-4xl hidden lg:block">
          {miniTitle}
        </span>
      </div>
      <div className="col-span-5 p-8">
        <span className="text-xl md:text-2xl lg:text-3xl font-light">
          {children}
        </span>
      </div>
    </div>
  );
});

export default HeroText;
