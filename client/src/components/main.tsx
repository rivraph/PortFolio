// Import necessary modules from React and React Router
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cv from "../pages/CvPage.tsx";
import Welcome from "../pages/Welcome.tsx";
import Contact from "../pages/contactme.tsx";
import Discoverme from "../pages/discoverme.tsx";
import Projects from "../pages/myprojects.tsx";
import Header from "./Header.tsx";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/discover",
        element: <Discoverme />,
      },
      {
        path: "/cv",
        element: <Cv />,
      },
      {
        path: "/myprojects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Welcome />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
