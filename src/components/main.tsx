// Import necessary modules from React and React Router
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Autres from "../AdminPages/Autres.tsx";
import Experiences from "../AdminPages/Experiences.tsx";
import Formations from "../AdminPages/Formations.tsx";
import Projets from "../AdminPages/Projets.tsx";
import Cv from "../pages/CvPage.tsx";
import Welcome from "../pages/Welcome.tsx";
import Contact from "../pages/contactme.tsx";
import Discoverme from "../pages/discoverme.tsx";
import Projects from "../pages/myprojects.tsx";
import Header from "./Header.tsx";
import Admin from "./admin.tsx";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "discover",
        element: <Discoverme />,
      },
      {
        path: "cv",
        element: <Cv />,
      },
      {
        path: "myprojects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "formations",
            element: <Formations />,
          },
          {
            path: "experiences",
            element: <Experiences />,
          },
          {
            path: "autres",
            element: <Autres />,
          },
          {
            path: "projets",
            element: <Projets />,
          },
        ],
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
