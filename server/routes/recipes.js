const express = require("express");
const router = express.Router();
const db = require("../data/dbConfig.js");
const { validateRecipe } = require("../helpers/helper-functions");

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

router.get("/:id", (req, res) => {
  db("recipes")
    .where({ id: req.params.id })
    .then(recipe => {
      return res.json(recipe);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/add", (req, res) => {
  const validatedRecipe = validateRecipe(req);
  if (validatedRecipe.error) {
    return res.status(400).send(validatedUser.error.details[0].message);
  }
  db("recipes")
    .insert(req.body)
    .then(response => {
      res.status(201).json(req.body);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  db("recipes")
    .where({ id: req.params.id })
    .del()
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/edit/:id", (req, res) => {
  const validatedRecipe = validateRecipe(req);
  if (validatedRecipe.error) {
    return res.status(400).send(validatedUser.error.details[0].message);
  }
  db("recipes")
    .where({ id: req.params.id })
    .update(req.body)
    .then(response => {
      console.log("edited");
      return res.status(200).json(response);
    })
    .catch(err => {
      console.log("err is: ", err);
      res.status(400).json(err);
    });
});

module.exports = router;
