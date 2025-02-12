import fs from "node:fs";
import path from "node:path";
import cors from "cors";
import express from "express";
import router from "./router";

const app = express();

if (process.env.CLIENT_URL != null) {
  app.use(
    cors({
      origin: [process.env.CLIENT_URL],
      methods: "GET, POST, PUT, DELETE",
      allowedHeaders: "Content-type",
    }),
  );
}

app.use(express.json());
app.use(router);

const publicFolderPath = path.join(__dirname, "../../server/public");

if (fs.existsSync(publicFolderPath)) {
  app.use(express.static(publicFolderPath));
}

const clientBuildPath = path.join(__dirname, "../../client/dist");

if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));

  app.get("*", (_, res) => {
    res.sendFile("index.html", { root: clientBuildPath });
  });
}

import type { ErrorRequestHandler } from "express";
const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  // Log the error to the console for debugging purposes
  console.error(err);
  console.error("on req:", req.method, req.path);

  // Pass the error to the next middleware in the stack
  next(err);
};

// Mount the logErrors middleware globally
app.use(logErrors);

export default app;
