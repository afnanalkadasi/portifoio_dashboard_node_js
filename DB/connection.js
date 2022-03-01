const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Portfolio')
    .then(() => { console.log("DB connected ") })
    .catch((err) => { console.log(` Error  ${err}`) });

module.exports = mongoose;