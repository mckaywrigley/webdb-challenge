const express = require("express");
const db = require("../data/dbConfig");

const router = express.Router();

router.post("/", (req, res) => {
  db("projects")
    .insert(req.body)
    .then(project => {
      return res.status(201).json(project);
    })
    .catch(err => {
      return res.status(400).json({ error: "Project could not be created" });
    });
});

module.exports = router;
