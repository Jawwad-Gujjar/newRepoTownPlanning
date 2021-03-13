const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Location
let Location = new Schema({
    projectName: {
    type: String
  },
  projectKey: {
    type: String
  },
  locationName:{
      type :String
  },
locationKey:{
    type: String
},
loctypeName:{
    type:String
},
loctypeKey:{
    type : String
},
areaName :{
    type : String
},
areaKey :{
    type: String
},
serial_From : {
    type : String
},
serial_To : {
    type : String
},
numOfunit: Schema.Types.Mixed,
},
{ strict: false }
,{
    collection: 'projectDetail'
});

module.exports = mongoose.model('projectDetail', Location);