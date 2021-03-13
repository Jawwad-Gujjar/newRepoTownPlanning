const express = require('express');
 const clsRout = express.Router();

 
let classes = require('./allotmentmodal')
clsRout.route('/addallot').post(function (req, res) {
  console.log('R----')
  let CLS = new classes(req.body);
  console.log(CLS,'obj')
  CLS.save()
    .then(jk => {
      res.status(200).json({'Contact': 'Contact added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });

});
clsRout.route('/').get(function (req, res) {
  console.log('From Customer') 
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
