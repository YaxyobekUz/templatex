import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 z-30 bottom-0 w-full h-16 bg-white  border-primary rounded-t-2xl shadow-sm">
      <ul className="flex h-full container !px-0">
        {/* Home */}
        <li className="w-1/5">
          <NavLink
            to="/"
            className="flex flex-col items-center justify-center gap-1.5 w-full h-full navlink"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="active-stroke active-fill"
                d="M25.6667 21V11.3922C25.6667 9.75301 24.8066 8.23398 23.401 7.39061L16.401 3.19061C14.9232 2.3039 13.0768 2.3039 11.599 3.19061L4.59902 7.39061C3.1934 8.23398 2.33333 9.75301 2.33333 11.3922V21C2.33333 23.5773 4.42267 25.6667 7 25.6667H21C23.5773 25.6667 25.6667 23.5773 25.6667 21Z"
              />
              <path
                d="M10.5 21H17.5"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="active-stroke active-stroke-inner"
              />
            </svg>

            {/* link name */}
            <h3 className="active-text text-xs font-medium">Home</h3>
          </NavLink>
        </li>

        {/* Templates */}
        <li className="w-1/5">
          <NavLink
            to="/templates"
            className="flex flex-col items-center justify-center gap-1.5 w-full h-full navlink"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="active-stroke active-fill"
                d="M10.3 2.5H3.7C3.03726 2.5 2.5 3.03726 2.5 3.7V10.3C2.5 10.9628 3.03726 11.5 3.7 11.5H10.3C10.9628 11.5 11.5 10.9628 11.5 10.3V3.7C11.5 3.03726 10.9628 2.5 10.3 2.5Z"
              />
              <path
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="active-stroke active-fill"
                d="M24.3 2.5H17.7C17.0372 2.5 16.5 3.03726 16.5 3.7V10.3C16.5 10.9628 17.0372 11.5 17.7 11.5H24.3C24.9628 11.5 25.5 10.9628 25.5 10.3V3.7C25.5 3.03726 24.9628 2.5 24.3 2.5Z"
              />
              <path
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="active-stroke active-fill"
                d="M17.7 16.5H24.3C24.9628 16.5 25.5 17.0372 25.5 17.7V24.3C25.5 24.9628 24.9628 25.5 24.3 25.5H17.7C17.0372 25.5 16.5 24.9628 16.5 24.3V17.7C16.5 17.0372 17.0372 16.5 17.7 16.5Z"
              />
              <path
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="active-stroke active-fill"
                d="M11.5 24.3V17.7C11.5 17.0372 10.9628 16.5 10.3 16.5H3.7C3.03726 16.5 2.5 17.0372 2.5 17.7V24.3C2.5 24.9628 3.03726 25.5 3.7 25.5H10.3C10.9628 25.5 11.5 24.9628 11.5 24.3Z"
              />
            </svg>

            {/* link name */}
            <h3 className="active-text text-xs font-medium">Templates</h3>
          </NavLink>
        </li>

        {/* Add (Main) */}
        <li className="w-1/5">
          <NavLink
            to="/add"
            className="flex flex-col items-center justify-center gap-1.5 relative w-full h-full navlink"
          >
            <svg
              width="52"
              height="52"
              fill="none"
              viewBox="0 0 52 52"
              className="absolute -top-4 size-12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="2"
                className="!fill-white !stroke-primary active-stroke active-fill"
                d="M50.9167 26C50.9167 12.2389 39.7611 1.08331 26 1.08331C12.2389 1.08331 1.08333 12.2389 1.08333 26C1.08333 39.7611 12.2389 50.9166 26 50.9166C39.7611 50.9166 50.9167 39.7611 50.9167 26Z"
              />
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="active-stroke-inner !stroke-primary"
                d="M26 16V25.9237M26 25.9237V36M26 25.9237H36M26 25.9237H16"
              />
            </svg>

            {/* link name */}
            <h3 className="active-text pt-9 text-xs font-medium">Add</h3>
          </NavLink>
        </li>

        {/* Premium */}
        <li className="w-1/5">
          <NavLink
            to="/premium"
            className="flex flex-col items-center justify-center gap-1.5 w-full h-full navlink"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="1.8"
                className="active-stroke active-fill"
                d="M13.0489 1.92705C13.3483 1.00574 14.6517 1.00574 14.9511 1.92705L17.3677 9.36475C17.5016 9.77677 17.8855 10.0557 18.3188 10.0557H26.1392C27.1079 10.0557 27.5107 11.2953 26.727 11.8647L20.4001 16.4615C20.0496 16.7161 19.903 17.1675 20.0369 17.5795L22.4535 25.0172C22.7529 25.9385 21.6984 26.7047 20.9147 26.1353L14.5878 21.5385C14.2373 21.2839 13.7627 21.2839 13.4122 21.5385L7.08533 26.1353C6.30162 26.7047 5.24714 25.9385 5.54649 25.0172L7.96315 17.5795C8.09702 17.1675 7.95036 16.7161 7.59987 16.4615L1.27299 11.8647C0.489277 11.2953 0.892056 10.0557 1.86078 10.0557H9.68123C10.1145 10.0557 10.4984 9.77677 10.6323 9.36474L13.0489 1.92705Z"
              />
            </svg>

            {/* link name */}
            <h3 className="active-text text-xs font-medium">Premium</h3>
          </NavLink>
        </li>

        {/* Profile */}
        <li className="w-1/5">
          <NavLink
            to="/profile"
            className="flex flex-col items-center justify-center gap-1.5 w-full h-full navlink"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="1.8"
                className="active-stroke active-fill"
                d="M18.5 16H9.5C6.46243 16 4 18.4624 4 21.5C4 24.5376 6.46243 27 9.5 27H18.5C21.5376 27 24 24.5376 24 21.5C24 18.4624 21.5376 16 18.5 16Z"
              />
              <path
                strokeWidth="1.8"
                className="active-stroke active-fill"
                d="M8 7C8 10.3137 10.6863 13 14 13C17.3137 13 20 10.3137 20 7C20 3.68629 17.3137 1 14 1C10.6863 1 8 3.68629 8 7Z"
              />
            </svg>

            {/* link name */}
            <h3 className="active-text text-xs font-medium">Profile</h3>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
