const express = require("express");
const mongosse = require("mongoose");
const routes = require("./src/routes");

mongosse.connect(
  "mongodb://radarDev:admin@learning-shard-00-00-ehibe.mongodb.net:27017,learning-shard-00-01-ehibe.mongodb.net:27017,learning-shard-00-02-ehibe.mongodb.net:27017/test?ssl=true&replicaSet=Learning-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
