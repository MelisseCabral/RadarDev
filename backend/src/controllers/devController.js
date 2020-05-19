const axios = require("axios");
const dev = require("../models/dev");
const parseStringAsArray = require('../utils/parseStringToArray');

// index, store, show, update, destroy

module.exports = {
    async index(request, response){
        const devs = await dev.find();

        return response.json(devs);
    },
    async store (request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        let userDev = await dev.findOne({github_username});

        if(!userDev){
            const apiResponse = await axios.get(
                `https://api.github.com/users/${github_username}`
              );
            
              console.log(apiResponse);
              const { name = login, avatar_url, bio } = apiResponse.data;
              const techsArray = parseStringAsArray(techs);
              const location = {
                type: 'Point',
                coordinates: [latitude, longitude]
              }
            
              userDev = await dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
              });
      
        }

       
        return response.json(userDev);
    }
}