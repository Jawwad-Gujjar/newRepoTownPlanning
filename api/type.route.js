const express = require('express');
const clsRout = express.Router();

let classes = require('./type.modal')
clsRout.route('/addcont').post(function (req, res) {
  let CLS = new classes(req.body);
  console.log(CLS)
  CLS.save()
    .then(jk => {
      res.status(200).json({'Contact': 'Contact added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
clsRout.route('/').get(function (req, res) {
  console.log('From index mmmmmrs') 
  classes.find({}, function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});
clsRout.route('/delete/:id').get(function (req, res) {
  classes.findByIdAndRemove({_id: req.params.id}, function(err, business){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

clsRout.route('/edittype/:id').get(function (req, res) {
  console.log('Read in edittypeid')
  let id = req.params.id;
  classes.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
clsRout.route('/update/:id').post(function (req, res) {
    classes.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
        business.location_id = req.body.location_id
        business.location_Name = req.body.location_Name

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


module.exports = clsRout;
