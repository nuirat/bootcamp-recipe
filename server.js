const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
console.log(path.join(__dirname, "node_modules"));
let players = [];
let axios = require("axios");
let recipes = [];
const getRecpe = function (recipeName) {
  axios
    .get(`https://recipes-goodness.herokuapp.com/recipes/${recipeName}`)
    .then((result) => {
      recipes = result.data.results.map((recipe) => {
        return {
          ingredients: recipe.ingredients,
          title: recipe.title,
          thumbnail: recipe.thumbnail,
          href: recipe.href,
        };
      });
    });
};

const port = 8080;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
app.get("/sanity", function (request, response) {
  response.send("ok");
});
app.get("/recipes/:ingredient", function (request, response) {
  getRecpe(request.params.ingredient);
});
