const express = require('express');
const clsRout = express.Router();
let  mproj = require('./project.modal')

clsRout.route('/addproject').post(function (req, res) {
  console.log('6',req.body)
  let proj  = new mproj(req.body);
  //let proj =req.body
  proj.details=req.body["details"]
  console.log(proj.details)
  proj.markModified("details")
  console.log('11' ,proj)
  proj.save()
    .then(jk => {
      res.status(200).json({'Contact': 'Contact added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

clsRout.route('/upproject').post(function (req, res) {
  //console.log('6',req.body)
  var oId = req.body["_id"]
  mproj.findById(oId, function (err, proj){
    if(!proj)
    {
      res.status(404).send("data is not found");
    }
     else
    {
      proj.details=req.body["details"] 
      proj.markModified("details")
      proj.save().then(proj => {
        res.json('Update complete');
      })
      .catch(err => {
        res.status(400).send("unable to update the database");
      })
    }
  })

});
clsRout.route('/').get(function (req, res) {
  console.log('From index') 
  mproj.find({}, function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});
clsRout.route('/delete/:id').get(function (req, res) {
  mproj.findByIdAndRemove({_id: req.params.id}, function(err, business){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

module.exports = clsRout;
