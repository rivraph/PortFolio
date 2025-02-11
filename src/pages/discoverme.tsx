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
    const titre = (`R${firstName} ${lastName} ${age} ans ${title || ""}`);
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
      <img src={img} width="30%" className="logo" alt="moi" />
      <h1 className="titleProfil">
        {typedTitle}
      </h1>
      <p className="personalityProfil">{typedDesc}</p>
      <p className="explanationProfil"> 
        Fort d’une expérience de plus de 10 ans dans des postes techniques variés, notamment en mécanique automobile et en gestion d’expertises, je me réinvente en tant que développeur web full stack. Diplômé d’une formation Bac+2 en développement web et web application à la Wild Code School, j’ai acquis des compétences solides en HTML, CSS, JavaScript, React, Node.js, et déploiement CI/CD.

Je me distingue par ma capacité à résoudre des problématiques complexes, à m’adapter rapidement et à apprendre de nouvelles technologies. Mes expériences passées en tant que chef d’atelier, gérant d’entreprise et technicien avancé m’ont permis de développer un esprit analytique, une gestion rigoureuse et un sens aigu de la relation client.

Passionné par l’innovation et les nouvelles technologies, je cherche à relever de nouveaux défis dans des environnements dynamiques, où je pourrai allier mes compétences techniques et ma détermination à mener à bien des projets ambitieux.

Compétences clés :
✔️ Développement web front-end et back-end
✔️ Maintenance et amélioration continue des systèmes techniques
✔️ Gestion de projet en méthode Agile
✔️ Diagnostic, analyse et résolution de problématiques

Découvrez mon portfolio ici : Portfolio

Contactez-moi pour discuter de collaborations ou d’opportunités professionnelles !</p>
		</div>
  </>
);
}

export default Discoverme;