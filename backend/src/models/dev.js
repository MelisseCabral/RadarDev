const mongosse = require('mongoose');
const PointSchemma = require('./utils/PointSchema');

const devSchemma = new mongosse.Schema({
    name: Boolean,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchemma,
        index: '2dsphere'
    }
});

module.exports = mongosse.model('Dev', devSchemma)