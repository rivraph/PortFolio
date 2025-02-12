import "../styles/ContactMe.css";
import datas from "../datas/datas.json";

function Contact() {
  const dat = datas.personality;

  return (
    <div className="contactcontener">
      <form className="formulaire">
        <div className="divlibele">
          <label htmlFor="Nom"> </label>
          <input type="text" id="name" name="name" required placeholder="Nom" />
        </div>
        <div className="divlibele">
          <label htmlFor="Prénom"> </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Prénom"
          />
        </div>
        <div className="divlibele">
          <label htmlFor="Demandeur"> </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Demandeur"
          />
        </div>
        <div className="divlibele">
          <label htmlFor="Email"> </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />
        </div>
        <div className="divlibele">
          <label htmlFor="tel"> </label>
          <input
            type="texte"
            id="telephone"
            name="telephone"
            required
            placeholder="numéro de téléphone"
          />
        </div>
        <div className="divmessage">
          <label htmlFor="Message"> </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Entrez votre message ici"
            maxLength={500}
            rows={10}
            cols={100}
          >
            {" "}
          </textarea>
        </div>
        <input className="cardButton" type="submit" />
      </form>

      <div className="contactfooter">
        <span className="spancontact">
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
