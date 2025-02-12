function Contact() {
  return (
    <>
      <h2> ( Page en construction )</h2>
      <form>
        <div className="divlibele">
          <label htmlFor="Prénom">Prénom</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Entrez votre Prénom"
          />
        </div>
        <div className="divlibele">
          <label htmlFor="Nom">Nom</label>
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
        <div className="divmessage">
          <label htmlFor="Message"> Message </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={500}
            placeholder="Entrez votre message ici"
          >
            {" "}
          </textarea>
        </div>
        <input className="cardButton" type="submit" />
      </form>
    </>
  );
}

export default Contact;
