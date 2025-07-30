export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 py-12 mx-2 rounded-4xl mb-1">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex flex-col items-center mb-8">
          <span className="font-bold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 lg:mb-8">
            감사합니다
          </span>
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://github.com/ncdino"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub 이동"
            >
              <i className="bxl bx-github text-5xl md:text-6xl"></i>
            </a>
            <a
              href="mailto:jahhyn@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="이메일 보내기"
            >
              <i className="bxl bx-gmail text-5xl md:text-6xl"></i>
            </a>
            <a
              href="https://www.leejihyeon.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="블로그 바로가기"
            >
              <i className="bx bx-book text-5xl md:text-6xl"></i>
            </a>
          </div>
        </div>

        <p className="text-xs text-neutral-400 dark:text-neutral-600">
          &copy; {year} 이지현. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
