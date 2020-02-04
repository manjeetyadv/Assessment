// profile.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for profile
let profile = new Schema({
  name: {
    type:String
  },
  mobile: {
    type:String
  },
  email:{
    type:String
  },
  dob:
  {
      type:String
  }
},{
    collection: 'profile'
});

module.exports = mongoose.model('profile', profile);