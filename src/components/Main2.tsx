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
		email,
		title,
		github,
		linkedin,
		facebook,
	} = datas.personality
	const education = datas.education;
	const experience = datas.experience;
	const others = datas.others;
	

	return (
		<>
			<div className="MainContener">
				
				<div className="separate"> </div>
				
				</div>
				
				<div className="cardsPosition">
					<h3>Projects</h3>
					<div id="cardsPosition">
						<Cards />
					</div>
				</div>
				<div className="separate"> </div>

				
			
		</>
	);
}

export default Main2;
