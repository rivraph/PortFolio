import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./styles/Home.css";
import Contact from "./pages/contactme.tsx";
import Cv from "./pages/CvPage.tsx";
import Projects from "./pages/myprojects.tsx";
import Discoverme from "./pages/discoverme.tsx";
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
	{
		element: <Header />,
		children: [
			{
				path: "/home",
				element: <Home />,
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
				element: <Home />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
