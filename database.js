const mongoose = require("mongoose");


const uri = "mongodb+srv://saadaijaz:13261823j@saad.yrqtmpf.mongodb.net/Blogs?retryWrites=true&w=majority";


mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

module.exports = mongoose;