import type { RequestHandler } from "express";
import projetsRepository from "../repository/projetsRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const projets = await projetsRepository.readAll();

    // Respond with the items in JSON format
    res.json(projets);
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
    const certif = await projetsRepository.read(certId);

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
    const projId = Number(req.params.id);
    const updatedProj = {
      id: projId,
      user_id: req.body.user_id,
      nom: req.body.nom,
      img: req.body.img,
      info: req.body.info,
      url: req.body.url,
    };

    const newProj = await projetsRepository.edit(projId, updatedProj);

    if (newProj == null) {
      console.info("Erreur envoi données newCERT vers front", newProj);
      res.sendStatus(404);
    } else {
      res.json(newProj);
    }
  } catch (err) {
    next(err);
  }
};

// REMOVE
const remove: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const insertId = await projetsRepository.delete(id);
    console.info("Suppression validée");
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// ADD
const add: RequestHandler = async (req, res, next) => {
  try {
    const newProj = {
      user_id: req.body.user_id,
      nom: req.body.nom,
      img: req.body.img,
      info: req.body.info,
      url: req.body.url,
    };

    // Vérification des champs
    if (
      !newProj.user_id ||
      !newProj.nom ||
      !newProj.img ||
      !newProj.info ||
      !newProj.url
    ) {
      console.error("Erreur : Certains champs ne sont pas remplis");
      res.sendStatus(400);
      return;
    }

    // Vérification si le diplôme existe déjà dans la base de données
    const bddCheck = await projetsRepository.find(newProj.nom);

    if (!bddCheck) {
      const insertProj = await projetsRepository.create(newProj);
      console.info("Certificat ajouté à la base de données", insertProj);
      res.status(201).json({ insertProj });
    } else {
      console.error("Erreur : Ce diplôme existe déjà dans la base de données");
      res.sendStatus(409);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, update, remove, add };
