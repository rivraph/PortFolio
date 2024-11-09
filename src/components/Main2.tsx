import "../styles/Home.css";
import datas from "../datas/datas.json";
import Cards from "./Cards";
import Resume from "./Cv";

function Main2() {
	const {
		firstName,
		lastName,
		img,
		personality,
		age,
		telephone,
		email,
		title,
		github,
		linkedin,
		hobbies,
		permis,
		facebook,
		instagram,
	} = datas.personality;
	const education = datas.education;
	const experience = datas.experience;
	const others = datas.others;

	const handleClick = () => {
		window.alert(
			"retrouvez tous mes projets sur mon Github : https://github.com/rrczt974",
		);
	};

	return (
		<>
			<div className="MainContener">
				<div className="profil">
					<img src={img} width="35%" className="logo" />
					<h1 className="titleProfil">
						Je suis {firstName} {lastName}, {age}ans, {title}
					</h1>
					<p className="personalityProfil">{personality}</p>
				</div>
				<div className="separate"></div>
				<div className="resumeCard">
					<h3>Resume</h3>
					<Resume
						education={education}
						experience={experience}
						others={others}
					/>
				</div>
				<div className="separate"></div>
				<div className="cardsPosition">
					<h3>Projects</h3>
					<div id="cardsPosition">
						<Cards />
					</div>
				</div>
				<div className="separate"></div>

				<div className="contact">
					<h3>Contact me</h3>
					<span className="spancontact">
						<a href={email}>Email 📨</a> |
						<a href={github} target="_blank">
							Github
						</a>{" "}
						|
						<a href={linkedin} target="_blank">
							linkedin
						</a>{" "}
						|
						<a href={facebook} target="_blank">
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
