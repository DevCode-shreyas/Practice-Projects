const ideaController = require("../controllers/idea.controller.js");

// define route for the calls like
// http://localhost:8080/ideaApp/v1/ideas

module.exports = (app) => {
  app.get("/ideaApp/v1/ideas", ideaController.fetchAllIdeas);

  app.post("/ideaApp/v1/ideas", ideaController.createIdea);

  app.put("/ideaApp/v1/ideas/:id", ideaController.updateIdea);

  app.delete("/ideaApp/v1/ideas/:id", ideaController.deleteIdea);
};
