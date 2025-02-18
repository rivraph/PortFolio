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
  const titre = `${userData[0].prenom} ${userData[0].nom} Développeur Web FullStack`;
  const desc = autreData[6]?.description;
  localStorage.removeItem("isAdmin");

  return (
    <div className="discovermeconteneur">
      <div className="profilDm">
        <img src={userData[0].img} width="10%" className="logoDm" alt="moi" />
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
