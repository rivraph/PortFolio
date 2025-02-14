import type { RequestHandler } from "express";
import autreRepository from "./autreRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const autre = await autreRepository.readAll();

    // Respond with the items in JSON format
    res.json(autre);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// READ
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific certid based on the provided ID
    const id = Number(req.params.id);
    const autres = await autreRepository.read(id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (autres == null) {
      res.sendStatus(404);
    } else {
      res.json(autres);
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
    const updatedAutre = {
      id: id,
      user_id: req.body.user_id,
      intitule: req.body.intitule,
      description: req.body.description,
    };

    const newAutre = await autreRepository.edit(id, updatedAutre);

    if (newAutre == null) {
      console.info("Erreur envoi données newCERT vers front", newAutre);
      res.sendStatus(404);
    } else {
      res.json(newAutre);
    }
  } catch (err) {
    next(err);
  }
};

// REMOVE
const remove: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const insertId = await autreRepository.delete(id);
    console.info("Suppression validée");
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// ADD
const add: RequestHandler = async (req, res, next) => {
  try {
    const newAutre = {
      user_id: req.body.user_id,
      intitule: req.body.intitule,
      description: req.body.description,
    };

    // Vérification des champs
    if (!newAutre.user_id || !newAutre.intitule || !newAutre.description) {
      console.error("Erreur : Certains champs ne sont pas remplis");
      res.sendStatus(400);
      return;
    }

    // Vérification si le diplôme existe déjà dans la base de données
    const bddCheck = await autreRepository.find(newAutre.intitule);

    if (!bddCheck) {
      const insertAutre = await autreRepository.create(newAutre);
      console.info("Certificat ajouté à la base de données", insertAutre);
      res.status(201).json({ insertAutre });
    } else {
      console.error(
        "Erreur : Cet intitulé existe déjà dans la base de données",
      );
      res.sendStatus(409);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, update, remove, add };
