"use strict";

import express from "express";
import { AuthorController } from "./controllers/index.js";

export const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/author", AuthorController);
app.use((req, res) => res.status(404).json({ message: "No route found" }));

export const server = app.listen(port, () => {
  console.log(`Express JS example started at ${port}`);
});
