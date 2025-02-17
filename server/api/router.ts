import express from "express";

const router = express.Router();
const app = express();
/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// TRAITEMENT DES DONNEES USER
import userActions from "./actions/userActions";

router.get("/api/user", userActions.browse);
router.get("/api/user/:id", userActions.read);
/* router.post("/api/user", userActions.add); */
/* router.delete("/api/user/:id", userActions.remove);
router.put("/api/user/:id", userActions.update); */

/* ************************************************************************* */
// TRAITEMENT DES DONNEES AUTRES
import autreActions from "./actions/autreActions";

router.get("/api/autres", autreActions.browse);
router.get("/api/autres/:id", autreActions.read);
router.put("/api/autres/:id", autreActions.update);
router.delete("/api/autres/:id", autreActions.remove);
router.post("/api/autres", autreActions.add);

/* ************************************************************************* */
// TRAITEMENT DES DONNEES CERTIFICAT
import certActions from "./actions/certActions";

router.get("/api/cert", certActions.browse);
router.get("/api/cert/:id", certActions.read);
router.put("/api/cert/:id", certActions.update);
router.delete("/api/cert/:id", certActions.remove);
router.post("/api/cert", certActions.add);

/* ************************************************************************* */
// TRAITEMENT DES DONNEES EXPERIENCES
import expActions from "./actions/expActions";

router.get("/api/exp", expActions.browse);
router.get("/api/exp/:id", expActions.read);
router.put("/api/exp/:id", expActions.update);
router.delete("/api/exp/:id", expActions.remove);
router.post("/api/exp", expActions.add);

/* ************************************************************************* */
// TRAITEMENT DES DONNEES PROJETS
import projActions from "./actions/projetsActions";

router.get("/api/projets", projActions.browse);
router.get("/api/projets/:id", projActions.read);
router.put("/api/projets/:id", projActions.update);
router.delete("/api/projets/:id", projActions.remove);
router.post("/api/projets", projActions.add);

/* ************************************************************************* */
// TRAITEMENT DES MESSAGES CONTACT
import { sendEmail } from "./actions/mailController";

router.post("/send-email", sendEmail);
/* ************************************************************************* */

export default router;
