const express = require("express");
const router = express.Router();
const db = require("./data/dbConfig.js");
const bcrypt = require("bcrypt");

router.use(express.json());

router.get("/users", (req, res) => {
  db("auth").then(users => {
    res.json(users);
  });
});

module.exports = router;
