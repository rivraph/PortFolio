import reactLogo from "/assets/react.svg";
import "../styles/Home.css";
import datas from "../datas/datas.json";

function Footer() {
	const handleClick = (url: string) => {
		window.open(url);
	};
	const url = "https://www.instagram.com/therrelylifephotography/";
	const dat = datas.personality;
	return (
		<>
			<div className="contact">
					<h3>Contact me</h3>
					<span className="spancontact">
						<a href={dat.email}>Email 📨</a> |
						<a href={dat.github} target="_blank">
							Github
						</a>{" "}
						|
						<a href={dat.linkedin} target="_blank">
							linkedin
						</a>{" "}
						|
						<a href={dat.facebook} target="_blank">
							facebook
						</a>{" "}
						|
					</span>
			</div>
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
				<p> </p>
			</div>
		</>
	);
}

export default Footer;
