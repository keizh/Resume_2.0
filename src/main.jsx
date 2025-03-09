import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage.jsx";
import Projects from "./Components/Projects.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Contacts from "./Components/Contacts.jsx";
import ProjectComp from "./Components/ProjectComp.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/project/:id",
        element: <ProjectComp />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
