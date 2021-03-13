const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let contactlist = new Schema({
  project_Name: {
    type: String
  },
  project_Type: {
    type: String
  },
  assign_To: {
    type: String
  },
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
  },
  details: Schema.Types.Mixed,
},
{ strict: false }
,{
    collection: 'projects'
});

module.exports = mongoose.model('projects', contactlist);