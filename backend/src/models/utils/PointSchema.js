const mongosse = require('mongoose');

const PointSchemma = new mongosse.Schema({
  type: {
      type: String,
      enum: ['Point'],
      required: true
  },
  coordinates: {
      type: [Number],
      required: true
  }
});

module.exports = mongosse.model('', PointSchemma)