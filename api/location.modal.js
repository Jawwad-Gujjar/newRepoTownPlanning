const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Location
let Location = new Schema({
location_Id: {
    type: String
  },
  location_Name: {
    type: String
  },
},{
    collection: 'location'
});

module.exports = mongoose.model('location', Location);