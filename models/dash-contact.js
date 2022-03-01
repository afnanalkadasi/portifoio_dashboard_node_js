const database = require('../DB/connection');

const ContactSchema = new database.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
   icon:{
    type:String,
    required:true,
  },
  contact_name:{
    type:String,
    required:true,
  },
  link:{
    type: String,
    required:true,
  },
  is_active: {
    type: Boolean,
     default: 1
    },
});

const Contact = database.model('Contact', ContactSchema);
module.exports = Contact;