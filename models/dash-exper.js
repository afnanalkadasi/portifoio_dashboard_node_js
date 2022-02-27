const mongoose = require('mongoose');

const DB = 'mongodb://127.0.0.1:27017/Portfolio';

mongoose
  .connect(DB, {
    autoIndex: true,
  })
  .then(() => {
    console.log('DB connected :)');
  });

const experSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  experince_name:{
    type:String,
    required:true,
  },
 
  place:{
    type:String,
    required:true,
  },
  details:{
    type:String,
  },
  year:{
    type:Number,
    required:true,
  },
  is_active: {
    type: Boolean,
     default: 1
    },
});

const Exper = mongoose.model('Experience', experSchema);
module.exports = Exper;