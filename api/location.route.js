
const express = require('express');
const businessRoutes = express.Router();
const mongoose = require('mongoose');
// Require Business model in our routes module
let Business = require('./location.modal');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  console.log('In Location')
  console.log(req.body)
  let business = new Business(req.body);
   console.log(business)
  business.save()
    .then(business => {
      res.status(200).json({'business': 'signup in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
  // console.log('From index') 
  Business.find({}, function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

//Defined get data for user login
businessRoutes.route('/login').post(function(req, res){
  console.log('from login')
  //let business = new Business(req.body);
  let business = req.body;
  //let objret=(req.body);
  console.log(business)
  
    Business.findOne(business,function(err,bb){
      if(err){
        console.log('form login err',err);
        //res.json('user not found')
      }
      else
      {
        res.json(bb);
      }
    })
});

//Defined get data for user login


// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
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

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;