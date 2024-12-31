import datas from "../datas/datas.json";
import { useEffect, useState } from "react";

type props ={
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  delay: number;
}
function Discoverme() {
  // Extraction des données JSON
  const { img, firstName, lastName, age, title, personality } = datas.personality;

  const [typedTitle, setTypedTitle] = useState("");
  const [typedDesc, setTypedDesc] = useState("");

  useEffect(() => {
    const titre = (`R${firstName} ${lastName} ${age} ${title || ""}`);
    const desc = (`S${personality || ""}`);

    // Fonction pour l'effet de machine à écrire
    const typeEffect = ({ text, setText, delay }: props) => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length && text[index] !== undefined) {
          setText((prev) => prev + (text[index] || ""));
          index++;
        } else {
          clearInterval(interval);
        }
      }, delay);
    };

    // Appliquer l'effet de machine à écrire
    typeEffect({ text: titre, setText: setTypedTitle, delay: 80 }); // Effet pour le titre
    setTimeout(() => typeEffect({ text: desc, setText: setTypedDesc, delay: 50 }), titre.length * 100); // Déclencher le paragraphe après le titre
  }, []);
  return (
  <>
    <div className="profil">
					<img src={img} width="35%" className="logo" alt="moi" />
					<h1 className="titleProfil">
						{typedTitle}
					</h1>
					<p className="personalityProfil">{typedDesc}</p>
				</div>
  </>
);
}

export default Discoverme;