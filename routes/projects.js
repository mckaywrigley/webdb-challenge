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

router.get("/:id/actions", (req, res) => {
  const { id } = req.params;
  db("actions")
    .where({ project_id: id })
    .then(actions => {
      return res.status(200).json(actions);
    })
    .catch(err => {
      return res
        .status(404)
        .json({ error: "Actions could not be found for that project." });
    });
});

module.exports = router;
