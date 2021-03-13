const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let contactlist = new Schema({
allotment_No: {
    type: String
  },
  allotment_Date: {
    type: String
  },
  customer_Address : {
      type : String
  },
  contact_No :{
      type : String
  },
  commission :{
    type : String
  },
  remarks:{
      type : String
  },
  customerName: {
      type : String
  },
  customerKey : {
      type :String
  },
  brokerName : {
     type : String
  },
  brokerKey : {
      type : String
  },
  projectName:{
      type : String
  },
  projectKey : {
   type : String
  },
  locationName : {
      type : String
  },
  locationKey : {
      type : String
  },
loctypeName : {
     type : String
},
loctypeKey : {
    type : String
},
areaName : {
    type : String
},
areaKey : {
 type: String
},
planName : {
type : String
},
planKey : {
type : String
},
totalCost:{
    type : String
},
rate :{
    type : String
},
bookingAmount : {
    type : String
},
remindAmount:{
    type : String
},
no_installment:{
    type : String
},
installmentname:{
    type : String
},
sno : {
    type : String
},
status: {
    type : String
},

}
,{ strict: false }
,{
    collection: 'allotment'
});

module.exports = mongoose.model('allotment', contactlist);