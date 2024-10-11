import React, { useEffect } from "react";

// Router
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    // Telegram Web App API ni yuklash
    const tg = window.Telegram.WebApp;

    // Telegram Web App dan foydalanuvchi ma'lumotlarini olish
    tg.ready();

    console.log("User data", tg.initData); // Foydalanuvchi ma'lumotlarini ko'rish
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
