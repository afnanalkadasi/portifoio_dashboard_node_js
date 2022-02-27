const mongoose = require('mongoose');

const DB = 'mongodb://127.0.0.1:27017/Portfolio';

mongoose
  .connect(DB, {
    autoIndex: true,
  })
  .then(() => {
    console.log('DB connected :)');
  });

const ContactSchema = new mongoose.Schema({
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

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;