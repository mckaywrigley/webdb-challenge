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

module.exports = router;
