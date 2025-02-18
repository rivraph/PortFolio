import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import "../styles/index.css";
import "../styles/Roots.css";
import "../styles/Header.css";
import { ContextProvider } from "../context/userContext";

function Header() {
  // mettre en place une fonction permettant, lors de la navigation, remove setItem admin
  const handleAdminDisconnect = () => {
    localStorage.removeItem("isAdmin");
  };

  // fonction onKeydown
  const handleKeyAdminDisconnect = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleAdminDisconnect();
    }
  };

  return (
    <>
      <ContextProvider>
        <div className="principalcontener">
          <div className="header">
            <nav>
              <Link to="/">
                <b
                  onClick={handleAdminDisconnect}
                  onKeyDown={handleKeyAdminDisconnect}
                >
                  Bienvenue
                </b>
              </Link>
              <Link to="discover">
                <b
                  onClick={handleAdminDisconnect}
                  onKeyDown={handleKeyAdminDisconnect}
                >
                  Qui suis je ?
                </b>
              </Link>
              <Link to="cv">
                <b
                  onClick={handleAdminDisconnect}
                  onKeyDown={handleKeyAdminDisconnect}
                >
                  Mon Cursus
                </b>
              </Link>
              <Link to="myprojects">
                <b
                  onClick={handleAdminDisconnect}
                  onKeyDown={handleKeyAdminDisconnect}
                >
                  Mes Projets
                </b>
              </Link>
              <Link to="contact">
                <b
                  onClick={handleAdminDisconnect}
                  onKeyDown={handleKeyAdminDisconnect}
                >
                  Contact
                </b>
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
