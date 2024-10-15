import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
