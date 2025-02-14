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
      <h3>Si tu es ici, tu cherches des informations sur ma personne.</h3>
      <h3>Dans ce cas, je te conseille de me découvrir en cliquant sur</h3>
      <Link to="discover" className="buttonWelcome">
        Qui suis je ?
      </Link>
      <h3>Ou alors, consulte mon cursus directement en cliquant sur</h3>
      <Link to="cv" className="buttonWelcome">
        Mon Cursus
      </Link>
      <h3>
        Tu trouveras divers projets que j'ai partagé afin que tu puisses suivre
        ma progression en developpement en cliquant sur
      </h3>
      <Link to="myprojects" className="buttonWelcome">
        Mes Projets
      </Link>
      <h3>
        Maintenant, si tu souhaites me contacter, n'hésite pas un seul instant
        et clic sur
      </h3>
      <Link to="contact" className="buttonWelcome">
        Me Contacter
      </Link>
    </div>
  );
}

export default Welcome;
