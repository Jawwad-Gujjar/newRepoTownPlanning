const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let contactlist = new Schema({
    customer_Id: {
    type: String
  },
  membership_Date: {
    type: String
  },
  customer_Name : {
      type : String
  },
  Cnic:{
      type : String
  },
  present_Address:{
      type : String
},
City :{
    type : String
},
Country : {
    type : String
},
parmanent_Address :{
    type : String
},
pCity :{
    type : String
},
pCountry :{
    type : String
},
tele_No :{
    type : String
},
cell_No : {
    type : String
},
}
,{ strict: false }
,{
    collection: 'customer'
});

module.exports = mongoose.model('customer', contactlist);