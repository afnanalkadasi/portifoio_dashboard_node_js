const database = require('../DB/connection');

const ServiceSchema = new database.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  icon:{
    type:String,
    required:true,
  },
  service_name:{
    type:String,
    required:true,
  },
 
  details:{
    type:String,
  },
  is_active: {
    type: Boolean,
     default: 1
    },
});

const Service = database.model('Service', ServiceSchema);
module.exports = Service;