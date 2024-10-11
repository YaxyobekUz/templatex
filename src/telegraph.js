import { useEffect } from "react";

export const useTelegram = () => {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  useEffect(() => {
    tg.ready();
  }, []);

  return {
    onClose,
    onToggleButton,
    tg,
  };
};
