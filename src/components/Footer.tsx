import reactLogo from "../assets/react.svg";
import "../styles/Home.css";

function Footer() {
	const handleClick = (url: string) => {
		window.open(url);
	};
	const url = "https://www.instagram.com/therrelylifephotography/";

	return (
		<>
			<div className="footer">
				<a href="https://react.dev" target="_blank" className="react">
					<img src={reactLogo} alt="React logo" />
				</a>
				<p className="read-the-docs">
					<b>Powered by REACT</b>
				</p>
				<p>
					<b> © RR development </b>
				</p>
				<p>
					<b id="therrelylife" onClick={() => handleClick(url)}>
						{" "}
						© therrelylifephotographie{" "}
					</b>
				</p>
				<p></p>
			</div>
		</>
	);
}

export default Footer;
