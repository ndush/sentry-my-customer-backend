const mongoose = require('mongoose')


const User = new mongoose.Schema({
  phone_number: { type: Number, required: true,  unique: true }, 
  first_name: { type: String, required: true }, 
  last_name: { type: String, required: true }, 
  email: { type: String, required: true,  unique: true }, 
  is_active: { type: Boolean, required: true }, 
  password: { type: String,  required: true }, 
  api_token: String, 
  user_role: { type: String, required: true }
}, { timestamps: true})

module.exports = mongoose.model('user', User)