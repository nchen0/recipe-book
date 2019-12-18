const express = require("express");
const router = express.Router();
const db = require("../data/dbConfig.js");

router.use(express.json());

router.get("/", (req, res) => {
  db("recipes")
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/add", (req, res) => {
  db("recipes")
    .insert(req.body)
    .then(response => {
      res.status(201).json(req.body);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
