const express = require("express");

const app = express();

app.use(express.json()); // parse requests of content-type - application/json

app.use(myMiddleware); // use middleware for all routes

function myMiddleware(req, res, next) {
  console.log("Hello from middleware");
  next(); // call next middleware
};

// routes 
require("./routes/idea.routes.js")(app);


app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
