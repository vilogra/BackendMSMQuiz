const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const questionsRoutes = require("./api/routes/questions");
const userRoutes = require("./api/routes/users");

mongoose.connect(
  `mongodb+srv://msmstudio:${process.env.DATABASE_PW}@cluster0.h6b4z.mongodb.net/msmstudio?retryWrites=true&w=majority`
);

app.use(morgan("dev"));

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT",
      "POST",
      "PATCH",
      "DELETE"
    );
    return res.status(200).json({});
  }

  next();
});

app.use(bodyParser.json());

app.use("/api", questionsRoutes);
app.use("/api", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
