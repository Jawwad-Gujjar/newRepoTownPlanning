const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let contactlist = new Schema({
  payment_Id: {
    type: String
  },
  payment_Name: {
    type: String
  }
}
,{ strict: false }
,{
    collection: 'payment'
});

module.exports = mongoose.model('payment', contactlist);