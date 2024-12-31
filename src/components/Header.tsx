import "../styles/Home.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Header() {
	return (
		<div className="header">
			<nav>
				<Link to="home">
					<a>
						<b>Home</b>
					</a>
				</Link>
				<Link to="discover">
					<a>
						<b>Discover-me</b>
					</a>
				</Link>
				<Link to="cv">
					<a>
						<b>Resume</b>
					</a>
				</Link>
				<Link to="myprojects">
					<a>
						<b>Projects</b>
					</a>
				</Link>
				<Link to="contact">
					<a>
						<b>Contact</b>
					</a>
				</Link>
			</nav>
			<main>
				<Outlet />
				<Footer />
			</main>
			
		</div>
	);
}

export default Header;
