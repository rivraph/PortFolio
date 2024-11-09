function Contact() {
	return (
		<>
			<h2> ( Page en construction )</h2>
			<form>
				<label>Name</label> <br></br>
				<input
					type="text"
					id="name"
					name="name"
					required
					placeholder="Entrez votre Prénom"
				/>
				<br></br>
				<label>LastName</label> <br></br>
				<input
					type="text"
					id="name"
					name="name"
					required
					placeholder="Entrez votre nom"
				/>
				<br></br>
				<label>Entreprise</label> <br></br>
				<input
					type="text"
					id="name"
					name="name"
					required
					placeholder="Entrez votre Entreprise"
				/>
				<br></br>
				<label>Email</label>
				<br></br>
				<input
					type="email"
					id="email"
					name="email"
					required
					placeholder="Entrez votre email"
				/>
				<br></br>
				<label> Message </label>
				<br></br>
				<textarea
					id="message"
					name="message"
					required
					maxLength={500}
					placeholder="Entrez votre texte"
				>
					{" "}
				</textarea>
				<br></br>
				<input className="cardButton" type="submit" />
			</form>
		</>
	);
}

export default Contact;
