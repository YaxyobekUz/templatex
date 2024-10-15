import React, { useEffect } from "react";

// Components
import Icon from "../components/Icon";
import Arrow from "../components/Arrow";
import Balance from "../components/Balance";

// Hooks
import useEmojis from "../hooks/useEmojis";
import useTelegram from "../hooks/useTelegram";

// Images
import rotateIcon from "../assets/images/icons/rotate.svg";

const Profile = () => {
  const { tg, user } = useTelegram();
  const { getRandomEmoji } = useEmojis();
  const profileEmoji = getRandomEmoji();

  useEffect(() => {
    tg.setHeaderColor("#fff");
  }, []);

  return (
    <>
      {/* Header */}
      <header className="flex flex-col items-center justify-center gap-4 pt-6">
        {/* profile image */}
        <div className="size-28 p-2">
          <div className="flex items-center justify-center size-full shrink-0 bg-gradient-orange rounded-full">
            <Icon
              className="size-16"
              src={profileEmoji.src}
              alt={`${profileEmoji.name}'s profile Emoji`}
            />
          </div>
        </div>

        {/* page title */}
        <div className="w-full px-8 overflow-hidden">
          <h1 className="text-center text-xl font-semibold truncate xs:text-2xl">
            {user?.first_name || "User"}
          </h1>
        </div>

        {/* page description */}
        <p className="text-base text-center xs:text-lg">
          ID: {user?.id || 123345678}
        </p>
      </header>

      {/* Balance */}
      <Balance />

      {/* Exchange */}
      <div className="section">
        <button className="flex items-center justify-between gap-1.5 h-24 pl-4 pr-3 w-full bg-white rounded-2xl">
          <div className="flex items-center gap-4">
            {/* icon */}
            <div className="flex items-center justify-center size-[50px] shrink-0 bg-lightAccent rounded-full xs:size-16">
              <Icon
                size={28}
                src={rotateIcon}
                alt="rotate icon"
                className="size-6 xs:size-7"
              />
            </div>

            <h3 className="text-base font-medium xs:text-lg">
              Exchange X coins
            </h3>
          </div>

          <Arrow fill="#555" direction="right" className="size-5 xs:size-6" />
        </button>
      </div>
    </>
  );
};

export default Profile;
