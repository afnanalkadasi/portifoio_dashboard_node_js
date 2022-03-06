const database = require('../DB/connection');

const fileSchema = new database.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    
  }, 
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  Address: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  user_image: {
    type: String,
    required: true,
    },
  // cv_file: {
  //     type: String,
  //     required: true,
  //     },
    is_active: {
      type: Boolean,
       default: 1 },
    
});

const User = database.model('User', fileSchema);

module.exports = User;