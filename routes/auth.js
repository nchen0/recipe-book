const express = require("express");
const router = express.Router();
const db = require("../data/dbConfig.js");
const bcrypt = require("bcrypt");
const { generateToken, validateUser } = require("../helpers/helper-functions");

router.use(express.json());

router.get("/users", (req, res) => {
  db("users")
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/register", (req, res) => {
  const validatedUser = validateUser(req);
  if (validatedUser.error) {
    return res.status(400).send(validatedUser.error.details[0].message);
  }

  const newUser = req.body;
  const hash = bcrypt.hashSync(newUser.password, 14);
  newUser.password = hash;

  db("users")
    .insert(newUser)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  const validatedUser = validateUser(req);
  if (validatedUser.error) {
    return res.status(400).send(validatedUser.error.details[0].message);
  }

  const credentials = req.body;
  db("users")
    .where({ username: credentials.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(credentials.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json(token);
      }
      res.status(400).send("Invalid Login Credentials");
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
