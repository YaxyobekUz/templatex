import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-7 h-[calc(100vh-96px)]">
      <h1 className="text-2xl font-medium pt-20">Page not found :(</h1>

      {/* Homepage link */}
      <Link className="bg-primary px-5 py-2.5 rounded-xl text-white">
        Back to home
      </Link>
    </div>
  );
};

export default Page404;
