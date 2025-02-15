import { useState } from "react";
import "../styles/Myprojects.css";
import { Link } from "react-router-dom";
import { useContextProvider } from "../context/userContext";

function Projects() {
  localStorage.removeItem("isAdmin");
  const { projData } = useContextProvider();

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
        {projData.map((p, index) => (
          <figure className="cardProject" key={p.id}>
            <h2
              className="titleCardProject"
              onClick={() => toggleVisibility(index)}
              style={{ cursor: "pointer" }}
              onKeyDown={onKeyDown}
            >
              {p.nom}
            </h2>
            {visibleProjects === index && (
              <>
                <img
                  className="cardImage"
                  src={p.img}
                  alt="représentation du projet"
                />
                <figcaption className="cardDescription">{p.info}</figcaption>
                <button
                  className="cardButton"
                  type="button"
                  onClick={() => handleClick(p.url)}
                >
                  Site
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
