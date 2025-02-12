// Import necessary modules from React and React Router
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "./Home.css";
import Header from "./components/Header.tsx";
import Cv from "./pages/CvPage.tsx";
import Contact from "./pages/contactme.tsx";
import Discoverme from "./pages/discoverme.tsx";
import Projects from "./pages/myprojects.tsx";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Discoverme />,
      },
      {
        path: "/Discoverme",
        element: <Discoverme />,
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
        element: <Discoverme />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
