import "../styles/Home.css";
import datas from "../datas/datas.json";
import Cards from "./Cards";
import Resume from "./Cv";
import styles from "./Main2.module.css";
import Swipper from "./swiperResume";

function Main2() {
	const {
		firstName,
		lastName,
		img,
		personality,
		age,
		email,
		title,
		github,
		linkedin,
		facebook,
	} = datas.personality;
	const education = datas.education;
	const experience = datas.experience;
	const others = datas.others;

	return (
		<>
			<div className="MainContener">
				<div className="profil">
					<img src={img} width="35%" className="logo" alt="moi" />
					<h1 className="titleProfil">
						Je me présente, {firstName} {lastName}, {age}ans, {title}
					</h1>
					<p className="personalityProfil">{personality}</p>
				</div>
				<div className="separate"> </div>
				<div className={styles.swipperContainer}>
					<Swipper />
				</div>

				<div className="separate"> </div>
				<div className="cardsPosition">
					<h3>Projects</h3>
					<div id="cardsPosition">
						<Cards />
					</div>
				</div>
				<div className="separate"> </div>

				<div className="contact">
					<h3>Contact me</h3>
					<span className="spancontact">
						<a href={email}>Email 📨</a> |
						<a href={github} rel="noreferrer" target="_blank">
							Github
						</a>{" "}
						|
						<a href={linkedin} rel="noreferrer" target="_blank">
							linkedin
						</a>{" "}
						|
						<a href={facebook} rel="noreferrer" target="_blank">
							facebook
						</a>{" "}
						|
					</span>
				</div>
			</div>
		</>
	);
}

export default Main2;
