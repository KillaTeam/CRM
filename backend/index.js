const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;

app.use(cors());
mongoose.connect("mongodb:////root:<password>@clusterkill.pqxfdjt.mongodb.net/test", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});