import express from "express";

const router = express.Router();
const app = express();
/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import userActions from "./modules/user/userActions";

router.get("/api/user", userActions.browse);
router.get("/api/user/:id", userActions.read);
router.post("/api/user", userActions.add);
/* router.delete("/api/user/:id", userActions.remove);
router.put("/api/user/:id", userActions.update); */

/* ************************************************************************* */

import { sendEmail } from "./modules/MailController/mailController";

router.post("/send-email", sendEmail);

export default router;
