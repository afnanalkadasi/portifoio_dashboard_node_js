const database = require('../DB/connection');

const skillsSchema = new database.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
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

const Skills = database.model('Skills', skillsSchema);
module.exports = Skills;