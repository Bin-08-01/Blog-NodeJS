const express = require("express");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 1008;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static("public"));

const handlebars = exphbs.create({ extname: ".hbs" });
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

//route
const route = require("./server/routers/app");
route;

app.listen(port, () =>
    console.log("Server is running on http://localhost:" + port)
);