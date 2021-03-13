const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let contactlist = new Schema({
    plan_title: {
    type: String
  },
  booking: {
    type: String
  },
  installment_P:{
      type: String
  },
  no_Installment:{
      type : String
  },
  installmentname:{
      type : String
  },
  installmentKey:{
      type: String
  },

  
}
,{ strict: false }
,{
    collection: 'policy'
});

module.exports = mongoose.model('policy', contactlist);