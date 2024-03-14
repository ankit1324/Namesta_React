import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Offer from "./components/Offer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantPage from "./components/RestaurantPage";
import UserContext from "../utils/UserContext";
import { useState } from "react";

const History = lazy(() => import("./components/History"));
const About = lazy(() => import("./components/About"));

const App = () => {
  const [userName, setUserName] = useState("User");
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="bg-yellow-50 app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
