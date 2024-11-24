import datas from "../datas/datas.json";

const data = datas.projets;

function Cards() {
	const projects = [
		{
			projet: data.projet1,
			img: data.img1,
			description: data.description1,
			url: data.url1,
		},
		{
			projet: data.projet2,
			img: data.img2,
			description: data.description2,
			url: data.url2,
		},
		{
			projet: data.projet3,
			img: data.img3,
			description: data.description3,
			url: data.url3,
		},
		{
			projet: data.projet4,
			img: data.img4,
			description: data.description4,
			url: data.url4,
		},
	];
	console.log(data.img1);

	const handleClick = (url: string) => {
		window.open(url);
	};

	return (
		<>
			{projects.map((project, index) => (
				<figure className="card" key={index}>
					<h2 className="titleCard">{project.projet}</h2>
					<img className="cardImage" src={project.img} />
					<figcaption className="cardDescription">
						{project.description}
					</figcaption>
					<button
						className="cardButton"
						type="button"
						onClick={() => handleClick(project.url)}
					>
						Github link
					</button>
				</figure>
			))}
		</>
	);
}

export default Cards;
