const mongoose = require('mongoose');

const DB = 'mongodb://127.0.0.1:27017/Portfolio';

mongoose
  .connect(DB, {
    autoIndex: true,
  })
  .then(() => {
    console.log('DB connected :)');
  });

const skillsSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  categotry:{
    type:String,
    required:true,
  },
  skill_name:{
    type: String ,
    required:true,
  },
  progress_percent:{
    type: Number,
    required: true 
  },
  is_active: {
    type: Boolean,
     default: 1 },
});

const Skills = mongoose.model('Skills', skillsSchema);
module.exports = Skills;