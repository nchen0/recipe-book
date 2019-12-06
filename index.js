const express = require("express");
const cors = require("cors");
const server = express();
require("dotenv").config();
const PORT = process.env.PORT;

server.use(cors());
// Routes
const authRoute = require("./routes/auth");
const recipeRoute = require("./routes/recipes");
server.use("/auth", authRoute);
server.use("/recipes", recipeRoute);

// Error Handling
server.use("*", (req, res) => {
  res.status(404).send("You've stumbled upon an invalid page.");
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
