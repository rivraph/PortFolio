import { useContextProvider } from "../context/userContext";
import "../styles/ContactMe.css";
import { useState } from "react";

function Contact() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [demandeur, setDemandeur] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const { userData } = useContextProvider();

  localStorage.removeItem("isAdmin");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      nom,
      prenom,
      demandeur,
      email,
      telephone,
      message,
    };

    try {
      const response = await fetch("http://localhost:3310/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.text();
        alert("Message envoyé avec succès !");
        console.info(result);
        // Tu peux réinitialiser le formulaire ici si nécessaire
        setNom("");
        setPrenom("");
        setDemandeur("");
        setEmail("");
        setTelephone("");
        setMessage("");
      } else {
        alert("Erreur lors de l'envoi du message. Essayez encore.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue. Veuilllez réessayez ultérieurement");
    }
  };

  return (
    <div className="contactcontener">
      <form className="formulaire" onSubmit={handleSubmit}>
        <div className="divlibele">
          <label htmlFor="Nom"> </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            placeholder="Nom"
          />
        </div>
        <div className="divlibele">
          <label htmlFor="Prénom"> </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
            placeholder="Prénom"
          />
        </div>
        <div className="divlibele">
          <label htmlFor="Demandeur"> </label>
          <input
            type="text"
            id="demandeur"
            name="demandeur"
            value={demandeur}
            onChange={(e) => setDemandeur(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
            placeholder="numéro de téléphone"
          />
        </div>
        <div className="divmessage">
          <label htmlFor="Message"> </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
          <a href={userData?.github} target="_blank" rel="noreferrer">
            Github
          </a>{" "}
          |
          <a href={userData?.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>{" "}
          |
          <a href={userData?.facebook} target="_blank" rel="noreferrer">
            facebook
          </a>{" "}
          |
        </span>
      </div>
    </div>
  );
}

export default Contact;
