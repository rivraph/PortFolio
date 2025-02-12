import { useEffect, useState } from "react";
import datas from "../datas/datas.json";
import "../styles/Discoverme.css";
import { Link } from "react-router-dom";

type props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  delay: number;
};
function Discoverme() {
  // Extraction des données JSON
  const { img, firstName, lastName, age, title, personality } =
    datas.personality;

  const [typedTitle, setTypedTitle] = useState("");
  const [typedDesc, setTypedDesc] = useState("");

  useEffect(() => {
    const titre = `R${firstName} ${lastName} ${age} ${title || ""}`;
    const desc = `S${personality || ""}`;

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
    setTimeout(
      () => typeEffect({ text: desc, setText: setTypedDesc, delay: 50 }),
      titre.length * 100,
    ); // Déclencher le paragraphe après le titre
  }, [age, firstName, lastName, personality, title]);
  return (
    <div className="discovermeconteneur">
      <div className="profilDm">
        <img src={img} width="10%" className="logoDm" alt="moi" />
        <h1 className="titleProfilDm">{typedTitle}</h1>
        <p className="personalityProfilDm">{typedDesc}</p>
      </div>
      <div>
        <Link to="/cv" className="discoverButton">
          Cursus
        </Link>
      </div>
    </div>
  );
}

export default Discoverme;
