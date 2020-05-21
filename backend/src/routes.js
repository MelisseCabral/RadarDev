const { Router } = require("express");
const axios = require("axios");
const devController = require('./controllers/devController');
const searchController = require('./controllers/searchController');

const routes = Router();

routes.post("/devs", devController.store);
  
module.exports = routes;
