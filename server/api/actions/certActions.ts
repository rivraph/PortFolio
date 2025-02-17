import type { RequestHandler } from "express";
import certRepository from "../repository/certRepository";

// BROWSE
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all certificats
    const certificat = await certRepository.readAll();

    // Respond with the items in JSON format
    res.json(certificat);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// READ
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific certid based on the provided ID
    const certId = Number(req.params.id);
    const certif = await certRepository.read(certId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (certif == null) {
      res.sendStatus(404);
    } else {
      res.json(certif);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// UPDATE
const update: RequestHandler = async (req, res, next) => {
  try {
    const certId = Number(req.params.id);
    const updatedCert = {
      id: certId,
      user_id: req.body.user_id,
      diplome: req.body.diplome,
      annee_obtention: req.body.annee_obtention,
      description: req.body.description,
      localisation: req.body.localisation,
    };

    const newCert = await certRepository.edit(certId, updatedCert);

    if (newCert == null) {
      console.info("Erreur envoi données newCERT vers front", newCert);
      res.sendStatus(404);
    } else {
      res.json(newCert);
    }
  } catch (err) {
    next(err);
  }
};

// REMOVE
const remove: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const insertId = await certRepository.delete(id);
    console.info("Suppression validée");
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// ADD
const add: RequestHandler = async (req, res, next) => {
  try {
    const newCert = {
      user_id: req.body.user_id,
      diplome: req.body.diplome,
      annee_obtention: req.body.annee_obtention,
      description: req.body.description,
      localisation: req.body.localisation,
    };

    // Vérification des champs
    if (
      !newCert.user_id ||
      !newCert.diplome ||
      !newCert.annee_obtention ||
      !newCert.description ||
      !newCert.localisation
    ) {
      console.error("Erreur : Certains champs ne sont pas remplis");
      res.sendStatus(400);
      return;
    }

    // Vérification si le diplôme existe déjà dans la base de données
    const bddCheck = await certRepository.find(newCert.diplome);

    if (!bddCheck) {
      const insertCert = await certRepository.create(newCert);
      console.info("Certificat ajouté à la base de données", insertCert);
      res.status(201).json({ insertCert });
    } else {
      console.error("Erreur : Ce diplôme existe déjà dans la base de données");
      res.sendStatus(409);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, update, remove, add };
