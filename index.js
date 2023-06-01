const express = require("express");
// Initialize App
const app = express();
app.use(express.json());

// Env Variable
require("dotenv").config();

// Require mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Yes Working well"))
  .catch(() => {
    console.log("Not Connected Database!");
  });

// Require Books routes
const booksRoute = require("./routes/BookRoutes");
app.use("/books", booksRoute);

//* Port listening by env
app.listen(process.env.APP_PORT);
