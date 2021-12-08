const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const hbs = handlebars.create({ extname: ".hbs" });
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
