import { Link } from "react-router-dom";
import "../styles/CvPage.css";
import { useState } from "react";
import { useContextProvider } from "../context/userContext";

function Cv() {
  localStorage.removeItem("isAdmin");
  const [visibleSection, setVisibleSection] = useState<string | null>(null);
  const { autreData, expData, certData } = useContextProvider();
  console.info("autreData page cv =>", autreData);
  console.info("expData page cv =>", expData);
  console.info("certData page cv =>", certData);

  const toggleSection = (section: string) => {
    // Basculer la visibilité de la section
    setVisibleSection((prevSection) =>
      prevSection === section ? null : section,
    );
  };

  const onkeyDown = () => {
    toggleSection("formation");
  };

  return (
    <div className="principalCv">
      <div className="infosCv">
        <h2
          className="titleCardCv"
          style={{ cursor: "pointer" }}
          onClick={() => toggleSection("formation")}
          onKeyDown={onkeyDown}
        >
          Diplomes
        </h2>

        {visibleSection === "formation" && (
          <div className="cv-contener">
            {certData
              .sort((a, b) => b.id - a.id)
              .map((c) => (
                <div className="spandiv" key={c.id}>
                  <span>
                    Diplome {c.diplome} de {c.description} obtenu en{" "}
                    {c.annee_obtention} ({c.localisation})
                  </span>
                  <br />
                  <br />
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="infosCv">
        <h2
          className="titleCardCv"
          onClick={() => toggleSection("experiences")}
          style={{ cursor: "pointer" }}
          onKeyDown={onkeyDown}
        >
          Expériences
        </h2>
        {visibleSection === "experiences" && (
          <div className="cv-contener">
            {expData
              .sort((a, b) => b.id - a.id)
              .map((e) => (
                <div className="spandiv" key={e.id}>
                  <span key={e.id}>
                    {e.poste} chez {e.entreprise} situé à {e.lieu} de{" "}
                    {e.date_debut} à {e.date_fin}
                  </span>
                  <br />
                  <span>Principales fonctions : {e.description}</span>
                  <br />
                  <br />
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="infosCv">
        <h2
          className="titleCardCv"
          onClick={() => toggleSection("competences")}
          style={{ cursor: "pointer" }}
          onKeyDown={onkeyDown}
        >
          Compétences
        </h2>
        {visibleSection === "competences" && (
          <div className="cv-contener">
            {autreData.map((o) => (
              <div className="spandiv" key={o.id}>
                <span>
                  {o.intitule} : {o.description}
                </span>
                <br />
                <br />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="contenercvbutton">
        <Link to="/myprojects" className="cvButton">
          Projets
        </Link>
      </div>
    </div>
  );
}

export default Cv;
