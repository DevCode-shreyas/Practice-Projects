const ideas = require("../models/idea.model.js");

// search all ideas
exports.fetchAllIdeas = (req, res) => {
  res.status(200).send(ideas);
};

let idCount = 1;

// create a new idea
exports.createIdea = (req, res) => {
  const idea = req.body;
  idea.id = ++idCount;
  ideas[idCount] = idea;
  res.status(201).send(ideas[idCount]);
};

// update an idea
exports.updateIdea = (req, res) => {
  const ideaId = req.params.id;
  if (ideas[ideaId]) {
    ideas[ideaId] = req.body;
    res.status(200).send(ideas[ideaId]);
  } else {
    res.status(404).send({ message: `Idea with id ${ideaId} not found` });
  }
};

// delete an idea

exports.deleteIdea = (req, res) => {
  if (ideas[req.params.id]) {
    delete ideas[req.params.id];
    res.status(200).send({ message: `Idea with id ${req.params.id} deleted` });
  } else {
    res
      .status(404)
      .send({ message: `Idea with id ${req.params.id} not found` });
  }
};
