import reactLogo from "/react.svg";
import "../styles/Footer.css";
import { useContextProvider } from "../context/userContext";

function Footer() {
  const { handleAdminConnect } = useContextProvider();

  return (
    <>
      <div className="footercontener">
        <a
          href="/admin/formations"
          className="reactlogo"
          rel="noreferrer"
          onClick={handleAdminConnect}
        >
          <img src={reactLogo} alt="React logo" />
        </a>
        <p className="read-the-docs">
          <b>Powered by REACT</b>
        </p>
        <p>
          <b> © RR development </b>
        </p>
      </div>
    </>
  );
}

export default Footer;
