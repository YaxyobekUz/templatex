import React, { useEffect, useState } from "react";

// Telegram
import useTelegram from "../hooks/useTelegram";

// Components
import Icon from "../components/Icon";
import Arrow from "../components/Arrow";
import EmptyData from "../components/EmptyData";

// Images
import _3XIcon from "../assets/images/icons/3x.svg";
import userIcon from "../assets/images/icons/user.svg";
import startImg from "../assets/images/others/star.webp";
import crownIcon from "../assets/images/icons/crown.svg";
import imgBoxIcon from "../assets/images/icons/img-box.svg";

const Premium = () => {
  const benefitsData = [
    {
      id: 0,
      title: "Extended Template Storage",
      description:
        "Increase your template saving limit from 12 to 36 templates, allowing more flexibility and creativity.",
      icon: { src: _3XIcon, fill: "#4535C1", name: "3x icon" },
    },
    {
      id: 1,
      title: "Template Image Storage",
      description:
        "Save images for your templates directly to your account for easy access anytime.",
      icon: { src: imgBoxIcon, fill: "#7635C1", name: "image box icon" },
    },
    {
      id: 2,
      title: "Exclusive Icons",
      description:
        "Add special premium icons next to your username to stand out from others.",
      icon: { src: crownIcon, fill: "#9935C1", name: "crown icon" },
    },
    {
      id: 3,
      title: "Custom Profile Picture",
      description:
        "Upload your own unique profile picture in addition to the default options provided by the app.",
      icon: { src: userIcon, fill: "#C135B3", name: "user profile icon" },
    },
  ];
  const { tg } = useTelegram();
  const [benefits, setBenefits] = useState(benefitsData);

  useEffect(() => {
    tg.setHeaderColor("#fff");
  }, []);

  return (
    <>
      {/* Header */}
      <header className="flex flex-col items-center justify-center gap-4 pt-6">
        {/* page icon */}
        <Icon src={startImg} size={112} alt="3d star" className="size-28" />

        {/* page title */}
        <h1 className="text-center text-xl font-semibold xs:text-2xl">
          Premium
        </h1>

        {/* page description */}
        <p className="max-w-96 px-4 text-base text-center xs:text-lg xs:px-0">
          Unlock the full potential of your experience by upgrading to Premium.
        </p>
      </header>

      {/* Benefits list */}
      <section className="section !px-0 pb-14">
        <div className="w-full bg-white rounded-t-2xl pt-1.5 pb-3 space-y-0.5">
          {benefits.length > 0 ? (
            <ul>
              {benefits.map((benefit) => (
                <li
                  key={benefit.id}
                  className="flex items-start justify-between gap-4 relative pl-4 pr-3 py-2.5 w-full border-b border-background last:border-b-0 xs:pr-4"
                >
                  {/* icon */}
                  <div
                    role="icon"
                    style={{ background: benefit.icon.fill }}
                    className="flex items-center justify-center size-9 shrink-0 bg-primary rounded-full text-white text-lg xs:size-12"
                  >
                    <Icon
                      src={benefit.icon.src}
                      alt={benefit.icon.name}
                      className="size-6 xs:size-7"
                    />
                  </div>

                  {/* item main content */}
                  <div className="flex items-center gap-1 xs:gap-3 w-[calc(100%-48px)">
                    {/* details */}
                    <div className="w-full space-y-1.5">
                      <h3 className="text-base font-medium xs:text-lg">
                        {benefit.title}
                      </h3>

                      {/* description */}
                      <p className="text-dark-800/80 text-sm leading-5 xs:text-base">
                        {benefit.description}
                      </p>
                    </div>

                    {/* arrow icon */}
                    <Arrow
                      fill="#555"
                      direction="right"
                      className="size-4 shrink-0 xs:size-5"
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyData className="py-9" />
          )}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-12 w-full p-4 pb-11 bg-white animate-up shadow-sm">
        <button className="btn-primary">Get Premium for 0.99$</button>
      </div>
    </>
  );
};

export default Premium;
