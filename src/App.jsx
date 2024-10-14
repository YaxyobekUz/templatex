import React, { useState, useEffect } from "react";

// Router
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Premium from "./pages/Premium";
import Templates from "./pages/Templates";

// Layouts
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="templates" element={<Templates />} />
        <Route path="premium" element={<Premium />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
