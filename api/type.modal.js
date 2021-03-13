const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let contactlist = new Schema({
  type_Id: {
    type: String
  },
  type_Name: {
    type: String
  }
}
,{ strict: false }
,{
    collection: 'auidlist'
});

module.exports = mongoose.model('locationtype', contactlist);