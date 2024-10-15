import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "../components/Icon";
import Arrow from "../components/Arrow";
import Balance from "../components/Balance";

// Hooks
import useEmojis from "../hooks/useEmojis";
import useTelegram from "../hooks/useTelegram";

// Images
import plusIcon from "../assets/images/icons/plus-white.svg";
import settingsIcon from "../assets/images/icons/settings.svg";
import megaphoneImg from "../assets/images/others/megaphone.webp";

const Home = () => {
  const { tg, user } = useTelegram();
  const { getRandomEmoji } = useEmojis();
  const profileEmoji = getRandomEmoji();

  // Change App header color
  useEffect(() => {
    tg.setHeaderColor("#4535C1");

    const handleChangeHeaderColor = (e) => {
      if (window.scrollY >= 80) {
        tg.setHeaderColor("#fff");
      } else {
        tg.setHeaderColor("#4535C1");
      }
    };

    window.addEventListener("scroll", handleChangeHeaderColor);
    return () => {
      window.removeEventListener("scroll", handleChangeHeaderColor);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-b from-primary to-primary/70 h-20 pb-3 xs:h-24">
        <div className="flex items-center justify-between h-full !pl-0.5 container">
          {/* Title */}
          <div className="flex items-center gap-0.5 xs:gap-1.5">
            <Icon
              size={88}
              alt="megaphone"
              src={megaphoneImg}
              className="size-20 xs:size-[88px]"
            />

            <b className="text-[17px] leading-normal text-white font-semibold xs:text-xl">
              Join the official <br /> Telegram channel
            </b>
          </div>

          {/* Link */}
          <a
            href="https://t.me/mryaxyobek"
            className="flex items-center justify-center w-16 h-9 bg-white rounded-full font-medium xs:w-24"
          >
            Join
          </a>
        </div>
      </header>

      {/* Main */}
      <div className="bg-background pt-4 -mt-3 rounded-t-xl">
        {/* Sub Header */}
        <div role="sub header" className="container">
          <div className="flex items-center justify-between gap-3.5">
            <div className="flex items-center gap-5 grow">
              {/* profile image */}
              <div className="flex items-center justify-center size-14 shrink-0 bg-gradient-orange rounded-full">
                <Icon
                  className="size-10"
                  src={profileEmoji.src}
                  alt={`${profileEmoji.name} Emoji`}
                />
              </div>

              {/* user details */}
              <div className="space-y-1 overflow-hidden">
                {/* name */}
                <h3 className="text-lg font-medium truncate">
                  {user?.first_name || "User"}
                </h3>

                {/* id */}
                <p className="font-medium text-dark-800/70">
                  {user?.id || 123345678}
                </p>
              </div>
            </div>

            {/* settings */}
            <Link to="/profile" className="bg-white p-2.5 rounded-full">
              <Icon src={settingsIcon} alt="settings icon" className="size-7" />
            </Link>
          </div>
        </div>

        {/* Balance */}
        <Balance />

        {/* Main sections list */}
        <section className="section">
          <h2 className="section-title">Main sections</h2>

          {/* main content */}
          <nav>
            <ul className="space-y-4">
              {/* Create Post */}
              <li>
                <Link
                  to="/create/post"
                  className="flex items-center justify-between gap-1.5 h-24 pl-4 pr-3 w-full bg-white rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    {/* icon */}
                    <div className="flex items-center justify-center size-[50px] shrink-0 bg-lightAccent rounded-full xs:size-16">
                      <Icon
                        src={plusIcon}
                        alt="plus icon"
                        className="size-6 xs:size-7"
                      />
                    </div>

                    {/* details */}
                    <div className="space-y-1.5">
                      <h3 className="text-base font-medium xs:text-lg">
                        New post
                      </h3>

                      {/* description */}
                      <p className="text-dark-800/80 text-[15px] leading-5 xs:text-base">
                        Create a new post
                      </p>
                    </div>
                  </div>

                  <Arrow
                    fill="#555"
                    direction="right"
                    className="size-5 xs:size-6"
                  />
                </Link>
              </li>

              {/* Templates */}
              <li>
                <Link
                  to="/templates"
                  className="flex items-center justify-between gap-1.5 h-24 pl-4 pr-3 w-full bg-white rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    {/* icon */}
                    <div className="flex items-center justify-center size-[50px] shrink-0 bg-accent rounded-full xs:size-16">
                      <svg
                        width="28"
                        height="28"
                        fill="none"
                        viewBox="0 0 28 28"
                        className="size-6 xs:size-7"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeWidth="2"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.3 2.5H3.7C3.03726 2.5 2.5 3.03726 2.5 3.7V10.3C2.5 10.9628 3.03726 11.5 3.7 11.5H10.3C10.9628 11.5 11.5 10.9628 11.5 10.3V3.7C11.5 3.03726 10.9628 2.5 10.3 2.5Z"
                        />
                        <path
                          strokeWidth="2"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M24.3 2.5H17.7C17.0372 2.5 16.5 3.03726 16.5 3.7V10.3C16.5 10.9628 17.0372 11.5 17.7 11.5H24.3C24.9628 11.5 25.5 10.9628 25.5 10.3V3.7C25.5 3.03726 24.9628 2.5 24.3 2.5Z"
                        />
                        <path
                          strokeWidth="2"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.7 16.5H24.3C24.9628 16.5 25.5 17.0372 25.5 17.7V24.3C25.5 24.9628 24.9628 25.5 24.3 25.5H17.7C17.0372 25.5 16.5 24.9628 16.5 24.3V17.7C16.5 17.0372 17.0372 16.5 17.7 16.5Z"
                        />
                        <path
                          strokeWidth="2"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.5 24.3V17.7C11.5 17.0372 10.9628 16.5 10.3 16.5H3.7C3.03726 16.5 2.5 17.0372 2.5 17.7V24.3C2.5 24.9628 3.03726 25.5 3.7 25.5H10.3C10.9628 25.5 11.5 24.9628 11.5 24.3Z"
                        />
                      </svg>
                    </div>

                    {/* details */}
                    <div className="space-y-1.5">
                      <h3 className="text-base font-medium xs:text-lg">
                        Templates
                      </h3>

                      {/* description */}
                      <p className="text-dark-800/80 text-[15px] leading-5 xs:text-base">
                        Manage your templates
                      </p>
                    </div>
                  </div>

                  <Arrow
                    fill="#555"
                    direction="right"
                    className="size-5 xs:size-6"
                  />
                </Link>
              </li>

              {/* Premium */}
              <li>
                <Link
                  to="/premium"
                  className="flex items-center justify-between gap-1.5 h-24 pl-4 pr-3 w-full bg-white rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    {/* icon */}
                    <div className="flex items-center justify-center size-[50px] shrink-0 bg-yellow-400 rounded-full xs:size-16">
                      <svg
                        width="28"
                        height="28"
                        fill="none"
                        viewBox="0 0 28 28"
                        className="size-6 xs:size-[26px]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeWidth="2"
                          stroke="#ffffff"
                          d="M13.0489 1.92705C13.3483 1.00574 14.6517 1.00574 14.9511 1.92705L17.3677 9.36475C17.5016 9.77677 17.8855 10.0557 18.3188 10.0557H26.1392C27.1079 10.0557 27.5107 11.2953 26.727 11.8647L20.4001 16.4615C20.0496 16.7161 19.903 17.1675 20.0369 17.5795L22.4535 25.0172C22.7529 25.9385 21.6984 26.7047 20.9147 26.1353L14.5878 21.5385C14.2373 21.2839 13.7627 21.2839 13.4122 21.5385L7.08533 26.1353C6.30162 26.7047 5.24714 25.9385 5.54649 25.0172L7.96315 17.5795C8.09702 17.1675 7.95036 16.7161 7.59987 16.4615L1.27299 11.8647C0.489277 11.2953 0.892056 10.0557 1.86078 10.0557H9.68123C10.1145 10.0557 10.4984 9.77677 10.6323 9.36474L13.0489 1.92705Z"
                        />
                      </svg>
                    </div>

                    {/* details */}
                    <div className="space-y-1.5">
                      <h3 className="text-base font-medium xs:text-lg">
                        Premium
                      </h3>

                      {/* description */}
                      <p className="text-dark-800/80 text-[15px] leading-5 xs:text-base">
                        Get Premium
                      </p>
                    </div>
                  </div>

                  <Arrow
                    fill="#555"
                    direction="right"
                    className="size-5 xs:size-6"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Home;
