import { useState } from "react";
import datas from "../datas/datas.json";
import "../styles/Myprojects.css";
import { Link } from "react-router-dom";

const data = datas.projets;

function Projects() {
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
    {
      projet: data.projet5,
      img: data.img5,
      description: data.description5,
      url: data.url5,
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState<number | null>(null);

  const toggleVisibility = (index: number) => {
    // Si on clique sur un projet déjà visible, on le masque. Sinon, on l'affiche.
    setVisibleProjects((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClick = (url: string) => {
    window.open(url);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      toggleVisibility(Number(event.target));
    }
  };

  return (
    <>
      <div className="projectprincipal">
        {projects.map((project, index) => (
          <figure className="cardProject" key={1}>
            <h2
              className="titleCardProject"
              onClick={() => toggleVisibility(index)}
              style={{ cursor: "pointer" }}
              onKeyDown={onKeyDown}
            >
              {project.projet}
            </h2>
            {visibleProjects === index && (
              <>
                <img
                  className="cardImage"
                  src={project.img}
                  alt="représentation du projet"
                />
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
              </>
            )}
          </figure>
        ))}
      </div>
      <Link to="/contact" className="projetButton">
        Contact
      </Link>
    </>
  );
}

export default Projects;
