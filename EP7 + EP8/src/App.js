import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import About from "./components/About";
import History from "./components/History";
import Offer from "./components/Offer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantPage from "./components/RestaurantPage";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutUs",
        element: <About />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
//async defer
root.render(<RouterProvider router={appRouter} />);
