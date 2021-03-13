const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let contactlist = new Schema({
    installment_Id: {
    type: String
  },
  installment_Name: {
    type: String
  }
}
,{ strict: false }
,{
    collection: 'auidlist'
});

module.exports = mongoose.model('Installment', contactlist);