const express = require("express");
const db = require("../data/dbConfig");

const router = express.Router();

router.post("/", (req, res) => {
  db("actions")
    .insert(req.body)
    .then(actions => {
      return res.status(201).json(actions);
    })
    .catch(err => {
      return res.status(400).json({ error: "Action could not be created" });
    });
});

router.get("/", (req, res) => {
  db("actions")
    .then(actions => {
      return res.status(200).json(actions);
    })
    .catch(err => {
      return res.status(404).json({ error: "Actions could not be found." });
    });
});

module.exports = router;
