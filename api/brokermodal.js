const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let contactlist = new Schema({
    broker_Id: {
    type: String
  },
  activation_Date: {
    type: String
  },
  broker_Name: {
      type : String
  },
  cnIc:{
      type : String
  },
  address :{
   type :String
  },
 city :{
    type : String
},
country : {
    type : String
},
teleNo :{
    type : String
},
cellNo : {
    type : String
},
}
,{ strict: false }
,{
    collection: 'broker'
});

module.exports = mongoose.model('broker', contactlist);