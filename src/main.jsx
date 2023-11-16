import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Layout/Home.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import ApplyedJob from "./components/ApplyedJob/ApplyedJob.jsx";
import cartItemLoader from "./loder/cartItemsLoader.js";
import { Toaster } from "react-hot-toast";
import Statistics from "./components/Statistics/Statistics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HeroSection></HeroSection>,
      },
      {
        path: "job-details",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applyed-job",
        element: <ApplyedJob></ApplyedJob>,
        loader: cartItemLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
  </React.StrictMode>
);
