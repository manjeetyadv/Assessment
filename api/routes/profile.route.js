// profile .route.js
const express = require('express');
const app = express();
const profileRoutes = express.Router();
// Require profile model in our routes module
let profilemodel=require('../models/profilemodel');
profileRoutes.route('/add').post(function (req, res) {
  let profile = new profilemodel(req.body);
    profile.save()
    .then(profile => {
      res.status(200).json({'profile':'profile has been updated successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
profileRoutes.route('/').get(function (req, res) {
  profilemodel.find(function (err, profiles){
    if(err){
      console.log('error',err);
    }
    else {
      res.json(profiles);
    }
  });
});

// Defined edit route
profileRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  profilemodel.findById(id, function (err,profile){
      res.json(profile);
  });
});

//  Defined update route
profileRoutes.route('/update').post(function (req, res) {
  profilemodel.find(function(err, profilemodel) {
    if (!profilemodel)
      res.status(404).send("Record not found");
    else {
      profilemodel.profileName= req.body.profileName;
      profilemodel.profileMobile = req.body.profileMobile;
      profilemodel.profileEmail = req.body.profileEmail;
      profilemodel.profileDob=req.body.profileDob

      profilemodel.save().then(profilemodel => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
profileRoutes.route('/delete/:id').get(function (req, res) {
    profilemodel.findByIdAndRemove({_id: req.params.id}, function(err, profile){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = profileRoutes;