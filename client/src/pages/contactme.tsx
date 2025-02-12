import "../styles/ContactMe.css";
import datas from "../datas/datas.json";

function Contact() {
  const dat = datas.personality;

  return (
    <div className="contactcontener">
      <form className="formulaire">
        <div className="divlibele">
          <label htmlFor="Nom">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Entrez votre Prénom"
          />
        </div>
        <div className="divlibele">
          <label htmlFor="Prénom">Prénom</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Entrez votre nom"
          />
        </div>
        <div className="divlibele">
          <label htmlFor="Demandeur">Demandeur</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Entrez le nom de votre société"
          />
        </div>
        <div className="divlibele">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Entrez votre email"
          />
        </div>
        <div className="divlibele">
          <label htmlFor="tel">Téléphone</label>
          <input
            type="texte"
            id="telephone"
            name="telephone"
            required
            placeholder="Entrez votre email"
          />
        </div>
        <div className="divmessage">
          <label htmlFor="Message"> Message </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={500}
            rows={10}
            cols={100}
            placeholder="Entrez votre message ici"
          >
            {" "}
          </textarea>
        </div>
        <input className="cardButton" type="submit" />
      </form>

      <div className="contactfooter">
        <span className="spancontact">
          <a href={dat.email}>Email 📨</a> |
          <a href={dat.github} target="_blank" rel="noreferrer">
            Github
          </a>{" "}
          |
          <a href={dat.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>{" "}
          |
          <a href={dat.facebook} target="_blank" rel="noreferrer">
            facebook
          </a>{" "}
          |
        </span>
      </div>
    </div>
  );
}

export default Contact;
