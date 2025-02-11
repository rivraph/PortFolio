import "../styles/Home.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function App() {
	return (
		<main className="app">
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
}

export default App;
