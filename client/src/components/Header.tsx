import "../styles/Header.css";
import { Link, Outlet } from "react-router-dom";
import { ContextProvider } from "../context/userContext";
import Footer from "./Footer";
import "../styles/index.css";
import "../styles/Roots.css";

function Header() {
  return (
    <>
      <ContextProvider>
        <div className="principalcontener">
          <div className="header">
            <nav>
              <Link to="home">
                <b>Bienvenue</b>
              </Link>
              <Link to="discover">
                <b>Qui suis je ?</b>
              </Link>
              <Link to="cv">
                <b>Mon Cursus</b>
              </Link>
              <Link to="myprojects">
                <b>Mes Projets</b>
              </Link>
              <Link to="contact">
                <b>Contact</b>
              </Link>
            </nav>
          </div>
          <div className="main">
            <main>
              <Outlet />
            </main>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </ContextProvider>
    </>
  );
}

export default Header;
