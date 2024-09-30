"use strict";

import { Router } from "express";
import bodyParser from "body-parser";
// var bodyParser = require("body-parser");

const router = Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.get("/", async (req, res) => {
  console.log(req.params);
  res.json({});
});

router.post("/", async (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  res.json({ result: 0 });
});

export { router as AuthorController };
