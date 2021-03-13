const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let prjList = new Schema({
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
        type: String
      },
      end_date: {
        type: String
      },
      details: {
        type: Object
      },
}
,{
    collection:"prjList"
})
module.exports = mongoose.model('prjList', prjList);