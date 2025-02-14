import type { RequestHandler } from "express";
import expRepository from "./expRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const exps = await expRepository.readAll();

    // Respond with the items in JSON format
    res.json(exps);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const expsId = Number(req.params.id);
    const exps = await expRepository.read(expsId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (exps == null) {
      res.sendStatus(404);
    } else {
      res.json(exps);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// UPDATE
const update: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const updatedCert = {
      id: id,
      user_id: req.body.user_id,
      entreprise: req.body.entreprise,
      lieu: req.body.lieu,
      date_debut: req.body.date_debut,
      date_fin: req.body.date_fin,
      poste: req.body.poste,
      description: req.body.description,
    };

    const newExp = await expRepository.edit(id, updatedCert);

    if (newExp == null) {
      console.info("Erreur envoi données newCERT vers front", newExp);
      res.sendStatus(404);
    } else {
      res.json(newExp);
    }
  } catch (err) {
    next(err);
  }
};

// REMOVE
const remove: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const insertId = await expRepository.delete(id);
    console.info("Suppression validée");
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// ADD
const add: RequestHandler = async (req, res, next) => {
  try {
    const newExp = {
      user_id: req.body.user_id,
      entreprise: req.body.entreprise,
      lieu: req.body.lieu,
      date_debut: req.body.date_debut,
      date_fin: req.body.date_fin,
      poste: req.body.poste,
      description: req.body.description,
    };

    // Vérification des champs
    if (
      !newExp.user_id ||
      !newExp.entreprise ||
      !newExp.lieu ||
      !newExp.date_debut ||
      !newExp.date_fin ||
      !newExp.poste ||
      !newExp.description
    ) {
      console.error("Erreur : Certains champs ne sont pas remplis");
      res.sendStatus(400);
      return;
    }

    // Vérification si le diplôme existe déjà dans la base de données
    const bddCheck = await expRepository.find(newExp.date_debut);

    if (!bddCheck) {
      const insertExp = await expRepository.create(newExp);
      console.info("Certificat ajouté à la base de données", insertExp);
      res.status(201).json({ insertExp });
    } else {
      console.error("Erreur : Ce diplôme existe déjà dans la base de données");
      res.sendStatus(409);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, update, remove, add };
