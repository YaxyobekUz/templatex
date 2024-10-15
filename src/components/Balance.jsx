import React from "react";

// Components
import Icon from "./Icon";

// Images
import coinIcon from "../assets/images/icons/coin.svg";
import dollarIcon from "../assets/images/others/dollar.png";

const Balance = () => {
  return (
    <section className="section">
      <h2 className="section-title">Your balance</h2>

      {/* section content */}
      <div className="flex flex-col z-10 w-full h-56 bg-white p-4 rounded-2xl">
        <div className="flex items-center gap-2.5 -mb-5">
          <Icon src={coinIcon} className="size-7" />

          <span>0</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 mb-auto">
          <Icon src={dollarIcon} className="size-[88px]" />

          <b className="text-xl text-dark-800 font-semibold">156.9$</b>
        </div>

        {/* top up the account */}
        <button className="btn-primary">Top up the account</button>
      </div>
    </section>
  );
};

export default Balance;
