require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const applyAllRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());

const server_port = process.env.SERVER_PORT || 3005;

applyAllRoutes(app);

app.listen(server_port || 3005, (err) => {
  if (!err) {
    console.log("Server started on port: " + server_port);

    mongoose.connect(process.env.CONNECTION_STRING, (err) => {
      if (!err) {
        console.log("connected to mongodb");
      } else {
        console.log(err);
      }
    });
  } else {
    console.log(err);
  }
});
