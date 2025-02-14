import { useContextProvider } from "../context/userContext";
import "../styles/Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  const { userData } = useContextProvider();
  if (!userData) return <div>Loading...</div>;
  localStorage.setItem("isAdmin", "");

  return (
    <div className="principalwelcome">
      <h2>Bienvenue sur mon Portfolio, je suis {userData.prenom} !</h2>
      <h2>
        Si tu cherches à me connaitre, c'est bien la bonne page.Il va falloir
        prendre un peu de ton temps pour me découvrir
      </h2>
      <h3>Ici, tu apprends plus sur moi </h3>
      <Link to="discover" className="linkWelcome">
        Qui suis je ?
      </Link>
      <h3>Mes diplomes et expériences pros, c'est ici !</h3>
      <Link to="cv" className="linkWelcome">
        Mon Cursus
      </Link>
      <h3>Les projets Dev Web ? c'est ici et je l'alimente régulièrement</h3>
      <Link to="myprojects" className="linkWelcome">
        Mes Projets
      </Link>
      <h3>
        Maintenant que tu sais tout sur moi, contactes moi ! à toi de jouer
      </h3>
      <Link to="contact" className="linkWelcome">
        Me Contacter
      </Link>
    </div>
  );
}

export default Welcome;
