const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

const loginRouter = require("./controllers/loginRouter.js");

const url = process.env.MONGODB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => console.log("error", error));

app.use(cors());
app.use(express.json());

app.use("/login", loginRouter);

const PORT = 4000;

app.listen(PORT, () => console.log(`listening to ${PORT}`));
