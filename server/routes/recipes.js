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
      console.log("response: ", response);
      res.status(201).json(req.body);
    })
    .catch(err => {
      console.log("err: ", err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  console.log("req.body is: ", req.body);
  db("recipes")
    .where({ id: req.params.id })
    .del()
    .then(response => {
      console.log("responsedelete is: ", response);
    })
    .catch(err => {
      console.log("err is: ", err);
      res.status(400).json(err);
    });
});

module.exports = router;
