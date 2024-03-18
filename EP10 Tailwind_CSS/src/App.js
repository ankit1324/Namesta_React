import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Offer from "./components/Offer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantPage from "./components/RestaurantPage";

const History = lazy(() => import("./components/History"));
const About = lazy(() => import("./components/About"));

const App = () => {
  return (
    <div className="bg-yellow-50">
      <Header />
      <Outlet />
    </div>
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/history",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <History />
          </Suspense>
        ),
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
