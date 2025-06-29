import { useState, useCallback } from "react";

export const useShare = () => {
  const [isSharing, setIsSharing] = useState(false);
  const [shareError, setShareError] = useState(null);
  const [shareSuccess, setShareSuccess] = useState(false);

  const share = useCallback(async (shareData) => {
    if (!shareData) {
      setShareError("공유할 데이터가 없습니다.");
      return false;
    }

    setIsSharing(true);
    setShareError(null);
    setShareSuccess(false);

    try {
      await navigator.clipboard.writeText(shareData.url);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 3000);
      return true;
    } catch (error) {
      console.error("링크 복사 중 오류 발생:", error);
      setShareError("링크 복사 중 오류가 발생했습니다.");
      return false;
    } finally {
      setIsSharing(false);
    }
  }, []);

  const generateShareData = useCallback((url) => {
    return {
      url: url || window.location.href,
    };
  }, []);

  const clearMessages = useCallback(() => {
    setShareError(null);
    setShareSuccess(false);
  }, []);

  return {
    share,
    generateShareData,
    isSharing,
    shareError,
    shareSuccess,
    clearMessages,
  };
};
