const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./src/routes");

const PORT = 3333;
const HOST = "0.0.0.0";

mongoose.connect(
  "mongodb://radarDev:admin@learning-shard-00-00-ehibe.mongodb.net:27017,learning-shard-00-01-ehibe.mongodb.net:27017,learning-shard-00-02-ehibe.mongodb.net:27017/test?ssl=true&replicaSet=Learning-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, HOST);
