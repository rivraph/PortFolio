import "../Home.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Header() {
  return (
    <div className="header">
      <nav>
        <Link to="home">
          <b>Home</b>
        </Link>
        <Link to="discover">
          <b>Discover-me</b>
        </Link>
        <Link to="cv">
          <b>Resume</b>
        </Link>
        <Link to="myprojects">
          <b>Projects</b>
        </Link>
        <Link to="contact">
          <b>Contact</b>
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
