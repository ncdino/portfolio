import { useEffect } from "react";
import { useShare } from "../hooks/useShare";

export const ShareButton = ({ url, className = "" }) => {
  const {
    share,
    generateShareData,
    isSharing,
    shareError,
    shareSuccess,
    clearMessages,
  } = useShare();

  const shareData = generateShareData(url);

  useEffect(() => {
    if (shareSuccess || shareError) {
      const timer = setTimeout(() => {
        clearMessages();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [shareSuccess, shareError, clearMessages]);

  const handleShare = async () => {
    await share(shareData);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleShare}
        disabled={isSharing}
        className="inline-flex items-center px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 bg-white text-black hover:text-neutral-100 rounded-2xl hover:bg-neutral-500 transition-colors duration-300 sm:text-sm md:text-base lg:text-lg font-medium"
        aria-label="링크 복사"
      >
        Share
        <i
          className={`bx bx-copy ml-2 text-xl ${
            isSharing ? "animate-spin" : ""
          }`}
        ></i>
      </button>

      {/* 토스트 부분 */}
      {(shareSuccess || shareError) && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
          <div
            className={`px-4 py-3 rounded-lg shadow-lg border transition-all duration-300 whitespace-nowrap ${
              shareSuccess
                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
                : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <i
                className={`bx ${
                  shareSuccess ? "bx-check-circle" : "bx-error-circle"
                } text-lg`}
              ></i>
              <span className="text-sm">
                {shareSuccess && "링크가 클립보드에 복사되었습니다!"}
                {shareError && shareError}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
