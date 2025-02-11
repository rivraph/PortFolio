import datas from "../datas/datas.json";
import "../styles/Home.css";
import { useState } from "react";


function Cv () {
    const exp = datas.experience;
	const Edu = datas.education;
	const Oth = datas.others;

    const [visibleSection, setVisibleSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    // Basculer la visibilité de la section
    setVisibleSection(prevSection => (prevSection === section ? null : section));
  };

    return (
        <div className="principalCv">
            <div className="infos">
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <h2 className="titleCard"  style={{ cursor: "pointer" }} onClick={() => toggleSection("formation")}
                > Mes formations</h2>
                {visibleSection === "formation" && (
                <div className="cv-contener"> 
                    <span>{Edu.wild}</span><br />
                    <span>{Edu.remap}</span><br />
                    <span>{Edu.tdra}</span><br />
                    <span>{Edu.bacc}</span><br />
                </div>
                )}
            </div>
            <div className="infos">
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <h2 className="titleCard" onClick={() => toggleSection("experiences")}
          style={{ cursor: "pointer" }}>Expériences Pro</h2>
          {visibleSection === "experiences" && (
                <div className="cv-contener"> 
                    <span>{exp.bleulib}</span><br />                    
                    <span>{exp.biomotors}</span><br />
                    <span>{exp.kia1}</span><br />
                    <span>{exp.mecaperfs}</span><br />
                    <span>{exp.kia2}</span><br />
                    <span>{exp.delko}</span><br />
                    <span>{exp.kia}</span><br />
                </div>
          )}
            </div>
            <div className="infos">
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <h2 className="titleCard" onClick={() => toggleSection("competences")}
          style={{ cursor: "pointer" }}>Autres compétences</h2>
          {visibleSection === "competences" && (
                <div className="cv-contener"> 
                    <span>{Oth.logiciels}</span><br />
                    <span>{Oth.francais}</span><br />
                    <span>{Oth.anglais}</span><br />
                    <span>{Oth.espagnol}</span><br />
                    
                </div>
                )}
           </div>
        </div>
    )
}

export default Cv;