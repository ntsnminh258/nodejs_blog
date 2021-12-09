const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const hbs = handlebars.create({ extname: ".hbs" });
const morgan = require("morgan");
const app = express();
const port = 3000;

const route = require("./routes");

const db = require("./config/db");
// Connect to db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

// Middleware
// Xừ lý gừi từ html
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Xừ lý gừi từ JS
app.use(express.json());

// HTTP Logger
// app.use(morgan("combined"));
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
