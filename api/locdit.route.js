const express = require('express');
const clsRout = express.Router();

let classes = require('./locditmodal')

clsRout.route('/addpdetail').post(function (req, res) {

  let CLS = new classes(req.body);
  CLS.numOfunit=req.body["numOfunit"]
  CLS.markModified("numOfunit")
  console.log(CLS)
  CLS.save()
    .then(jk => {
      res.status(200).json({'Contact': 'Contact added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

clsRout.route('/updateNoofunitformAlot').post(function (req, res) {

  var oId = req.body["_id"]  
  classes.findById(oId, function (err, projDetail){
    if(!proj)
    {
      res.status(404).send("data is not found");
    }
     else
    {
      projDetail.numOfunit=req.body["numOfunit"] 
      projDetail.markModified("numOfunit")
      projDetail.save().then(proj => {
        res.json('Update complete');
      })
      .catch(err => {
        res.status(400).send("unable to update the database");
      })
    }
  
  })

  // let CLS = new classes(req.body);
  // CLS.numOfunit=req.body["numOfunit"]
  // CLS.markModified("numOfunit")
  // console.log(CLS)
  // CLS.save()
  //   .then(jk => {
  //     res.status(200).json({'Contact': 'Contact added successfully'});
  //   })
  //   .catch(err => {
  //     res.status(400).send("unable to save to database");
  //   });
});

clsRout.route('/').get(function (req, res) {
  //console.log('From payment') 
  classes.find({}, function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined delete | remove | destroy route
clsRout.route('/delete/:id').get(function (req, res) {
  classes.findByIdAndRemove({_id: req.params.id}, function(err, business){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


module.exports = clsRout;
