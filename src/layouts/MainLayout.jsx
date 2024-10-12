import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      {/* Main */}
      <main className="min-h-screen">
        <div className="pb-24">
          <Outlet />
        </div>
      </main>

      {/* Navigation bar */}
      <Navbar />
    </>
  );
};

export default MainLayout;
