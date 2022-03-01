const database = require('../DB/connection');

const workSchema = new database.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
    unique: true,
  }, 
  link:{
    type: String,
    required:true,
  },
     pro_image: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
       default: 1 },
    
});

const Work = database.model('Work', workSchema);

module.exports = Work;