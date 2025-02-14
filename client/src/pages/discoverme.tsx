import "../styles/Discoverme.css";
import { Link } from "react-router-dom";
import { useContextProvider } from "../context/userContext";

/* type props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  delay: number;
}; */
function Discoverme() {
  const { userData, autreData } = useContextProvider();
  /* const [typedTitle, setTypedTitle] = useState("");
  const [typedDesc, setTypedDesc] = useState(""); */
  const titre = `${userData?.prenom} ${userData?.nom} Développeur Web FullStack`;
  const desc = autreData[6]?.description;
  localStorage.removeItem("isAdmin");

  /* useEffect(() => {
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
  }, [userData]);*/

  return (
    <div className="discovermeconteneur">
      <div className="profilDm">
        <img src={userData?.img} width="10%" className="logoDm" alt="moi" />
        <h1 className="titleProfilDm">{titre}</h1>
        <p className="personalityProfilDm">{desc}</p>
      </div>
      <div className="conteneurdiscoverbutton">
        <Link to="/cv" className="discoverButton">
          Cursus
        </Link>
      </div>
    </div>
  );
}

export default Discoverme;
