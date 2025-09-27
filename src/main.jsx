import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { StrictMode } from "react";
import ErrorPage from "./Components/Errorpage/ErrorPage";
import CourseDetails from "./Components/Detailspage/CourseDetails";
import BlogDetails from "./Components/Blogdetail/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "course/:id",
        element: <CourseDetails />,
        loader: () => fetch("/course.json"),
      },
      {
        path: "blog/:id",
        element: <BlogDetails />,
        loader: () => fetch("/blog.json"),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
