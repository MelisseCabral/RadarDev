const axios = require("axios");
const dev = require("../models/dev");
const parseStringAsArray = require('../utils/parseStringToArray');

// index, store, show, update, destroy

module.exports = {
    async index(request, response){
       // devs num raio de 10km

       const { latitude, longitude, techs } = request.query;
       const devs = await dev.find({
           techs: {
               $in: techsArray
           },
           location :{
               $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [longitude, latitude]
                },
                $maxDistance: 10000,
               }
           }
       })

        const techsArray = parseStringAsArray(techs)
       //filtrar por tech

       return response.json({devs : []})
    }
}