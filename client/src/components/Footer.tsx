import reactLogo from "/react.svg";
import "../styles/Footer.css";
function Footer() {
  return (
    <>
      <div className="footercontener">
        <a
          href="https://react.dev"
          target="_blank"
          className="reactlogo"
          rel="noreferrer"
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
