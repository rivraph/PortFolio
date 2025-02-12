import type { Request, Response } from "express";
import fetch from "node-fetch";

export const sendEmail = async (req: Request, res: Response): Promise<void> => {
  const { nom, prenom, demandeur, email, telephone, message } = req.body; // Récupération des données du formulaire envoyé via le frontend

  const serviceID = "service_opfoncm"; // Ton Service ID de EmailJS
  const templateID = "template_Portfolio"; // Ton Template ID de EmailJS
  const userID = "srlIDlgQQ8e2f50IL"; // Ton User ID de EmailJS

  try {
    // Envoi des données à EmailJS via leur API REST
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Envoi des données en JSON
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: userID,
          template_params: {
            nom,
            prenom,
            demandeur,
            email,
            telephone,
            message,
          },
        }),
      },
    );

    const data = await response.text();

    if (!response.ok) {
      console.error("Erreur dans la réponse de l'API EmailJS : ", data);
      res.status(500).send("Erreur lors de l'envoi du message");
    }

    // Si la réponse est OK, on envoie un message de succès
    console.info("Email envoyé avec succès", data);
    res.status(200).send("Email envoyé avec succès "); // Ou juste un message de succès si nécessaire
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email", error);
    res.status(500).send("Erreur lors de l'envoi de l'email");
  }
};
