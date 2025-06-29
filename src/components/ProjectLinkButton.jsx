export function LinkButton({ href, children, className = "" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button
        className={`inline-flex items-center px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 bg-white text-black hover:text-neutral-100 rounded-2xl hover:bg-neutral-500 transition-colors duration-300 sm:text-sm md:text-base lg:text-lg font-medium ${className}`}
      >
        {children}
        <i className="bx bx-arrow-up-right-stroke text-xl md:text-2xl lg:text-3xl ml-2"></i>
      </button>
    </a>
  );
}
