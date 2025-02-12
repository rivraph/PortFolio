import "../styles/Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="principalwelcome">
      <h2>Bienvenue sur mon Portfolio</h2>
      <h3>
        Voici un aperçu complet de mon cursus, mes compétences, mes expériences
        et mes projets.
      </h3>
      <Link to="discover" className="buttonWelcome">
        Qui suis je ?
      </Link>
      <Link to="cv" className="buttonWelcome">
        Mon Cursus
      </Link>
      <Link to="myprojects" className="buttonWelcome">
        Mes Projets
      </Link>
      <Link to="contact" className="buttonWelcome">
        Me Contacter
      </Link>
    </div>
  );
}

export default Welcome;
